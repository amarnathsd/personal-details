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
    // Fetch countries from the REST Countries API
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
    <div className="container mt-5">
      <h2>Address Details</h2>
      <form>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            value={formData.address}
            onChange={(e) => updateFormData({ address: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Pin Code</label>
          <input
            type="text"
            className="form-control"
            value={formData.pinCode}
            onChange={(e) => updateFormData({ pinCode: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            value={formData.state}
            onChange={(e) => updateFormData({ state: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Country</label>
          <select
            className="form-control"
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
        <button type="button" className="btn btn-secondary me-2" onClick={handleBack}>
          Back
        </button>
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
}

export default AddressDetails;
