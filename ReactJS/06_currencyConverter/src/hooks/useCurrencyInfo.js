import {useState, useEffect} from 'react';
// unspoken rule of naming hooks is adding use before it.

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])

    console.table(data);
    return data
}

export default useCurrencyInfo;