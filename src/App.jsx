import { useState } from 'react';
import Input from './components/input'
import Table from './components/table'

function App() {

  const [inputCalculator, setInputCalculator] =  useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });;

  // const getObjName = labelName.split(" ").join("").toLowerCase();

  const handleInputChange = (name, value) => {
    setInputCalculator(prevObj => ({
      ...prevObj,
      [name]: value
    }))
  }

  console.log(inputCalculator)

  return (
    <>
      <form action="" id="user-input">
        <Input
          inputCalculator={inputCalculator.initialInvestment}
          labelName="Initial Investment"
          setInputCalculatorProp={(value) => {handleInputChange("initialInvestment", value)}}
        />
        <Input
          inputCalculator={inputCalculator.annualInvestment}
          labelName="Annual Investment"
          setInputCalculatorProp={(value) => {handleInputChange("annualInvestment", value)}}
        />
        <Input
          inputCalculator={inputCalculator.expectedReturn}
          labelName="Expected Return"
          setInputCalculatorProp={(value) => {handleInputChange("expectedReturn", value)}}
        />
        <Input
          inputCalculator={inputCalculator.duration}
          labelName="Duration"
          setInputCalculatorProp={(value) => {handleInputChange("duration", value)}}
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
