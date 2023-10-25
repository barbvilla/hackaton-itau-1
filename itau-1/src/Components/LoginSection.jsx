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
          <input type="email" />
          <p>Contraseña</p>
          <input type="password" />
          <br/>
          <input type="button" className='button-login' value='Ingresar'/>
        </form>
      </div>
      <div class='img-container'>
        <img alt='personas-felices' src='loginimg.jpg' className='img-login'></img>
      </div>
    </section>
  )
}

export default LoginSection