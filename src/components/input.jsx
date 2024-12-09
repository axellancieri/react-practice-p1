import { useState } from 'react';

export default function Input({inputValue = "", labelName}) {


    const [inputCalculator, setInputCalculator] = useState(inputValue);

    function handleChange(event) {
        
        const newValue = event.target.value;

        setInputCalculator(newValue);   
        
        console.log(newValue)
  
    }


    
    return (
        <>
            <label className="input-group">{labelName}</label>
            <input 
            type="text"
            value={inputCalculator}
            onChange={handleChange}
            />
        </>
    )
}