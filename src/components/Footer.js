import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">YMovie</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">Instagram</Link>
                </li>
                <li>
                    <Link to="https://www.linkedin/in/yared-ayele" target='_blank' className="mr-4 hover:underline md:mr-6">Linkedin </Link>
                </li>
                <li>
                    <Link to="#" className="mr-4 hover:underline md:mr-6">Yoututbe</Link>
                </li>
                <li>
                    <Link to="#" className="hover:underline">Github</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
