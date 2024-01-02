import React, { useState } from 'react';

function SalaryCalculator() {
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("");
  const [basicsalary, setBasicSalary] = useState("");
  const [salary, setSalary] = useState(0);

  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setBasicSalary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSalary = Number(basicsalary) + (Number(hours) * Number(rate));
    setSalary(newSalary);
  };

  return (
    <div className='sal-inv'>
      <div className='headbar'>
      EMPLOYEE MANAGEMENT
    </div>
      <h1>Salary Calculator</h1>
      <table>
        <tbody>
          <tr>
            <td>Hours:</td>
            <td><input type="text" className='form-field' value={hours} onChange={handleHoursChange} /></td>
          </tr>
          <tr>
            <td>Hour Rate:</td>
            <td><input type="text" className='form-field' value={rate} onChange={handleRateChange} /></td>
          </tr>
          <tr>
            <td>Basic Salary:</td>
            <td><input type="text" className='form-field' value={basicsalary} onChange={handleSalaryChange} /></td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2"><button type="submit" className='submit-sal' onClick={handleSubmit}>Calculate Salary</button></td>
          </tr>
        </tbody>
      </table>
      <h2>Final Salary: RS {salary} /=</h2>
    </div>
  )
}

export default SalaryCalculator;
