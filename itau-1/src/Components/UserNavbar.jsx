import './UserNavbar.css';

const Navbar = () => {
  return (
    <>
    <nav class='nav-2'>
      <img alt='logo'src='itau.png'></img>
      <p>Espacio de asistencia</p>
      <div class='cerrar-sesion'>
      <p>Cerrar sesión</p><img alt='logOut' src='out.png' class='logOut'></img>
      </div>
    </nav>
    <footer>
      <p>Robotics 2023</p></footer>
    </>
  )
}

export default Navbar;