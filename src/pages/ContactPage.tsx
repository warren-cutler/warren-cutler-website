import { FormEvent, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

//components
import { Button } from "../components/generics/Button";
import { Card } from "../components/generics/Card";

export const ContactPage = () => {
  emailjs.init({ publicKey: "ijwY9zSqCS7_hhmoZ" });

  //form input values
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  //form input error messaging
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const nameErrorWarning = "Please include your name!";
  const emailErrorWarning = "Invalid email";
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
      .send("website_contact_form", "contact_form_template", {
        userName,
        userEmail,
        userMessage,
      })
      .then(() => {
        alert("Thanks for your message! I'll be in touch soon.");
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setNameError(false);
        setMessageError(false);
        return;
      });
  };

  //is form filled out appropriately?
  const validFormSubmit = (): boolean => {
    if (userName === "") setNameError(true);
    if (userMessage === "") setMessageError(true);

    if (userName === "" || userMessage === "" || emailError) {
      console.log("error in input field(s)");
      return false;
    } else return true;
  };

  return (
    <Card className="mx-5 my-3 min-w-sm px-2 py-1">
      <form
        className="grid grid-cols-1 items-center space-y-2 space-x-3 md:grid-cols-2"
        id="contact-form"
        onSubmit={handleSubmit}
      >
        {/* name input */}
        <div className="flex min-w-xs flex-col">
          <div className="flex justify-between">
            <label>Name</label>{" "}
            <p className="drop justify-self-end font-bold text-red-600 italic">
              {nameError ? nameErrorWarning : ""}
            </p>
          </div>
          <input
            className="bg-primary-200 border-primary-950 text-primary-950 placeholder:text-secondary-950 focus:bg-secondary-300 rounded-lg border px-2 placeholder:italic focus:outline-0"
            type="text"
            name="user_name"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        {/* email input */}
        <div className="flex min-w-xs flex-col">
          <div className="flex justify-between">
            <label>Email</label>{" "}
            <p className="drop justify-self-end font-bold text-red-600 italic">
              {emailError ? emailErrorWarning : ""}
            </p>
          </div>
          <input
            className="bg-primary-200 border-primary-950 text-primary-950 placeholder:text-secondary-950 focus:bg-secondary-300 rounded-lg border px-2 placeholder:italic focus:outline-0"
            type="email"
            name="user_email"
            placeholder="Email Address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        {/* message input */}
        <div className="col-span-full flex flex-col">
          <div className="flex justify-between">
            <label>Message</label>{" "}
            <p className="drop justify-self-end font-bold text-red-600 italic">
              {messageError ? messageErrorWarning : ""}
            </p>
          </div>
          <textarea
            className="bg-primary-200 border-primary-950 text-primary-950 placeholder:text-secondary-950 focus:bg-secondary-300 field-sizing-content min-h-20 min-w-xs rounded-lg border px-2 placeholder:italic focus:outline-0"
            name="message"
            placeholder="Message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
        </div>
        {/* send message button */}
        <Button
          className="font-title mx-3 my-1 justify-self-end text-2xl md:col-start-2"
          bordered={true}
        >
          <span className="align-[-2px]">Send</span>
        </Button>
      </form>
    </Card>
  );
};
