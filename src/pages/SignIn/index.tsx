import { GoogleLogo } from '@phosphor-icons/react';
import './styles.scss'

export function SignIn(){
    return (
        <div className="container">
            <h1>
                MAKE YOUR <br />
                <span id="why">WHY</span> BIGGER <br />
                THAN YOUR <br />
                EXCUSES 
            </h1>


            <button type="button" className="button">
                <GoogleLogo />
                Sign In with Google
            </button>
            <span className="button-description">                
                Use Google authentication, and you'll make your life easier by being able to use the application without having to register.
            </span>
        </div>
    )
}