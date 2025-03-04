import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo'
import { Search, Moon, Sun, ChevronRight, Star, Mail, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

function Footer() {

    const socialLinks = [
        {
          icon: Linkedin,
          url: "https://www.linkedin.com/in/adisrivastavaa/",
          label: "LinkedIn"
        },
        {
          icon: Mail,
          url: "srivastavaaditya945028@gmail.com",
          label: "mail"
        },
        {
          icon: Instagram,
          url: "https://www.instagram.com/__srivastava_aditya__/",
          label: "Instagram"
        },
        {
          icon: Github,
          url: "https://github.com/Adii-Srivastava",
          label: "GitHub"
        }
      ];

    


  return (
    // <section className="relative overflow-hidden py-10 bg-gray-400 border-t-3 border-t-black ">
    //         <div className="relative z-10 mx-auto max-w-7xl px-4">
    //             <div className="-m-6 flex flex-wrap">
    //                 <div className="w-full p-6 md:w-1/2 lg:w-5/12">
    //                     <div className="flex h-full flex-col justify-between">
    //                         <div className="mb-4 inline-flex items-center">
    //                             <Logo />
    //                         </div>
    //                         <div>
    //                             <p className="text-sm text-gray-600">
    //                                 &copy; Copyright 2023. All Rights Reserved by DevUI.
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="w-full p-6 md:w-1/2 lg:w-2/12">
    //                     <div className="h-full">
    //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //                             Company
    //                         </h3>
    //                         <ul>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Features
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Pricing
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Affiliate Program
    //                                 </Link>
    //                             </li>
    //                             <li>
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Press Kit
    //                                 </Link>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //                 <div className="w-full p-6 md:w-1/2 lg:w-2/12">
    //                     <div className="h-full">
    //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //                             Support
    //                         </h3>
    //                         <ul>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Account
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Help
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Contact Us
    //                                 </Link>
    //                             </li>
    //                             <li>
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Customer Support
    //                                 </Link>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //                 <div className="w-full p-6 md:w-1/2 lg:w-3/12">
    //                     <div className="h-full">
    //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //                             Legals
    //                         </h3>
    //                         <ul>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Terms &amp; Conditions
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Privacy Policy
    //                                 </Link>
    //                             </li>
    //                             <li>
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Licensing
    //                                 </Link>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>







    <footer className={`py-12  border-t-1 border-white`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 
              text-transparent bg-clip-text mb-4 md:mb-0">
              <Link to='/'>
                Inkspire
              </Link>
            </div>
            <div className="flex space-x-6">
              {/* {[Linkedin, Twitter, Instagram, Github].map((Icon, index) => (
                <a key={index} href="#" className={` transition-colors duration-300 bg-white`}>
                  <Icon size={24} />
                </a>
              ))} */}

              {socialLinks.map((social, index)=>(
                <a key={index}
                 href={social.url}
                 target='_blank'
                 aria-label={social.label}
                 className={` transition-colors duration-300 bg-white`}
                 >
                    <social.icon size={24}/>
                 </a>
              ))}



            </div>
          </div>
          <div className={`mt-8 text-center text-white`}>
            © 2025 Inkspire. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer
