import React from 'react'
import './styles/PageError.css'
import image_error from '../images/500 Internal Server Error-bro.svg';


function PageError(props) {
    return (
        <div className="PageError"><h1>{props.error.message}</h1>
            <img width="500px" height="auto" src={image_error} alt="Logo" />

        </div>
    )
}

export default PageError
