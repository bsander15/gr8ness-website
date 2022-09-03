import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import MarkModal from './MarkModal';
import SubmitModal from './SubmitModal';
import Mark from './assets/mark.JPG';
import Reaptcha from 'reaptcha';

const Contact = ({ testFunc }) => {
    const [markOpen, setMarkOpen] = useState(false);
    const [submitOpen, setSubmitOpen] = useState(false);
    const [verified, setVerified] = useState(false)
    const form = useRef();

    const verify = () => {
        setVerified(true);
    }

    const sendEmail = e => {
        e.preventDefault();

        if (testFunc) {
            testFunc();
        }
        
        emailjs.sendForm('service_262ggbs', 'template_wkxjbtm', form.current, '6fgO-RNBdkwXB4jBn')
        .then((result) => {
            console.log(result.text);
            setSubmitOpen(true);
            setVerified(false);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div id='contact' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="my-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-4xl ">
                Let's Connect
            </p>
            <div className='md:flex md:flex-wrap md:justify-between'>
                <div className="md:w-6/12 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img 
                        className="w-full h-full object-center object-cover hover:opacity-75 hover:cursor-pointer" 
                        src={Mark}
                        onClick={() => setMarkOpen(true)}
                        alt='Mark Medhurst'
                        />
                </div>
                <div className='md:hidden' >
                <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Mark Medhurst
            </div>
            <div className="text-base text-gray-900 font-semibold tracking-wide uppercase">
                Athlete Development Coach
            </div>
            <div className='flex justify-between w-1/12 mb-2'>
                <a href='https://www.linkedin.com/in/mark-medhurst-87a281a1/'>
                    <BsLinkedin className='mr-2 hover:cursor-pointer'/> 
                </a>
                <a href='https://www.facebook.com/mark.medhurst.144'>
                    <BsFacebook className='mr-2 hover:cursor-pointer'/>
                </a>
                <a href='https://www.instagram.com/thegr8nessproject/'>
                    <BsInstagram className='mr-2 hover:cursor-pointer'/>
                </a>
                <a href='https://mobile.twitter.com/nsperformance'>
                    <BsTwitter className='hover:cursor-pointer'/>
                </a>
            </div>
            </div>
                <div className='md:w-6/12'>
                    <div className='md:mx-3'>
                        <p className="mb-1 max-w-2xl text-base text-gray-900 lg:mx-auto">
                            Reach out and we can set up a time to talk about how I can best partner with you and your aspiring althete!
                        </p>
                        <hr className='my-1'/>
                        <form ref={form} onSubmit={sendEmail} name='contact'>
                            <label for='name' className="block text-sm font-medium text-gray-700">
                            Name
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm mb-1">
                                <input 
                                    type="text" 
                                    name="name" 
                                    id='name'
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder='John Smith'
                                    required
                                />
                            </div>
                            <label for='email' className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm border-gray-500 mb-2">
                                <input 
                                    type="email" 
                                    name="email"
                                    id='email'
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder='you@example.com'
                                    required
                                />
                            </div>
                            <label for='phone' className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm border-gray-500 mb-2">
                                <input 
                                    type="phone" 
                                    name="phone"
                                    id='phone'
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder='xxx-xxx-xxxx'
                                />
                            </div>
                            <label for='notes' className="block text-sm font-medium text-gray-700">
                                Notes
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm border-gray-500 mb-2">
                                <textarea 
                                    id="notes" 
                                    name="notes"
                                    rows="3" 
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                    placeholder="Leave me a note!">
                                </textarea>
                            </div>
                            <Reaptcha sitekey="6Lc9q7sgAAAAAPke58fdNN4BpYPIlAVNBb1TvUOX"  onVerify={verify} className='my-2'/>
                            <input 
                            type="submit"
                            value="Send"
                            disabled={!verified }
                            className="group mb-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 hover:cursor-pointer disabled:bg-gray-300 disabled:cursor-auto"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Mark Medhurst
                </div>
                <div className="text-base text-gray-900 font-semibold tracking-wide uppercase">
                    Athlete Development Coach
                </div>
                <div className='flex justify-between w-1/12 mb-2'>
                    <a href='https://www.linkedin.com/in/mark-medhurst-87a281a1/'>
                        <BsLinkedin className='mr-2 hover:cursor-pointer'/> 
                    </a>
                    <a href='https://www.facebook.com/mark.medhurst.144'>
                        <BsFacebook className='mr-2 hover:cursor-pointer'/>
                    </a>
                    <a href='https://www.instagram.com/thegr8nessproject/'>
                        <BsInstagram className='mr-2 hover:cursor-pointer'/>
                    </a>
                    <a href='https://mobile.twitter.com/nsperformance'>
                        <BsTwitter className='hover:cursor-pointer'/>
                    </a>
                </div>
            </div>
            <MarkModal open={markOpen} setOpen={setMarkOpen} />
            <SubmitModal open={submitOpen} setOpen={setSubmitOpen} />
        </div>
    );
};

export default Contact;