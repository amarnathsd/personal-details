import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalDetails from './components/PersonalDetails';
import AddressDetails from './components/AddressDetails';
import PaymentDetails from './components/PaymentDetails';
import Summary from './components/Summery';
import { FormProvider } from './context/FormContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PersonalDetails />} />
          <Route path="/address" element={<AddressDetails />} />
          <Route path="/payment" element={<PaymentDetails />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
