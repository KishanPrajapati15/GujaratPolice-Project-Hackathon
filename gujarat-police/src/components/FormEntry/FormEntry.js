import React from 'react'
import './FormEntry.css'

const FormEntry = () => {
    return (
        <div>
            <img id="main" src="../../Gujarat_Police_Logo.png"/>
            <div className="title">
                <label>CITIZEN PORTAL, GUJARAT POLICE<br/>
                    (HOME DEPARTMENT, GOVERNMENT OF GUJARAT)
                </label>
            </div>
            <div className="combinecontainer">
                <div className="container-1">
                    <label htmlFor='district' className='station-label'>District, Division, Sub-Division</label>
                </div>
                <div className='container-2'>
                    <form className='form'>
                        <div className='from-inputs'>
                            <label htmlFor='mobileno' className='from-label'>Mobile Number : </label>
                            <br />
                            <input
                                type='text'
                                name='mobileno'
                                className='form-input'
                                placeholder='Enter your mobile number'
                            />
                        </div>
                        <button className='form-input-btn' type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormEntry;