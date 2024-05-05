import { useEffect, useState } from 'react';
import useCurrencyInfo from '../hooks/useCurrencyInfo';
import './currencyConverter.css'
function CurrencyConvertor() {
    const [display, setDisplay] = useState(false);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [data, setData] = useCurrencyInfo(from);
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    let currencyOptions = Object.keys(data);
    useEffect(() => {
        setData(from);
    }, [from, setData])

    function getValue() {
        let convAmount = (amount * data[to]).toFixed(2);
        setConvertedAmount(convAmount);
        setDisplay(true);
    }

    function setView() {
        setDisplay(false)
    }
    return (
        <>
            <div className='main-section'>
                <h1 className='header'>Currency Converter</h1>
                <hr className='hrline'></hr>
                <div className='input-section'>
                    <div>
                        <p>Amount </p>
                        <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value); setView() }}></input>
                    </div>
                    <div>
                        <p>From </p>
                        <select onChange={(e) => { setFrom(e.target.value); setView() }} value={from}>
                            {currencyOptions.map(currency => {
                                return <option key={currency} value={currency}>{currency}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <p>To </p>
                        <select onChange={(e) => { setTo(e.target.value); setView() }} value={to}>
                            {currencyOptions.map(currency => {
                                return <option key={currency} value={currency}>{currency}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className='result-section'>
                    <div>
                        {display && <h1><span className='header'>{amount}</span> {from} = <span className='header'>{convertedAmount}</span> {to}</h1>}
                    </div>
                    <button className="button-3" onClick={getValue}>Submit</button>
                </div>
            </div>
        </>

    )
}

export default CurrencyConvertor;