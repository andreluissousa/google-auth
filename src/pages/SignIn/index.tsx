import { GoogleLogo } from '@phosphor-icons/react';
import './styles.scss'

export function SignIn(){
    return (
        <div className="container">
            <h1>Acesse sua conta</h1>

            <span>
                Utilize a autenticação com o Google, você
                facilita a sua vida podendo utilizar a aplicação sem realizar cadastro.
            </span>

            <button type="button" className="button">
                <GoogleLogo />
                Entrar com Google
            </button>
        </div>
    )
}