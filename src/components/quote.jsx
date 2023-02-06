import React from 'react';

const Quote = ({ quote }) => {
    return (
        <div className='p-5 m-5'>
            <p>{quote.content}</p>
            <h5>-{quote.author}</h5>
        </div>
    );
}

export default Quote;
