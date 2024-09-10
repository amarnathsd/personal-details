import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext';

function PersonalDetails() {
  const { formData, updateFormData } = useContext(FormContext);
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');

  const handleNext = () => {
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.gender) {
      setFormError('All fields are required');
      return;
    } else if (formData.phoneNumber <= 999999999 ||formData.phoneNumber >= 9999999999  ){
        setFormError('Phone Number is not correct');
        return;
    }
    setFormError('');
    navigate('/address');
  };

  return (
    <div className="container mt-5">
      <h2>Personal Details</h2>
      <form>
        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ram"
            value={formData.firstName}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Singh"
            value={formData.lastName}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="987456235"
            value={formData.phoneNumber}
            onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <select
            className="form-control"
            value={formData.gender}
            onChange={(e) => updateFormData({ gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {formError && <p className="text-danger">{formError}</p>}
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
}

export default PersonalDetails;
