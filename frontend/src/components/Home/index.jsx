import Main from '../template/Main'

export default (props) => {

  return(
    <Main icon="home" title="Início" subtitle="Estudo de CRUD">
      <div className="display-4"> Bem Vindo! </div>
      <hr />
      <p className="mb-0">Sistema para estudo de CRUD</p>
    </Main>
  )
}