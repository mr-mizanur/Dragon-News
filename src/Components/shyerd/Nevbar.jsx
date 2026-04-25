 import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userImage from '@/assets/user.png';
import NavLink from './NavLink'; // নিশ্চিত করুন NavLink এই একই ফোল্ডারে আছে

const Navbar = () => {
    const navLinks = (
        <>
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/about">About</NavLink></li>
            <li><NavLink href="/career">Career</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 py-4 mx-auto container">
            <div className="navbar-start">
                {/* প্রয়োজনে এখানে লোগো দিতে পারেন */}
            </div>

            <div className="navbar-center">
                <ul className="flex gap-5 text-[#706F6F] text-lg">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-2">
                <div className="w-10 h-10">
                    <Image 
                        src={userImage} 
                        alt="user profile" 
                        className="rounded-full"
                        width={40} // Next.js Image এ width/height দেয়া ভালো
                        height={40}
                    />
                </div>
                <button className="bg-[#403F3F] text-white px-8 py-2 font-semibold rounded-none hover:bg-black transition-all">
                    <Link href={'/login'}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;