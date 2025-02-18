import { FormEvent, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

//components
import { Button } from '../components/generics/Button';
import { Card } from '../components/generics/Card';

export const ContactPage = () => {
  emailjs.init({ publicKey: 'ijwY9zSqCS7_hhmoZ' });

  //form input values
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  //form input error messaging
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const nameErrorWarning = 'Please include your name!';
  const emailErrorWarning = 'Invalid email';
  const messageErrorWarning = "Please don't send me an empty message!";

  //check userEmail field for valid address (on change)
  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(userEmail) && userEmail) {
      setEmailError(true);
    } else setEmailError(false);
  }, [userEmail]);

  //on submit, send message if all fields are valid
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validFormSubmit()) return;

    emailjs
      .send('website_contact_form', 'contact_form_template', {
        userName,
        userEmail,
        userMessage,
      })
      .then(() => {
        alert("Thanks for your message! I'll be in touch soon.");
        setUserName('');
        setUserEmail('');
        setUserMessage('');
        setNameError(false);
        setMessageError(false);
        return;
      });
  };

  //is form filled out appropriately?
  const validFormSubmit = (): boolean => {
    if (userName === '') setNameError(true);
    if (userMessage === '') setMessageError(true);

    if (userName === '' || userMessage === '' || emailError) {
      console.log('error in input field(s)');
      return false;
    } else return true;
  };

  return (
    <Card className='mx-5 my-3 px-2 py-1 min-w-sm'>
      <form
        className='grid grid-cols-1 md:grid-cols-2 items-center space-x-3 space-y-2 '
        id='contact-form'
        onSubmit={handleSubmit}
      >
        {/* name input */}
        <div className='flex flex-col min-w-xs'>
          <div className='flex justify-between'>
            <label>Name</label>{' '}
            <p className='justify-self-end text-red-600 italic font-bold drop'>
              {nameError ? nameErrorWarning : ''}
            </p>
          </div>
          <input
            className='bg-primary-200 rounded-lg border border-primary-950 text-primary-950 placeholder:text-secondary-950 placeholder:italic px-2 focus:bg-secondary-300 focus:outline-0'
            type='text'
            name='user_name'
            placeholder='Name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        {/* email input */}
        <div className='flex flex-col min-w-xs'>
          <div className='flex justify-between'>
            <label>Email</label>{' '}
            <p className='justify-self-end text-red-600 italic font-bold drop'>
              {emailError ? emailErrorWarning : ''}
            </p>
          </div>
          <input
            className='bg-primary-200 rounded-lg border border-primary-950  text-primary-950  placeholder:text-secondary-950 placeholder:italic px-2  focus:bg-secondary-300 focus:outline-0'
            type='email'
            name='user_email'
            placeholder='Email Address'
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        {/* message input */}
        <div className='flex flex-col col-span-full'>
          <div className='flex justify-between'>
            <label>Message</label>{' '}
            <p className='justify-self-end text-red-600 italic font-bold drop'>
              {messageError ? messageErrorWarning : ''}
            </p>
          </div>
          <textarea
            className='min-h-20 bg-primary-200 rounded-lg border border-primary-950  text-primary-950  placeholder:text-secondary-950 placeholder:italic px-2 min-w-xs  focus:bg-secondary-300 focus:outline-0 field-sizing-content'
            name='message'
            placeholder='Message'
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
        </div>
        {/* send message button */}
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
