import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext';

function AddressDetails() {
  const { formData, updateFormData } = useContext(FormContext);
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countryList = data.map(country => ({
          name: country.name.common,
          code: country.cca2
        }));
        setCountries(countryList);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleNext = () => {
    if (!formData.address || !formData.city || !formData.pinCode || !formData.state || !formData.country) {
      setFormError('All fields are required');
      return;
    }
    setFormError('');
    navigate('/payment');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="address-form-container mt-5">
      <h2 className="form-heading">Address Details</h2>
      <p className="form-subheading">Please provide your address information</p>
      <form>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-input"
            placeholder="Address*"
            value={formData.address}
            onChange={(e) => updateFormData({ address: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-input"
            placeholder="City*"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-input"
            placeholder="Pin Code*"
            value={formData.pinCode}
            onChange={(e) => updateFormData({ pinCode: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-input"
            placeholder="State*"
            value={formData.state}
            onChange={(e) => updateFormData({ state: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <select
            className="form-control form-input"
            value={formData.country}
            onChange={(e) => {
              const selectedCountry = e.target.value;
              updateFormData({ country: selectedCountry });
              setSelectedCountry(selectedCountry);
            }}
          >
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        {formError && <p className="text-danger">{formError}</p>}
        <div className="form-btn-div">
          <button type="button" className="form-btn me-2" onClick={handleBack}>
            Back
          </button>
          <button type="button" className="form-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddressDetails;
