import { useState } from 'react';
import Input from './components/input'
import Table from './components/table'

function App() {

  const [inputCalculator, setInputCalculator] =  useState({
    initialinvestment: "",
    annualinvestment: "",
    expectedreturn: "",
    duration: "",
  });

  
  const handleInputChange = (name, value) => {
    setInputCalculator(prevObj => ({
      ...prevObj,
      [name]: value,
    }))
  }

  console.log(inputCalculator)

  return (
    <>
      <form action="" id="user-input">
        <Input
          inputCalculator={inputCalculator.initialInvestment}
          labelName="Initial Investment"
          setInputCalculatorProp={handleInputChange}
        />
        <Input
          inputCalculator={inputCalculator.annualInvestment}
          labelName="Annual Investment"
          setInputCalculatorProp={handleInputChange}
        />
        <Input
          inputCalculator={inputCalculator.expectedReturn}
          labelName="Expected Return"
          setInputCalculatorProp={handleInputChange}
        />
        <Input
          inputCalculator={inputCalculator.duration}
          labelName="Duration"
          setInputCalculatorProp={handleInputChange}
        />
      </form>
      <table id="result">
        <thead className="center">
          <tr>
            <th>
              Year
            </th>
            <th>
              Investment Value
            </th>
            <th>
              Interest (Year)
            </th>
            <th>
              Total Interest
            </th>
            <th>
              Invested Capital
            </th>
          </tr>
        </thead>
        <Table />
      </table>
    </>
  )
}

export default App
