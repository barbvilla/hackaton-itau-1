import './Modal.css';

const Modal = ({toggleModal}) => {

  return (
    <>
      <div class='modal'>
        <div class='cerrar-container'>
          <button class='cerrar' onClick={toggleModal}>X</button>
        </div>
        <h1>Error al iniciar</h1>
        <ul>
          <li>Revisa si ingresaste bien tu correo electrónico</li>
          <li>Ingresaste una contraseña no válida</li>
          <li>Intenta nuevamente</li>
        </ul>
        <div class='btn-asistencia'>
          <button>Pedir asistencia en línea</button>
        </div>
      </div>
    </>
  )
}

export default Modal;