import React from 'react'
import { useState } from 'react'
import './dasktop.css'

export default function Dasktop() {
    const [byName, setByName] = useState("");
    const [district, setDistrict] = useState("");
    const [states, setStates] = useState("");
    const [date, setDate] = useState("");
    const [batch, setBatch] = useState("");
    const [month, setMonth] = useState("");

    return (
        <div className='container'>
            <div className='innerContainer'>
                <div className='inputDiv'>
                    <label htmlFor='byName' className="lableClass">Search By Name</label>
                    <br/>
                    <input className="inputField" type='text' value={byName} onChange={(e)=>{setByName(e.target.value)}}/>
                    <br/>
                    <br/>
                </div>
                
                <div className='inputDiv'>
                    <label htmlFor='destrict' className="lableClass">Search By Destrict </label>
                    <br/>
                    <input className="inputField" type='text' value={district} onChange={(e)=>{setDistrict(e.target.value)}}/>
                    <br/>
                    <br/>
                </div>

                <div className='inputDiv'>
                    <label htmlFor='states' className="lableClass">Search By State </label>
                    <br/>
                    <input className="inputField" type='text' value={states} onChange={(e)=>{setStates(e.target.value)}}/>
                    <br/>
                    <br/>
                </div>

                <div className='inputDiv'>
                    <label htmlFor='date' className="lableClass">Search By Date </label>
                    <br/>
                    <input className="inputField" type='date' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
                    <br/>
                    <br/>
                </div>

                <div className='inputDiv'>
                    <label htmlFor='batch' className="lableClass">Batch Number </label>
                    <br/>
                    <input className="inputField" type='text' value={batch} onChange={(e)=>{setBatch(e.target.value)}}/>
                    <br/>
                    <br/>
                </div>

                <div className='inputDiv'>
                    <label htmlFor='month' className="lableClass">Search By Month </label>
                    <br/>
                    <input className="inputField" type='number' min='1' max='12' value={month} onChange={(e)=>{setMonth(e.target.value)}}/>
                    <br/>
                    <br/>
                </div>

                <div className='btnDiv'>
                    <button type='button' className='btnClass'>Search</button>
                </div>
                <div className='btnDiv'>
                    <button type='reset' className='btnClass'>Reset</button>
                </div>
            </div>

            <div className='resultDiv'>
                result
            </div>
            
            <div className='downloadBtnDiv'>
                    <button type='button' className='downloadBtnClass'>Download</button>
            </div>
        </div>

    )
}
