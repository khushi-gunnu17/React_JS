import {useState, useEffect} from 'react';
// unspoken rule of naming hooks is adding use before it.

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((res) => setData(res[currency]))  // cannot store the data in a regular variable.
    }, [currency])

    console.table(data);
    return data
    // return [data, setData]      // cannot do this 
}

export default useCurrencyInfo;