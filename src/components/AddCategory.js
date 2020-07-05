
import React, { useState } from 'react'
import Protypes from 'prop-types';

export const AddCategory = ({setcategory}) => {

    const [inputvalue, setinputValue] = useState('');

    const handleInputChange=(e)=>{
        //console.log(e.target.value);
        setinputValue(e.target.value);
    }

    const handleSubmit=(e)=>{

        e.preventDefault();  //para prevenir conportamiento por default

        ///console.log("Submit hecho");

        if (inputvalue.trim().length > 2) {
            
            setcategory(cats => [inputvalue,...cats]);
            setinputValue(' ');
        }

    }

    return (
        <div>

                {/* <h1>{inputvalue}</h1> */}
            <form onSubmit={handleSubmit}>
            <input 
            type= "text"
            value={inputvalue}
            onChange={handleInputChange}
            />
            </form>



        </div>
    )
}

AddCategory.prototype={
    setcategory:Protypes.func.isRequired
}
