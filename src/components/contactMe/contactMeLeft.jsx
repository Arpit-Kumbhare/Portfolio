import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const contactMeLeft = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');

    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handleMessage = (e)=>{
        setMessage(e.target.value)
    }


    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

    emailjs
      .sendForm('service_7o6q8cd', 'template_038s9b7', form.current, {
        publicKey: 'nmjxZcM-hVmhGPAhF',
        })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message sent!'); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='flex flex-col gap-4 w-2/5' >

      <h2 className='text-darkBrown text-3xl font-bold'>Get in touch</h2>

      <p className='text-lg text-white font-semibold'>{success}</p>

      <form onSubmit={handleSubmit}  ref={form} className='flex flex-col gap-3 max-w-[700px]'>

        <input 
            name='name' 
            type="text" 
            placeholder='Your name' 
            required 
            className='text-white p-3 bg-white/10 rounded-lg'
            value={name}
            onChange={handleName}
            />
        <input 
            name='email' 
            type='email' 
            placeholder='Email address' 
            required className='text-white p-3 bg-white/10 rounded-lg'
            value={email}
            onChange={handleEmail}
            />
        <textarea 
            name='message' 
            placeholder='Message' 
            className='text-white p-3 bg-white/10 rounded-lg'
            value={message}
            onChange={handleMessage}
            />
        <button 
            className='text-white p-3 bg-blue rounded-lg font-semibold hover:bg-cyan' >Send</button>
      
      </form>

    </div>
  )
}

export default contactMeLeft
