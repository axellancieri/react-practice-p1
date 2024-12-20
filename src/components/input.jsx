export default function Input({inputCalculator, setInputCalculatorProp, labelName}) {
  
        // const getInvestObj = {
    //     [getObjName]: inputCalculator
    // };
    // const getInvestObjAll = {
    //     ...getInvestObj,
    //     [getObjName]: inputCalculator
    // }

    function handleChange(event) {
        
        const newValue = event.target.value;
        
        setInputCalculatorProp(newValue);   
        
        
  
    }


    // console.log(getInvestObj)
    
    
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