import './LoginSection.css'

const LoginSection = () => {

  return (

    <section className="login">
      <div className="loginform">
        <h2>Iniciar sesión</h2>
        <form action="submit">
          <label>Correo</label>
          <input type="email" />
          <label>Contraseña</label>
          <input type="password" />
          <input type="button" className='button-login' value='Ingresar'/>
        </form>
      </div>
      <div>
        <img alt='personas-felices' src='loginimg.jpg' className='img-login'></img>
      </div>
    </section>
  )
}

export default LoginSection