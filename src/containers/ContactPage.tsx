import { FormEvent, useState } from 'react';

export const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('email sent');
    setName('')
    setEmail('')
    setMessage('')
  };

  return (
    <div className='contactForm'>
      <form id='contact-form' onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type='text'
          name='user_name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type='email'
          name='user_email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
