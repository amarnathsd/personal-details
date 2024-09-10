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
    } else if (formData.phoneNumber <= 999999999 || formData.phoneNumber >= 9999999999) {
      setFormError('Phone Number is not correct');
      return;
    }
    setFormError('');
    navigate('/address');
  };

  return (
    <div className="contact-form-container mt-5">
      <h2 className="form-heading">Personal Details</h2>
      <p className="form-subheading">
        Let's know some information about you
      </p>
      <form>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-input"
            placeholder="First name*"
            value={formData.firstName}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-input"
            placeholder="Last name*"
            value={formData.lastName}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="tel"
            className="form-control form-input"
            placeholder="Phone number*"
            value={formData.phoneNumber}
            onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
            required
          />
        </div>
        <div className="form-group mb-3">
          <select
            className="form-control form-input"
            value={formData.gender}
            onChange={(e) => updateFormData({ gender: e.target.value })}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {formError && <p className="text-danger">{formError}</p>}
        <div className='form-btn-div'>
        <button type="button" className="btn btn-primary form-btn" onClick={handleNext}>
          Next
        </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
