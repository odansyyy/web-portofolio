// import React from "react";
// function Template() {
//     return (
//         <>
//             <nav class="bg-white border-gray-200 dark:bg-gray-900">
//                 <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                     <a href="https://flowbite.com/" class="flex items-center">
//                         <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
//                         <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//                     </a>
//                     <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//                         <span class="sr-only">Open main menu</span>
//                         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
//                         </svg>
//                     </button>
//                     <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//                         <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                             <li>
//                                 <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
//                             </li>
//                             <li>
//                                 <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }
// export default Template;

// import { Dropdown, Navbar } from 'flowbite-react';

// export default function Template() {
//   return (
//     <Navbar fluid rounded>
//       <Navbar.Brand href="https://flowbite-react.com">
//         <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
//       </Navbar.Brand>
//       <div className="flex md:order-2">
//         <Dropdown
//           arrowIcon={false}
//           inline
//           label={
//             <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
//           }
//         >
//           <Dropdown.Header>
//             <span className="block text-sm">Bonnie Green</span>
//             <span className="block truncate text-sm font-medium">name@flowbite.com</span>
//           </Dropdown.Header>
//           <Dropdown.Item>Dashboard</Dropdown.Item>
//           <Dropdown.Item>Settings</Dropdown.Item>
//           <Dropdown.Item>Earnings</Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item>Sign out</Dropdown.Item>
//         </Dropdown>
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse>
//         <Navbar.Link href="#" active>
//           Home
//         </Navbar.Link>
//         <Navbar.Link href="#">About</Navbar.Link>
//         <Navbar.Link href="#">Services</Navbar.Link>
//         <Navbar.Link href="#">Pricing</Navbar.Link>
//         <Navbar.Link href="#">Contact</Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   )
// };

import React from "react";

function Header() {
    return (
        <header class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-200 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <button class="mr-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Home </button>
                    <button class="mr-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Proyek </button>
                    <button class="mr-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Contact </button>
                    <button class="mr-5 hover:text-gray-100">Fourth Link</button>
                </nav>
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-cyan-900 mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;


//Login
// import React from "react";


// const Template = () => {
//     return (
//         <>
//         <div className="bg-gradient-to-r from-gray-300 via-white to-gray-300 min-h-screen flex items-center justify-center">
//             <div className="container mx-auto max-w-md bg-white p-8 rounded-lg shadow-lg">
//                 <div className="mb-6 text-3xl text-center text-indigo-600">
//                     Modern Login Page
//                 </div>
//                 <div className="mb-6 text-center">
//                     <button className="mr-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
//                         Sign Up
//                     </button>
//                     <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
//                         Sign In
//                     </button>
//                 </div>
//                 <form className="space-y-4">
//                     <div className="space-y-2">
//                         <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
//                     </div>
//                     <div className="space-y-2">
//                         <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
//                     </div>
//                     <div className="space-y-2">
//                         <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
//                     </div>
//                     <div className="space-y-2">
//                         <button className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
//                             Sign Up
//                         </button>
//                     </div>
//                 </form>
//                 <div className="mt-4 text-center">
//                     <span>or use your email for registration</span>
//                 </div>
//                 <div className="mt-6 flex justify-center space-x-4">
//                     <a href="#" className="text-2xl text-indigo-500"><i className="fab fa-google-plus-g"></i></a>
//                     <a href="#" className="text-2xl text-indigo-500"><i className="fab fa-facebook-f"></i></a>
//                     <a href="#" className="text-2xl text-indigo-500"><i className="fab fa-github"></i></a>
//                     <a href="#" className="text-2xl text-indigo-500"><i className="fab fa-linkedin-in"></i></a>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }

// export default Template;