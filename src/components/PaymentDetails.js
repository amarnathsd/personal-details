import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext';

function PaymentDetails() {
  const { formData, updateFormData } = useContext(FormContext);
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');

  const handleSubmit = () => {
    if (!formData.accountNumber || !formData.bankName || !formData.branchName || !formData.ifscCode) {
      setFormError('All fields are required');
      return;
    }
    setFormError('');
    navigate('/summary');
  };

  const handleBack = () => {
    navigate('/address');
  };

  return (
    <div className="container mt-5">
      <h2>Payment Details</h2>
      <form>
        <div className="mb-3">
          <label>Account Number</label>
          <input
            type="text"
            className="form-control"
            value={formData.accountNumber}
            onChange={(e) => updateFormData({ accountNumber: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Bank Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.bankName}
            onChange={(e) => updateFormData({ bankName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Branch Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.branchName}
            onChange={(e) => updateFormData({ branchName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>IFSC Code</label>
          <input
            type="text"
            className="form-control"
            value={formData.ifscCode}
            onChange={(e) => updateFormData({ ifscCode: e.target.value })}
          />
        </div>
        {formError && <p className="text-danger">{formError}</p>}
        <button type="button" className="btn btn-secondary me-2" onClick={handleBack}>
          Back
        </button>
        <button type="button" className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PaymentDetails;
