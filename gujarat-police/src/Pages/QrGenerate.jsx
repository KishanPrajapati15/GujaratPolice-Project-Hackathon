import React from 'react'
import { useState } from 'react'
import './dasktop.css'

export default function QrGenerate() {
    const [policeStation, setpoliceStation] = useState("");
    const [district, setDistrict] = useState("");
    const [states, setStates] = useState("");
    const [divison, setDivison] = useState("");
    const [batch, setBatch] = useState("");

    return (
        <div className='container'>
            <div className='innerContainer'>
                <div className='inputDiv'>
                    <label htmlFor='policeStation' className="lableClass">Police Station</label>
                    <br/>
                    <input className="inputField" type='text' value={policeStation} onChange={(e)=>{setpoliceStation(e.target.value)}}/>
                    <br/>
                    <br/>
                </div>
                
                <div className='inputDiv'>
                    <label htmlFor='destrict' className="lableClass">District</label>
                    <br/>
                    <input className="inputField" type='text' value={district} onChange={(e)=>{setDistrict(e.target.value)}}/>
                    <br/>
                    <br/>
                </div>

                <div className='inputDiv'>
                    <label htmlFor='states' className="lableClass">State </label>
                    <br/>
                    <input className="inputField" type='text' value={states} onChange={(e)=>{setStates(e.target.value)}}/>
                    <br/>
                    <br/>
                </div>

                <div className='inputDiv'>
                    <label htmlFor='divison' className="lableClass">Divison</label>
                    <br/>
                    <input className="inputField" type='text' value={divison} onChange={(e)=>{setDivison(e.target.value)}}/>
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

              
                <div className='btnDiv'>
                    <button type='button' className='btnClasse'>Generate QR Code</button>
                </div>
                <div className='btnDiv'>
                    <button type='reset' className='btnClass'>Reset</button>
                </div>
            </div>

            <div className='cqCode'>
                QR Code
            </div>
            
        </div>

    )
}
