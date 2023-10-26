import './LoginSection.css'

const LoginSection = () => {

  return (

    <section className="login">
      <div className="loginform">
      <h1>
        Bienvenido al <br /> asistente virtual.
      </h1>
        <h2>Iniciar sesión</h2>
        <form action="submit">
          <p>Correo</p>
          <input type="email" placeholder='Ejemplo@itau.cl' />
          <p>Contraseña</p>
          <input type="password" placeholder='Ingresa contraseña'/>
          <br/>
          <input type="button" id='button-login' value='Ingresar'/>
          <hr/>
          <input type="button" id='button-problem' value='Tengo problemas para acceder'/>
        </form>
      </div>
      <div class='img-container'>
        <img alt='personas-felices' src='loginimg.jpg' className='img-login'></img>
      </div>
    </section>
  )
}

export default LoginSection