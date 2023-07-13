'use client'
import Card from './card'

export default function Personas(props) {
  let lista = props.lista
  let cards = []; 
  for (let i=0; i<lista.length; i++) {
    const list = lista[i]
    cards.push(<Card key={list.id} name={list.name} title={list.title} text={list.text} img={list.img} />)
  }

  return (
      <>
        <div className='container d-flex flex-wrap'>
          {cards}
        </div>
      </>
  )
}
