import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    address: '',
    city: '',
    pinCode: '',
    state: '',
    country: '',
    accountNumber: '',
    bankName: '',
    branchName: '',
    ifscCode: ''
  });

  const updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
