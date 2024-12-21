import React, { useState } from 'react'

function Test() {
        const [test, setTest] = useState("Gunit")
        const handleChnage = (e) => {
            
            setTest(e.target.value)
            console.log(e)
        }
  return (
    <div className='h-screen flex justify-center items-center'>
        <input type="text" value={test} onChange={handleChnage} className='bg-white text-black' />
    </div>
  )
}

export default Test