import React, { useState } from 'react';
import './Yoga.css';
import { useNavigate } from 'react-router-dom'
// import { GrYoga } from "react-icons/Gr";
const Yoga = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('Male');
    const [age, setAge] = useState('');
    const [slot, setSlot] = useState('');
    const [CardNum, setCardNum] = useState('');
    const [cvc, setCvc] = useState('');
    const [expDate, setExpDate] = useState('');

    const navigate = useNavigate();

    let message = '';
    const CompletePayment = (result) => {

        navigate("/schedule", { state: { result: result, message: '' } });
    }

    const collectData = async () => {
        const currDate = new Date();
        // console.log(username,' ',email,' ',mobile,' ',gender,' ',age,' ',slot,' ',CardNum,' ',cvc,' ',expDate," ",currDate);

        if (age > 18 && age < 65) {

            let result = await fetch('http://localhost:7789/register', {
                method: 'post',
                body: JSON.stringify({ username, email, mobile, gender, age, slot, CardNum, cvc, expDate, currDate }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            result = await result.json();
            CompletePayment(result);
        } else {
            message = "Sorry!!! Only 18 Yr to 65 Yr old People are Allowed";
            navigate("/schedule", { state: { message: message, result: '' } });
        }
    }

    return (
        <div className="YogaSection">
            <div className="info">
                <h2>ℝ𝕚𝕥𝕚𝕜𝕒 𝒴❀𝑔𝒶 ℂ𝕝𝕒𝕤𝕤𝕖𝕤</h2>
                <div className="icon">
                </div>
                <p>𝙱𝚘𝚘𝚔 𝚈𝚘𝚞𝚛 𝚈𝚘𝚐𝚊 𝙲𝚕𝚊𝚜𝚜 𝚗𝚘𝚠</p>
            </div>
            
            <ul className="noBullet">
                <li>
                    <p>Account Detail</p>
                </li>
                <li>
                    <label htmlFor="username"></label>
                    <input type="text" className="inputFields" id="username" name="username" required placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="email"></label>
                    <input type="email" className="inputFields" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </li>
                <li>
                    <label htmlFor="Phone no."></label>
                    <input type="tel" id="phone" className="inputFields" name="phone" placeholder="Mobile No" value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
                </li>
                <li>
                    <div>
                        <input type="radio" id="contactChoice1" name="gender" value='Male' onClick={() => setGender('Male')} />
                        <label className="radiostyle" htmlFor="contactChoice1" >Male</label>

                        <input type="radio" id="contactChoice2" name="gender" value='Female' onClick={() => setGender('Female')} />
                        <label className="radiostyle" htmlFor="contactChoice2" >Female</label>
                    </div>
                </li>
                <li>
                    <label htmlFor="age"></label>
                    <input type="text" id="age" name="age" className="inputFields" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value.toString())} />
                </li>
                <li>
                    <div className="box">
                        <select value={slot} onChange={(e) => setSlot(e.target.value)}>
                            <option value="0">Select Slot</option>
                            <option value="6:00AM to 7:00AM">6:00AM to 7:00AM</option>
                            <option value="7:00AM to 8:00AM">7:00AM to 8:00AM</option>
                            <option value="8:00AM to 9:00AM">8:00AM to 9:00AM</option>
                            <option value="5:00PM to 6:00PM">5:00PM to 6:00PM</option>
                        </select>
                    </div>
                </li>
                <li>
                    <p>Payment Detail</p>
                </li>
                <li>
                    <label htmlFor="CardNum"></label>
                    <input type="text" className="inputFields" id="CardNum" name="CardNum" placeholder="Card Number" value={CardNum} onChange={(e) => setCardNum(e.target.value)} required />
                </li>
                <li>
                    <label htmlFor="cvc"></label>
                    <input type="text" className="inputFields" id="cvc" name="cvc" placeholder="Card CVC" value={cvc} onChange={(e) => setCvc(e.target.value)} required />
                </li>
                <li>
                    <label htmlFor="EXPDATE"></label>
                    <div className="displayDate">
                        <h4>Expiry Date:</h4>
                        <input type="date" id="EXPDATE" name="EXPDATE" className="inputFields" placeholder="Expiry Date" value={expDate} onChange={(e) => setExpDate(e.target.value.toString())} />
                    </div>
                </li>

                <li id="center-btn">
                    <input type="submit" id="pay-btn" name="pay" alt="pay" value="Pay 500 Rs" onClick={collectData} />
                </li>
            </ul>
        </div>
    )
}

export default Yoga
