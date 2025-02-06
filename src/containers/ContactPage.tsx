import { FormEvent, useState } from 'react';

export const ContactPage = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('email sent');
    setUserName('')
    setUserEmail('')
    setUserMessage('')
  };

  return (
    <div className='contactForm'>
      <form id='contact-form' onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type='text'
          name='user_name'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type='email'
          name='user_email'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <label>Message:</label>
        <textarea
          name='message'
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
