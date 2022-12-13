import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Schedule.css';
function Schedule() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <div className="img"></div>
            <div className="center">

                {
                    location.state.message ?
                        <div className="title">{location.state.message}</div>

                        :
                        <>
                            <div className="title">{`Congratulations!!! ${location.state.result.username}`}</div>
                            <div className="sub_title">{`Your Slot is booked`}</div>
                            <div className="sub_title">{`Started from ${location.state.result.currDate}`}</div>
                            <div className="sub_title">{`Your Slot Timing ${location.state.result.slot}`}</div>
                            <div className="btns">
                                <button onClick={() => navigate("/")}>Go Back</button>
                            </div>
                        </>
                }

            </div>
        </div>
    )
}

export default Schedule
