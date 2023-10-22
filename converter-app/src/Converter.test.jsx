import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Converter from './converter';

test('renders the Converter component', () => {
  const { getByText } = render(<Converter />);
  const fromCurrencyLabel = getByText('From Currency');
  const toCurrencyLabel = getByText('To Currency');
  const amountLabel = getByText('Amount');
  const resultLabel = getByText('Result');

  expect(fromCurrencyLabel).toBeInTheDocument();
  expect(toCurrencyLabel).toBeInTheDocument();
  expect(amountLabel).toBeInTheDocument();
  expect(resultLabel).toBeInTheDocument();
});

test('updates the amount and result correctly', () => {
  const { getByText, getByLabelText } = render(<Converter />);
  const amountInput = getByLabelText('Amount');
  const resultValue = getByText('1');

  fireEvent.change(amountInput, { target: { value: '2' } });

  expect(amountInput.value).toBe('2');
  expect(resultValue.textContent).toBe('2'); 
});
