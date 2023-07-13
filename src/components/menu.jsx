'use client'
import { useEffect, useState } from "react"


export default function Menu(props) {

  const [usrData, setUsrData] = useState(null)

  useEffect(() => {
    if (document) {
      let closebtn = document.getElementById("closeLoginBtn")
      if (closebtn) {
        var event = new CustomEvent("click");
        closebtn.dispatchEvent(event);
      }
    }
  }, [usrData])

  const login = (event) => {
    event.preventDefault()
    event.stopPropagation()

    let frm = event.target

    if (frm.checkValidity()) {

      var data = {}
      for (var i = 0; i<frm.length; i++) {
        var field = frm[i]
        if (field.getAttribute("submitable") == "true") {
          data[field.name] = field.value;
        }
      }
      setUsrData(data)
      frm.classList.add('was-validated')
    } 
  }

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">          
            <img src="" className="rounded float-start img-width" />
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profesores">Profesores</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/estudiantes">Estudiantes</a>
                </li>    
                  {usrData == null ?
                    (<>
                    <li className="nav-item">
                      <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#loginModal">Ingresar</button>
                    </li>
                    </>
                    ) 
                    :
                    (<>
                    <li className="nav-item m-auto me-2">   
                      <p className="text-primary m-auto">Bienvenido: {usrData.username}</p>
                    </li>
                    <li className="nav-item">   
                      <button className="btn btn-outline-success" >Salir</button>
                    </li>
                    </>
                    )     
                  }
              </ul>
            </div>
          </div>
        </nav>
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <form id="login_frm" className="needs-validation" onSubmit={login} noValidate>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="loginModalLabel">Login</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body ">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="username_fld" className="form-label">Usuario</label>
                      <input type="text" className="form-control" id="username_fld" name="username" submitable="true" placeholder="usuario" required />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="password_fld" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password_fld" name="pwd" submitable="true" required />
                    </div>
                  </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeLoginBtn">Close</button>
                <button type="submit" className="btn btn-primary" >Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    )
}

