import { useState } from 'react';
import { GoogleLogo } from '@phosphor-icons/react';

import { GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import { auth } from '../../services/firebase';

import './styles.scss'

let usuarioLogado: User;

export function SignIn(){
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            usuarioLogado = result.user;
            setUser(result.user);
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="container">
            
            {! user.refreshToken && <h1>
                MAKE YOUR <br />
                <span id="why">WHY</span> BIGGER <br />
                THAN YOUR <br />
                EXCUSES 
            </h1>}

            {! user.refreshToken && <span className="intro">Work on yourself is a daily process, so do that with day by day app</span>}

            {! user.refreshToken && <button type="button" className="button" onClick={handleGoogleSignIn}>
                <GoogleLogo />
                Sign In with Google
            </button>}
            {! user.refreshToken && <span className="button-description">                
                Use Google authentication, and you'll make your life easier by being able to use the application without having to register.
            </span>}
            
            { user.refreshToken && <InicialPage />}
        </div>
    )
}

export function InicialPage(){
    return (
        <div className='inicialPage'>
            <div className='user'>
                {usuarioLogado.photoURL && <img src={usuarioLogado.photoURL} alt="Foto do usuário" />}
                <span> Welcome <strong>{usuarioLogado && usuarioLogado.displayName}</strong> to day by day app</span>
            </div>
        </div>
    )
}