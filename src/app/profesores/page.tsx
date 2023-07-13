'use client'
import Header from '../../components/header'
import Personas from '../../components/personas'
import { useState , useEffect } from "react"


export default function Profesores() {
  const [buscador, setBuscador] = useState("")
  const [resources, setResources] = useState([])

  const loadProfesores = () => {
    let url = '/api/profesores'
    if (buscador != "") {
      url += '?s'+buscador
    }
    let result = fetch(url)
    result.then(r => {
      console.log(r)
      if (r.ok) {
        let prof = r.json()
        console.log(prof)
        prof.then(result => {
          console.log(result)
          setResources(result.profesores)
        })
      } else {
        console.log("no encontre la pag")
      }
    })
  }

  useEffect(() => {
    loadProfesores()
  }, []);

  const updateBuscador = (e) => {
    let input = e.currentTarget 
    setBuscador(input.value)
  }

  return (
      <>
    <Header pagetitle="Profesores" />
    <main className="container text-center text-primary">
      <div>
        <h1>Profesores</h1> 
      </div>
      <input type="text" onChange={updateBuscador} placeholder="buscador"></input>
      <Personas lista={resources}></Personas>
    </main>
    </>
  )
}