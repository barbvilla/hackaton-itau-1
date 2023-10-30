import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './UserNavbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    })
  }
  return (
    <>
      <nav class='nav-2'>
        <img alt='logo' src='itau.png'></img>
        <p>Espacio de asistencia</p>
        <div class='cerrar-sesion' onClick={logOut}>
          <p>Cerrar sesión</p><img alt='logOut' src='out.png' class='logOut'></img>
        </div>
      </nav>
      <footer>
        <p>Robotics 2023</p></footer>
    </>
  )
}

export default Navbar;