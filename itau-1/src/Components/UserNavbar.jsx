import './UserNavbar.css';

const Navbar = () => {
  return (
    <>
    <nav>
      <img alt='logo'src='itau.png'></img>
      <p>Inicio de sesión</p>
      <div class='cerrar'>
      <p>Cerrar sesión</p><img alt='logOut' src='out.png' class='logOut'></img>
      </div>
    </nav>
    <footer>
      <p>Robotics 2023</p></footer>
    </>
  )
}

export default Navbar;