export default (props) => {

  const { name, email, handleName, save, cancel } = props
  
  return(
    <div className="form">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input 
              type="text"
              className="form-control"
              placeholder="Nome..."
              name="name"
              value={name}
              onChange={(evt) => handleName('name', evt)}
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="text"
              className="form-control"
              placeholder="Email..."
              name="email"
              value={email}
              onChange={(evt) => handleName('email', evt)}
            />
          </div>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-primary"
            onClick={(evt) => save(evt)}
          >
            Salver
          </button>

          <button className="btn btn-secondary ml-2"
            onClick={(evt) => cancel(evt)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}