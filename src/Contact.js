import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import SubmitModal from './SubmitModal';
import Mark from './assets/mark.JPG';

const Contact = () => {
    const [open, setOpen] = useState(false);
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_9tkk13k', 'template_ltd23uc', form.current, 'lXcXRP9Iow46XsrCa')
        .then((result) => {
            console.log(result.text);
            setOpen(true);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div id='contact' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-4xl ">
                Contact Me
            </p>
            <div className='md:flex md:flex-wrap md:justify-between'>
                <div className="md:w-6/12 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img 
                        className="w-full h-full object-center object-cover group-hover:opacity-75" 
                        src={Mark}
                        />
                </div>
                <div className='md:hidden' >
                <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Mark Medurst
            </div>
            <div className="text-base text-gray-900 font-semibold tracking-wide uppercase">
                Personal Trainer
            </div>
            <div className='flex justify-between w-1/12 mb-2'>
                <a href='https://www.linkedin.com/in/mark-medhurst-87a281a1/'>
                    <BsLinkedin className='mr-2'/> 
                </a>
                <a>
                    <BsFacebook className='mr-2'/>
                </a>
                <a href='https://www.instagram.com/thegr8nessproject/'>
                    <BsInstagram className='mr-2'/>
                </a>
                <a href='https://mobile.twitter.com/nsperformance'>
                    <BsTwitter />
                </a>
            </div>
            </div>
                <div className='md:w-6/12'>
                    <form ref={form} onSubmit={sendEmail} className='md:mx-3'>
                        <label className="block text-sm font-medium text-gray-700">
                        Name
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm mb-1">
                            <input 
                                type="text" 
                                name="name" 
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder='John Smith'
                                required
                            />
                        </div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm border-red-500 mb-2">
                            <input 
                                type="email" 
                                name="email"
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder='you@example.com'
                                required
                            />
                        </div>
                        <input 
                        type="submit"
                        value="Send"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        />
                    </form>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Mark Medurst
                </div>
                <div className="text-base text-gray-900 font-semibold tracking-wide uppercase">
                    Personal Trainer
                </div>
                <div className='flex justify-between w-1/12 mb-2'>
                    <a href='https://www.linkedin.com/in/mark-medhurst-87a281a1/'>
                        <BsLinkedin className='mr-2'/> 
                    </a>
                    <a>
                        <BsFacebook className='mr-2'/>
                    </a>
                    <a href='https://www.instagram.com/thegr8nessproject/'>
                        <BsInstagram className='mr-2'/>
                    </a>
                    <a href='https://mobile.twitter.com/nsperformance'>
                        <BsTwitter />
                    </a>
                </div>
            </div>
            <SubmitModal open={open} setOpen={setOpen} />
        </div>
    );
};

export default Contact;