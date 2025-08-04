 import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';



const ContactForm = () => {

      const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState(''); 
    const [status, setStatus] = useState('');   

    useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  
  const sendEmail = async (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    try {
    setStatus('Sending')
            const emailJsResponse = await emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    {
      user_name: name,
      user_email: email,
      message: message,
    //   subject: subject, include later once email JS is understood
    }
  )
  console.log(`EmailJS results are ${emailJsResponse.status + '' + emailJsResponse.text}`)
  setStatus('Sent');
  setEmail('');
  setName('');
  setSubject('');
  setMessage('');
        
    } catch (error) {
        console.error(error);
        setStatus('error');
    }






  }
      return(
        <>
            <form onSubmit={sendEmail}>
                <div>
                    <label></label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" />   
                </div>
                <div>
                    <label></label>
                    <input value={email} onChange={e => setEmail(e.target.value) } type="email" />   
                </div>
                <div>
                    <label></label>
                    <input value={subject} onChange={e => setSubject(e.target.value)} type="text" />   
                </div>
                <div>
                    <label></label>
                    <input value={message} onChange={e => setMessage(e.target.value)} type="text" />   
                </div>  
                <button disabled={status=== 'sending'}></button>
                {status == 'sent' && <p style={{color: green}}>Success, you will be contacted soon</p>}
                {status == 'error' && <p style={{color: red}}>error, try again</p>}
            </form>

        </>
      )

    
}

export default ContactForm