import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'        // hook

function Github() {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData();

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github repos : {data.public_repos} 
            <img className='rounded-full' src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/khushi-gunnu17');
    return response.json()
}


// data fetching starts more earlier than useEffect in an API 