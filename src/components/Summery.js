import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';

function Summary() {
  const { formData } = useContext(FormContext);

  return (
    <div className="container mt-5">
      <h2>Summary</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>First Name:</strong> {formData.firstName}</li>
        <li className="list-group-item"><strong>Last Name:</strong> {formData.lastName}</li>
        <li className="list-group-item"><strong>Phone Number:</strong> {formData.phoneNumber}</li>
        <li className="list-group-item"><strong>Gender:</strong> {formData.gender}</li>
        <li className="list-group-item"><strong>Address:</strong> {formData.address}</li>
        <li className="list-group-item"><strong>City:</strong> {formData.city}</li>
        <li className="list-group-item"><strong>Pin Code:</strong> {formData.pinCode}</li>
        <li className="list-group-item"><strong>State:</strong> {formData.state}</li>
        <li className="list-group-item"><strong>Country:</strong> {formData.country}</li>
        <li className="list-group-item"><strong>Account Number:</strong> {formData.accountNumber}</li>
        <li className="list-group-item"><strong>Bank Name:</strong> {formData.bankName}</li>
        <li className="list-group-item"><strong>Branch Name:</strong> {formData.branchName}</li>
        <li className="list-group-item"><strong>IFSC Code:</strong> {formData.ifscCode}</li>
      </ul>
    </div>
  );
}

export default Summary;
