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
    <div className="payment-form-container mt-5">
      <h2 className="form-heading">Payment Details</h2>
      <p className="form-subheading">Enter your payment information below</p>
      <form>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-input"
            placeholder="Account Number*"
            value={formData.accountNumber}
            onChange={(e) => updateFormData({ accountNumber: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-input"
            placeholder="Bank Name*"
            value={formData.bankName}
            onChange={(e) => updateFormData({ bankName: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-input"
            placeholder="Branch Name*"
            value={formData.branchName}
            onChange={(e) => updateFormData({ branchName: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-input"
            placeholder="IFSC Code*"
            value={formData.ifscCode}
            onChange={(e) => updateFormData({ ifscCode: e.target.value })}
          />
        </div>
        {formError && <p className="text-danger">{formError}</p>}
        <div className="form-btn-div">
          <button type="button" className="btn btn-secondary form-btn me-2" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="btn btn-success form-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentDetails;
