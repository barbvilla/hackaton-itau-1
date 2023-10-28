
import { useContext} from 'react';
import { VerificationContext } from '../Context/verification';
import './SecuritySection.css';

const SecuritySection = () => {
  const {setVerificationCode} = useContext(VerificationContext);
  const useOnLogin = useContext(VerificationContext);

  return (

    <section className="Security">
      <div className="Securityform">
        <h2>Verificación de seguridad</h2>
        <form action="submit">
          <label>Código de verificación por email</label>
          <input
            type="text"
            className='codigo'
            placeholder="Reenviar Código"
            onChange={(e) => setVerificationCode(e.target.value)} />
          <input
            type="button"
            className='button-security'
            value='Enviar'
            onClick={useOnLogin} />
          <input
            type="button"
            className='button-validation'
            value='Tengo problemas para acceder' />
        </form>
      </div>
    </section>
  )
}

export default SecuritySection