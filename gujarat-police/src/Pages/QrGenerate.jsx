import React from 'react'
import { useState } from 'react'
import './dasktop.css'

// var imagePath="../../QRCodes/logo192.png";



export default function QrGenerate() {
    const [policeStation, setpoliceStation] = useState("");
    const [district, setDistrict] = useState("");
    const [states, setStates] = useState("");
    const [divison, setDivison] = useState("");
    const [batch, setBatch] = useState("");
    const [imagePath, setImagePath] = useState('');

    function decideQRCode(batchNo){
        if(batchNo==="20CS065"){
            setImagePath("../../QRCodes/20CS065.png")
            console.log(imagePath);
        }
        else if(batchNo==="20CS016"){
            setImagePath("../../QRCodes/20CS016.png")
            console.log(imagePath);
        }
        else if(batchNo==="20CS057"){
            setImagePath("../../QRCodes/20CS057.png")
            console.log(imagePath);
        }
        else if(batchNo==="20CS074"){
            setImagePath("../../QRCodes/20CS074.png")
            console.log(imagePath);
        }
    }

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

              
                <div className='btnDiv' onClick={()=>decideQRCode(batch)}>
                    <button type='button' className='btnClasse'>Generate QR Code</button>
                </div>
                <div className='btnDiv'>
                    <button type='reset' className='btnClass'>Reset</button>
                </div>
            </div>
            <div className='cqCode'>
                <img src={imagePath} alt="Image no available" style={{width:"100%"}}></img>
            </div>
            
        </div>

    )
}


function printBatch(a){
    console.log("-------this is value of batch----"+a);
}



// render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return (
//       <div>
//         {isLoggedIn ? (
//           <LogoutButton onClick={this.handleLogoutClick} />
//         ) : (
//           <LoginButton onClick={this.handleLoginClick} />
//         )}
//       </div>
//     );
//   }
