import React from 'react'
import './FormEntry.css'

const FormEntry = () => {
    return (
        <div>
            <div><img src="https://en.wikipedia.org/wiki/File:Gujarat_Police_Logo.png"/></div>
            <div className="container-1">
                <label htmlFor='district' className='station-label'>District, Division, Sub-Division</label>
            </div>
            <div className='container-2'>
                <form className='form'>
                    <div className='from-inputs'>
                    <label htmlFor='mobileno' className='from-label'>Mobile Number : </label>
                    <br/>
                    <input 
                        type='text'
                        name='mobileno'
                        className='from-input'
                        placeholder='Enter your mobile number'
                    />
                    </div>
                    <button className='form-input-btn' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default FormEntry;