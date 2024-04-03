import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_EMAIL_USER_ID,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            )
    }

    return (
        <section id='contact' className='max-w-3xl mx-auto px-8 py-6'>
            <h2 className='mb-6 font-medium text-xl'>contact</h2>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col items-start gap-3'>
                <input className='border border-cyan-700 p-2 w-full focus:outline-none focus:bg-slate-100'
                    type="email" 
                    name="user_email" 
                    placeholder="your email address" 
                    required 
                />
                <textarea className='border border-cyan-700 p-2 w-full min-h-40 focus:outline-none focus:bg-slate-100'
                    name="message" 
                    placeholder="message..." 
                    required 
                />
                <button className='bg-slate-100 py-2 px-5' type="submit">Send</button>
            </form>
        </section>
    );
    
}
