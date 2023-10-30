import { useState } from "react";

const ModalVerification = () => {
    const [verificationCode, setVerificartionCode] = useState('');


    return (
        <>
            <section className="Security">
                <div className="Securityform">
                    <h2>Verificación de seguridad</h2>
                    <form action="submit">
                        <label>Código de verificación por email</label>
                        <input type="text" className='codigo' placeholder="Reenviar Código" onChange={(e) => setVerificartionCode(e.target.value)} />
                        <input type="button" className='button-security' value='Enviar' onClick={handleClick} />
                        <input type="button" className='button-validation' value='Tengo problemas para acceder' />
                    </form>
                </div>
            </section>
        </>
    )
}
export default ModalVerification;