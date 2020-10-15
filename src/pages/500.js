import React from 'react'
import '../components/styles/Errors.css'

const FatalError = () => (
    <div className="text-center w-100">
        <h1 className="Error_Text">Error: 500 Unexpected Error</h1>    
        <img src='https://lh3.googleusercontent.com/pw/ACtC-3dWJPphG60k5lOVbo3mWJ-wzGcc-6qCFAKsjc_kjwZVyVV8WZV4RJ55pPZbMZLHp6CEeZe-owcBTtvQEfG59BX29bK5bM8k3uN1ZVyJPgEL-iquhmQ9Wp8FYzieL7NLpMmKjmai6f1wDnuVhj3fAWt8=w884-h292-no?authuser=0'
            alt="500 Unexpected Error" className="Error_Image" />
    </div>
)

export default FatalError