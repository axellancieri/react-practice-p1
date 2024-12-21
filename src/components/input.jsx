export default function Input({inputCalculator, setInputCalculatorProp, labelName}) {

    const getObjNameUp = labelName.split(" ").join("").toLowerCase();
  

    function handleChange(event) {
        
        const newValue = event.target.value;
        
        setInputCalculatorProp(getObjNameUp, newValue);   
        
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