import { useState } from 'react';
import { GoogleLogo } from '@phosphor-icons/react';

import { GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import { auth } from '../../services/firebase';

import './styles.scss'

export function SignIn(){
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user)
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="container">
            
            <h1>
                MAKE YOUR <br />
                <span id="why">WHY</span> BIGGER <br />
                THAN YOUR <br />
                EXCUSES 
            </h1>

            <span className="intro">Work on yourself is a daily process, so do that with day by day app</span>

            <button type="button" className="button" onClick={handleGoogleSignIn}>
                <GoogleLogo />
                Sign In with Google
            </button>
            <span className="button-description">                
                Use Google authentication, and you'll make your life easier by being able to use the application without having to register.
            </span>
            <div className='user'>
                {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>
        </div>
    )
}