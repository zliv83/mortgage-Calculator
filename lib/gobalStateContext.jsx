'use client';
import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState('repayment');
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [calculated, setCalculated] = useState(false);
  const [monthlyPayments, setMonthlyPayments] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [errors, setErrors] = useState({
    mortgageAmount: false,
    mortgageTerm: false,
    interestRate: false,
  });
  const [errorText, setErrorText] = useState({
    mortgageAmount: '',
    mortgageTerm: '',
    interestRate: '',
  });

  const validateInputs = () => {
    const newErrors = { ...errors };
    const newErrorTexts = { ...errorText };

    if (!mortgageAmount || isNaN(parseFloat(mortgageAmount))) {
      newErrors.mortgageAmount = true;
      newErrorTexts.mortgageAmount = 'Invalid mortgage amount';
    }
    if (!mortgageTerm || isNaN(parseInt(mortgageTerm))) {
      newErrors.mortgageTerm = true;
      newErrorTexts.mortgageTerm = 'Invalid mortgage term';
    }
    if (!interestRate || isNaN(parseFloat(interestRate))) {
      newErrors.interestRate = true;
      newErrorTexts.interestRate = 'Invalid interest rate';
    }

    setErrors(newErrors);
    setErrorText(newErrorTexts);

    return (
      !newErrors.mortgageAmount &&
      !newErrors.mortgageTerm &&
      !newErrors.interestRate
    );
  };

  const calculateMortgage = () => {
    const principal = parseFloat(mortgageAmount);
    const annualInterestRate = parseFloat(interestRate) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = parseInt(mortgageTerm) * 12;

    const monthlyPayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    const totalAmount = monthlyPayment * numberOfPayments;
    const totalInterest = totalAmount - principal;

    setMonthlyPayments(
      monthlyPayment.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    );
    setTotalAmount(
      totalAmount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    );
    setTotalInterest(
      totalInterest.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    );
    setCalculated(true);
  };

  const handleNumberFieldErrorChange = (field, value) => {
    switch (field) {
      case 'mortgageAmount':
        setMortgageAmount(value);
        break;
      case 'mortgageTerm':
        setMortgageTerm(value);
        break;
      case 'interestRate':
        setInterestRate(value);
        break;
      default:
        break;
    }

    if (!value || isNaN(value) || value.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: true }));
      setErrorText((prevErrorText) => ({
        ...prevErrorText,
        [field]: `Invalid ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
      setErrorText((prevErrorText) => ({ ...prevErrorText, [field]: '' }));
    }
  };

  return (
    <GlobalStateContext.Provider
      value={{
        selectedValue,
        setSelectedValue,
        mortgageAmount,
        setMortgageAmount,
        mortgageTerm,
        setMortgageTerm,
        interestRate,
        setInterestRate,
        calculated,
        setCalculated,
        totalAmount,
        setTotalAmount,
        totalInterest,
        setTotalInterest,
        monthlyPayments,
        setMonthlyPayments,
        calculateMortgage,
        validateInputs,
        errors,
        setErrors,
        errorText,
        setErrorText,
        handleNumberFieldErrorChange,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within GlobalStateProvider');
  }
  return context;
};

export default GlobalStateContext;
