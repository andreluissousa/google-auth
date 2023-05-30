import { GoogleLogo } from '@phosphor-icons/react';
import './styles.scss'

export function SignIn(){
    return (
        <div className="container">
            <h1>Access your account</h1>

            <span>                
                Use Google authentication, and you'll make your life easier by being able to use the application without having to register.
            </span>

            <button type="button" className="button">
                <GoogleLogo />
                Sign In with Google
            </button>
        </div>
    )
}