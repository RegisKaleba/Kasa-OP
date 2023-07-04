import React from 'react';
import '../styles/Error.css';
import Header from '../components/Header';



function Error() {
    return(
        <React.StrictMode>
            <Header />
            <div className='error-page'>

               {/*<span className='error-status'>{error.status}</span> */}

                <span className='error-desc'>Oups! La page que vous demandez n'existe pas.</span>
                <a className='home-link'>Retourner sur la page d’accueil</a>
            </div>  
        </React.StrictMode>
    );
}

export default Error;