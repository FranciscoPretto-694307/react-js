'use client'
import Card from '../components/card'
import Header from '../components/header'


export default function Home() {

  return (
    <>
    <Header pagetitle="home" />
    <main className="container text-center text-primary">
      <div>
        <h1>Nuestro Team</h1>
      </div>
      <div className='row'>
        <Card name="Sofia" title="Social Media Manager" img="/sofia.png" />
        <Card name="Ulises" title="Writer" img="/ulises.png" />
        <Card name="Lucía" title="Diseñadora" img="lucia.png" />
      </div>
    </main>
    </>
  )
}
