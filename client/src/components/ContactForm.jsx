import { useState } from "react"

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.Title ) return ;
    }

    <>
    <form action="" method="POST">
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
    </form>
    </>

}

export default ContactForm