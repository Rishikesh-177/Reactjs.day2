import React from "react";


function Invitation(props) {
    return (
        <div style= {{ backgroundColor: props.backgroundColor, color: props.textcolor }}>
            subject: {props.subject}
            <p> to: {props.email} </p>
            <p> Hi, {props.to}</p>
            <p> I am having a {props.event} next Friday at my Home. </p>
            <p> Would you like to come ? It will be fun. Lots of people from my </p>
            <p>  schools are coming . you know some of them- {props.attendee}. </p>
            <p> My house is behind our school, near {props.location}. </p>
            <p> i hope you will come amd see you soon.</p>
<br />
<p>from,</p>
<p>{props.to}</p> 
        </div>
    );
}

export default Invitation;