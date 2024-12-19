// import { useState } from 'react';
import Input from './components/input'
import Table from './components/table'

function App() {
  return (
    <>
      <form action="" id="user-input">
        <Input
          labelName="Initial Investment"
        />
        <Input
          // inputValue={inputCalculator}
          labelName="Annual Investment"
          // handleOnChange={handleChange}
        />
        <Input
          // inputValue={inputCalculator}
          labelName="Expected Return"
          // handleOnChange={handleChange}
        />
        <Input
          // inputValue={inputCalculator}
          labelName="Duration"
          // handleOnChange={handleChange}
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
