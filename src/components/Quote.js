


import React from 'react'

const Quote = ({quote}) => {

    const {text, author, series} = quote;

  return (
    <>
        <div style={{
          backgroundColor: '#fff',
          maxWidth: '400px',
          // width: '320px',
          heigth: '300px',
          padding: '.75rem',
          borderRadius: '16px',
          boxShadow: '0px 10px 15px 5px rgb(0 0 0 / 10%)',
          margin: 'auto',

        }}>
          <h3 style={{
            textAlign: 'center',
            fontStyle: 'italic',
          }}> <span style={{
            fontSize: '30px',
            fontStyle: 'italic',

          }}>"</span> {text} <span style={{
            fontSize: '30px',
            fontStyle: 'italic',

          }}>"</span></h3>
          <p style={{
            textAlign: 'end',
            paddingRight: '2rem'
          }} >- {author} <br />
          <span style={{
            fonsSize: '14px'
          }}> {series} </span> </p>
        </div>
    </>
  )
}

export default Quote