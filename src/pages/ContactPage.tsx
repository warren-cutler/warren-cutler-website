import { FormEvent, useState } from 'react';

//components
import { Button } from '../components/generics/Button';

export const ContactPage = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('email sent');
    setUserName('');
    setUserEmail('');
    setUserMessage('');
  };

  return (
    <div className='px-5 m-5 py-1 min-w-s max-w-3xl bg-primary-700 rounded-xl text-primary-950'>
      <form
        className='flex flex-col items-center'
        id='contact-form'
        onSubmit={handleSubmit}
      >
        <label>Name: </label>
        <input
          className='bg-primary-200 rounded-lg border border-primary-950 text-primary-950 placeholder:text-secondary-800 placeholder:italic px-5 focus:bg-secondary-300 focus:outline-0'
          type='text'
          name='user_name'
          placeholder='Name'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>Email: </label>
        <input
          className='bg-primary-200 rounded-lg border border-primary-950  text-primary-950  placeholder:text-secondary-800 placeholder:italic px-5  focus:bg-secondary-300 focus:outline-0'
          type='email'
          name='user_email'
          placeholder='Email Address'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <label>Message:</label>
        <textarea
          className='bg-primary-200 rounded-lg border border-primary-950  text-primary-950  placeholder:text-secondary-800 placeholder:italic px-5 min-w-xs  focus:bg-secondary-300 focus:outline-0'
          name='message'
          placeholder='Message'
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        ></textarea>

        <Button size={'thick'} bordered={true}>
          Send
        </Button>
      </form>
    </div>
  );
};
