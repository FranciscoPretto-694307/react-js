'use client'
import { useState , useEffect } from "react"

export default function Card(props) {
    const [cnt, setCnt] = useState(0);
    const handleClick = () => {
        let c = cnt + 1
        setCnt(c)
    }
    useEffect(() => {
        setTitle("Aquí va el titulo")
      }, [])
    
      const [title, setTitle] = useState("")
      const updateTitle = (e) => {
        let input = e.currentTarget 
        setTitle(input.value)
      }

    return (
    <div className="col card text-center">
        <img src={props.img} alt="Imagen" width="50" className="card-img-top img-fluid p-5" />
        <div className="card-body">
            <h2 className="text-dark">{props.name}</h2>
            <h3 className="text-primary">{title}</h3>
            <p className="text-secondary">{props.text}</p>
            <input className="form-control" type="text" onChange={updateTitle} placeholder="escriba el titulo"></input>
            <button className="btn btn-primary" >Ver mi perfil</button>
        </div>
        <div>
            { cnt > 0 ?
            (<h6>cnt: {cnt}</h6>) :
            (<p>Contador</p>)
            }
            <button name="increment" onClick={handleClick}>Contar</button>
        </div>
    </div>
    )
}