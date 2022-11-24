


import React from 'react'

const Quote = ({quote}) => {

    const {text, author, series} = quote;

  return (
    <>
        <div className='quoteContainer'>
            <h3 className='quoteText'>
             <span className='quoteComillas'>«</span>{text}<span className='quoteComillas'>»</span>
            </h3>
            <p className='quoteAuthor'>- {author}</p>
            <p className='quoteSerie'>{series}</p>
        </div>
    </>
  )
}

export default Quote