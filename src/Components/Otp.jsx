import React, { useState } from "react";
import axios from 'axios'
import './Otp.css'


export default function OTP() {

    const [mobile, setMobile] = useState('')
    const [err, setErr] = useState('')

    function handleChange(event) {
        setMobile(event.target.value)
    }

    async function otpClick(e) {
        e.preventDefault();

        if (mobile.length !== 10) {
            setErr("Please enter a valid 10-digit mobile number");
            return;
        }

        const url = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';
        const data = { mobile: mobile };
        try {
            const response = await axios.post(url, data, { header: { 'Content-type': 'application/json' } });
            console.log(response);
        } catch (error) {
            console.log("error", error)
        }
        setMobile('')
    }

    return (
        <div>
             <h1>Enter Mobile Number to Genarate Otp</h1>
        <div className="otp">
           
            <input className="int" type='number' onChange={handleChange} /> <br />
            <button onClick={otpClick} className="btn">Get OTP</button>
            {err && <p>{err}</p>}
        </div>
        </div>
    )
}