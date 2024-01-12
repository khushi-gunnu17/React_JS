import React, {useId} from 'react';

// useId
// useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
// Do not call useId to generate keys in a list.

function InputBox({
    label, 
    amount, 
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd", 
    amountDisable = false,
    currencyDisable = false, 
    className = "",    // taking tailwind css from the user
}) {
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
                    {label}
                </label>

                <input 
                    id={amountInputId}
                    className='outline-none w-full bg-transparent py-1.5'
                    type='number'
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(event) => onAmountChange && onAmountChange(Number(event.target.value))}        
                    // 1st one to check the existence of the function 
                    // JavaScript takes the values of the events in the string, so , it needs to be changed.
                />
            </div>

            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select 
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectCurrency}
                    onChange = {(event) => onCurrencyChange && onCurrencyChange(event.target.value)}
                    disabled={currencyDisable}
                >       
                    {/* If you are using loops in jsx, then ou must give a key to the attributes. */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;