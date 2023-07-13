import Menu from '../components/menu'

export default function Header(props) {
    return (
      <>
        <header className="d-inline">
          <Menu></Menu>
          <p className="text-secondary">Usted se encuentra en la página: <u className="">{props.pagetitle}</u></p>
        </header>
      </>
    )
}