import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Gujimg from './Gujimg';

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("index");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/dashboard")
                }
            }
        }

    }

    return (
        <>
            <div className="container mt-3" id="main2">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" ,paddingBottom:"30px"}}>
                    {/* <img id="main" src="../../Gujarat_Police_Logo.png" /> */}
                    <Gujimg/>
                    <div className="title">
                <label>CITIZEN PORTAL, GUJARAT POLICE<br/>
                    (HOME DEPARTMENT, GOVERNMENT OF GUJARAT)
                </label>
            </div>
                    {/* <h4 style={{color: "red", fontWeight:"bold", textAlign:"center"}}>20CS065 Kishan Prajapati</h4> */}
                    <div style={{background:"#C1CCCC", padding:"20px",paddingBottom:"25px",borderRadius:"5px", marginLeft:"10%", marginRight:"10%"}}>
                        <h3 className='text-center col-lg-6-center'>Admin login</h3>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6-center" controlId="formBasicEmail" style={{width:"50%", marginLeft:"25%"}}>

                                <Form.Control style={{padding:"10px", marginBottom:"5px"}} type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6-center" controlId="formBasicPassword" style={{width:"50%", marginLeft:"25%"}}>

                                <Form.Control style={{padding:"10px", marginBottom:"5px"}} type="password" name='password' onChange={getdata} placeholder="Password" />
                                
                            </Form.Group>
                            <button onClick={addData} style={{ background: "#97C8C8", marginTop:"5px", padding:"5px"}} type="submit" >
                                Submit
                        </button>
                            {/* <Button variant="primary" className='col-lg-12-center' onClick={addData} style={{ background: "#97C8C8 " }} type="submit" >
                                Submit
                            </Button> */}
                        </Form>
                        </div>
                        <div>
                        
                        </div>
                    </div>
                    
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login
