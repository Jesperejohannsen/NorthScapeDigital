import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="app__navigationBar">
      <ul className='app__navigationBar-ul'>
        <li className='app__navigationBar-li'>Home</li>
        <li className='app__navigationBar-li'>About</li>
        <li className='app__navigationBar-li'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar