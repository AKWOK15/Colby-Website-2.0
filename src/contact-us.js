import './contact-us.css';
import { useState, useEffect, useRef, useReducer, useCallback } from 'react';
function ContactUs() {
    const [name, setName] = useState('');
    const handleName = (event) => {
        setName(event.target.value);

    }
    const [email, setEmail] = useState('');
    const handleEmail = (event) => {
        setEmail(event.target.value);

    }
    const [message, setMessage] = useState('');
    const handleMessage = (event) => {
        setMessage(event.target.value);

    }
    return (
        <div class= 'contact-us'  id='Contact Us'>
            <header class="section-header">Contact Us</header>
            <p class="contact-us-description">“Are you a prospective student? Have a question? Want to send feedback about the website? Let us know.</p>
            <form method="post" action="https://formsubmit.co/dc83790d397a3156283f67d4fe4b25e2">
                <label for='name'>Name</label>
                <input type="text" id='name' placeholder="Brian" value={name} onChange={handleName} required />
                <label for='email'>Your email</label>
                <input type='email' id='email' placeholder="gomules@gmail.com" value={email} onChange={handleEmail} required />
                <label for='message'>Your message</label>
                <textarea id='message' rows="10" columns="30" placeholder="Leave a comment" value={message} onChange={handleMessage} required></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ContactUs;