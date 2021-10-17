export default (props) => {

  const { listUsers, edit, remove } = props

  function renderUsers() {
    return listUsers.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning" onClick={() => edit(user)}>
              <i className="fa fa-pencil"></i>
            </button>

            <button className="btn btn-danger ml-2" onClick={() => remove(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })
  }

  return(
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderUsers()}
      </tbody>
    </table>
  )
}