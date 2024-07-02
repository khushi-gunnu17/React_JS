import { useState } from 'react';
import {InputBox} from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
// import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    // even, if you don't change the below code, it won't be any problem as then only the conversion of one currency to another will take place and not the amount.
    setConvertedAmount(amount)
    setAmount(convertedAmount)  
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div 
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage : `url('https://img.freepik.com/free-vector/digital-indian-currency-background-with-rupee-symbol_1017-41092.jpg')`,
      }}
    >

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit = {(e) => {
              e.preventDefault();
              // Whenever a form is submitted, it goes to a certain url for storage in html.
              // In HTML, when a form is submitted, it doesn't inherently go to a specific URL for storage. The destination URL where the form data is sent after submission is determined by the action attribute of the <form> element. The action attribute specifies the URL to which the form data will be sent when the user submits the form.
              convert()
            }}
          >
            <div className='w-full mb-1'>
              <InputBox 
                label="From" 
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className='relative w-full h-0.5'>
              <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                type='button'
                onClick={swap}
              >
                  swap
              </button>
            </div>

            <div className='w-full mt-1 mb-4'>
              <InputBox 
                label="To" 
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
