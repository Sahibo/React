import React, { useEffect, useState } from 'react';

const Converter = () => {
    const [response, setResponse] = useState({});
    const currencyOptions = Object.keys(response);
    const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState('EUR');
    const [selectedCurrencyTo, setSelectedCurrencyTo] = useState('EUR');
    const [amountFrom, setAmountFrom] = useState(1);
    const [result, setResult] = useState(1); 

    const fetchContent = async () => {
        const options = { method: 'GET', headers: { accept: 'application/json' } };

        const result = await fetch('https://api.fastforex.io/fetch-multi?from=USD&to=EUR%2CAZN%2CTRY&api_key=d2e8f0b4f7-7953510381-s2q9me', options);
        const data = await result.json();

        setResponse(data.results);
    }

    useEffect(() => {
        fetchContent();
    }, []);

    useEffect(() => {
        const conversionRate = response[selectedCurrencyTo] / response[selectedCurrencyFrom];
        setResult(amountFrom * conversionRate);
    }, [selectedCurrencyFrom, selectedCurrencyTo, amountFrom]);

    const handleAmountFromChange = (e) => {
        const newValue = parseFloat(e.target.value);
        setAmountFrom(newValue);
    }

    return (
        <div className="App">
            <div className="container">
                <div>
                    <label>From Currency</label>
                    <select value={selectedCurrencyFrom} onChange={(e) => setSelectedCurrencyFrom(e.target.value)}>
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" min={0} value={amountFrom} onChange={handleAmountFromChange} />
                </div>

                <div>
                    <label>To Currency</label>
                    <select value={selectedCurrencyTo} onChange={(e) => setSelectedCurrencyTo(e.target.value)}>
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Result: {result.toFixed(4)}</label>
                </div>
            </div>
            
        </div>
    );
}

export default Converter;
