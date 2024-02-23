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
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
        }
    // Submit form to Netlify
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message})
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

    };

    // return (
    //     <div className='contact-us' id='Contact Us'>
    //         <header className="section-header">Contact Us</header>
    //         <p className="contact-us-description">Are you a prospective student? Have a question? Want to send feedback about the website? Let us know.</p>
    //         <form method="POST" name='contact' data-netlify="true" onSubmit={handleSubmit}>
    //             {/* hidden input for Netlify to process submissions */}
    //             <input type="hidden" name="form-name" value="contact" />
    //             <label htmlFor='name'>Name</label>
    //             <input type="text" id='name' placeholder="Brian" value={name} onChange={handleName} required />
    //             <label htmlFor='email'>Your email</label>
    //             <input type='email' id='email' placeholder="gomules@gmail.com" value={email} onChange={handleEmail} required />
    //             <label htmlFor='message'>Your message</label>
    //             <textarea id='message' rows="10" columns="30" placeholder="Leave a comment" value={message} onChange={handleMessage} required></textarea>
    //             <input type="submit" value="Submit" />
    //         </form>
    //     </div>
    // )
    return (
        <div className='contact-us' id='Contact Us'>
            <header className="section-header">Contact Us</header>
            <p className="contact-us-description">Are you a prospective student? Have a question? Want to send feedback about the website? Let us know.</p>
            <form method="POST" name='contact' data-netlify="true" onSubmit="submit">
                {/* hidden input for Netlify to process submissions */}
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' placeholder="Brian" required />
                <label htmlFor='email'>Your email</label>
                <input type='email' id='email' placeholder="gomules@gmail.com" required />
                <label htmlFor='message'>Your message</label>
                <textarea id='message' rows="10" columns="30" placeholder="Leave a comment" required></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ContactUs;