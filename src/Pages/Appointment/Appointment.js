import React from 'react';
import './Appoinment.css';
import AppoinmentFrom from './AppoinmentFrom/AppoinmentFrom';

const Appointment = () => {
    return (
        <div>
            <div className="full-width-all container full-width-all m-auto px-2 py-24">
                {/* appointment form  */}
                <div>
                    <AppoinmentFrom service=""></AppoinmentFrom>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
