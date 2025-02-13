import { FormEvent, useState } from 'react';

//components
import { Button } from '../components/generics/Button';
import { Card } from '../components/generics/Card';

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
    <Card className='mx-5 my-3 px-2 py-1 min-w-sm'>
      <form
        className='grid grid-cols-1 md:grid-cols-2 items-center space-x-3 space-y-2 '
        id='contact-form'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col min-w-xs'>
          <label>Name</label>
          <input
            className='bg-primary-200 rounded-lg border border-primary-950 text-primary-950 placeholder:text-secondary-950 placeholder:italic px-2 focus:bg-secondary-300 focus:outline-0'
            type='text'
            name='user_name'
            placeholder='Name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className='flex flex-col min-w-xs'>
          <label>Email</label>
          <input
            className='bg-primary-200 rounded-lg border border-primary-950  text-primary-950  placeholder:text-secondary-950 placeholder:italic px-2  focus:bg-secondary-300 focus:outline-0'
            type='email'
            name='user_email'
            placeholder='Email Address'
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col col-span-full'>
          <label>Message</label>
          <textarea
            className='min-h-20 bg-primary-200 rounded-lg border border-primary-950  text-primary-950  placeholder:text-secondary-950 placeholder:italic px-2 min-w-xs  focus:bg-secondary-300 focus:outline-0 field-sizing-content'
            name='message'
            placeholder='Message'
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
        </div>
        <Button
          className='mx-3 md:col-start-2 justify-self-end'
          size={'thick'}
          bordered={true}
        >
          Send
        </Button>
      </form>
    </Card>
  );
};
