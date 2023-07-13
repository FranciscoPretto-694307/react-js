'use client'
import Header from '../../components/header'
import Personas from '../../components/personas'


export default function Estudiantes() {
  const resources = [{"id":1, "img":"/estudiante1.jpg", "title":"ESTUDIANTE1", "name":"MARTA", "text":"ESTE ES EL TEXTO"},
  {"id":2, "img":"/estudiante2.webp", "title":"ESTUDIANTE2", "name":"MARCOS", "text":"ESTE ES EL TEXTO"},
  {"id":3, "img":"/estudiante3.jpg", "title":"ESTUDIANTE3", "name":"LUCIO", "text":"ESTE ES EL TEXTO"},
  {"id":4, "img":"/ulises.png", "title":"ESTUDIANTE4", "name":"ULISES", "text":"ESTE ES EL TEXTO"}]
  
  return (
      <>
    <Header pagetitle="Estudiantes" />
    <main className="container text-center text-primary">
      <div>
        <h1>Estudiantes</h1> 
      </div>
      <Personas lista={resources}></Personas>
    </main>
    </>
  )
}