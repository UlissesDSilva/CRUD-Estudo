import { Component, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from '../../services/api'

import Main from "../template/Main";
import Form from "./Form";
import List from "./List";

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários'
}

const initialState = {
  user: {
    name: '',
    email: ''
  },
  list: []
}


export default class User extends Component {
  constructor(props){
    super(props)

    this.clear = this.clear.bind(this)
    this.save = this.save.bind(this)
    this.upField = this.upField.bind(this)
    this.getUpdatedList = this.getUpdatedList.bind(this)
    this.load = this.load.bind(this)
    this.remove = this.remove.bind(this)
  }
  
  state = { ...initialState }

  componentWillMount() {
    api.get()
      .then(resp => {
        this.setState({
          list: resp.data
        })
      })
  }

  load(user){
    this.setState({ user })
  }

  remove(user) {
    api.delete(`${user.id}`)
      .then(resp => {
        const list = this.state.list.filter(
          u => u !== user
        )
        this.setState({ list })
      })
  }  

  clear() {
    this.setState({
      user: {
        name: '',
        email: ''
      }
    })
  }

  // se o id do usuário está presente, a requisição será de autalizar
  async save() {
    const user = this.state.user
    const method = user.id ? "put" : "post"
    const userId = user.id ? `/${user.id}` : ""

    try {
      const response = await api[method](userId, user)
      const list = this.getUpdatedList(response.data)
      this.setState({
        user: initialState.user,
        list
      })
      
      toast.success("Usuário cadastrado com sucesso", {
        position: toast.POSITION.TOP_RIGHT,
      })
    } catch (error) {
      toast.error("Erro ao cadastrar usuário!", {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }

  getUpdatedList(upUser) {
    const list = this.state.list.filter(user => user.id !== upUser.id)
    list.unshift(upUser)
    return list
  }

  upField(field, evt){
    const user = { ...this.state.user }
    user[field] = evt.target.value
    this.setState({ user })
  }

  renderUsers(){
    return this.state.list
  }

  render(){
    return(
      <Main {...headerProps}>
        <Form 
          name={this.state.user.name}
          email={this.state.user.email}
          handleName={this.upField}
          save={this.save}
          cancel={this.clear}
        />

        <List 
          listUsers={this.state.list}
          edit={this.load}
          remove={this.remove}
        />
      </Main>
    )
  }
}