import {useState, useEffect} from 'react';
// unspoken rule of naming hooks is adding use before it.

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        // api no longer working
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((res) => setData(res[currency]))
        // cannot store the data in a regular variable.
    }, [currency])

    console.table(data);
    return data
    // return [data, setData]      // cannot do this 
}

export default useCurrencyInfo;