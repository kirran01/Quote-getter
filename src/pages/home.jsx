import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Quote from '../components/quote';

const Home = () => {
    const [status, setStatus] = useState('')
    const [quote, setQuote] = useState({})
    const getQuotes = (e) => {
        e.preventDefault()
        setStatus('loading')
        console.log('getquotes')
        axios.get('https://api.quotable.io/random')
            .then(res => {
                setStatus('complete')
                console.log(res.data, 'rd')
                setQuote(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='bg-teal-50 flex flex-col justify-center items-center content-center h-screen'>
            {status === '' && <button onClick={getQuotes} className='p-5 bg-teal-700 rounded-lg text-white'>Get Quote</button>}
            {status === 'loading' && <h3>Loading...</h3>}
            {status === 'complete' && <>

                <Quote quote={quote} />
                <button onClick={getQuotes} className='p-5 m-5 bg-teal-700 rounded-lg text-white'>Another!</button>

            </>}

        </div>
    );
}

export default Home;
