"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (link) => (activeLink === link ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Mobile menu icon */}
              <svg className={`${isOpen ? 'hidden' : 'block'} size-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* Close icon */}
              <svg className={`${isOpen ? 'block' : 'hidden'} size-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex w-full backdrop:backdrop-blur-md custNavBg px-3 py-3 mt-3 rounded-md items-center justify-end sm:justify-between sm:items-stretch">
            {/* Left-aligned text and image */}
            <div className="hidden sm:flex items-end space-x-2">
              <span className="text-white text-4xl font-bold heading3">Shameel</span>
              <Image src="/icons/dott.png" width={10} height={10} alt="dott" className="mb-2" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:ml-auto space-x-4">
              <Link href="/" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/')}`} onClick={() => setActiveLink('/')} aria-current={activeLink === '/' ? 'page' : undefined}>Home</Link>
              <Link href="/events" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/events')}`} onClick={() => setActiveLink('/events')} aria-current={activeLink === '/events' ? 'page' : undefined}>Events</Link>
              <Link href="/portfolio" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/portfolio')}`} onClick={() => setActiveLink('/portfolio')} aria-current={activeLink === '/portfolio' ? 'page' : undefined}>Portfolio</Link>
              <Link href="/contact" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/contact')}`} onClick={() => setActiveLink('/contact')} aria-current={activeLink === '/contact' ? 'page' : undefined}>Contact</Link>
              <Link href="/courses" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/courses')}`} onClick={() => setActiveLink('/courses')} aria-current={activeLink === '/courses' ? 'page' : undefined}>Courses</Link>
              <Link href="/blogs" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/blogs')}`} onClick={() => setActiveLink('/blogs')} aria-current={activeLink === '/blogs' ? 'page' : undefined}>Blogs</Link>

              {/* Dropdown Menu */}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full text-white justify-center gap-x-1.5 bottom-0 px-3 py-2 text-sm font-semibold shadow-sm"
                    id="menu-button"
                    aria-expanded={isOpen ? 'true' : 'false'}
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    More
                    <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {isOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">
                      <Link href="/workflow" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Work Flow</Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Support</Link>
                      <Link href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">License</Link>
                      <form method="POST" action="#" role="none">
                        <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
              
            </div>

            <div className="sm:hidden flex items-end space-x-2 relative top-0">
              <span className="text-white text-4xl font-bold heading3">Shameel</span>
              <Image src="/icons/dott.png" width={10} height={10} alt="dott" className="mb-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden  ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        
        <div className="space-y-1 flex flex-col px-2 pt-2 pb-3">
          <Link href="/" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/')}`} onClick={() => setActiveLink('/')} aria-current={activeLink === '/' ? 'page' : undefined}>Home</Link>
          <Link href="/events" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/events')}`} onClick={() => setActiveLink('/events')} aria-current={activeLink === '/events' ? 'page' : undefined}>Events</Link>
          <Link href="/portfolio" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/portfolio')}`} onClick={() => setActiveLink('/portfolio')} aria-current={activeLink === '/portfolio' ? 'page' : undefined}>Portfolio</Link>
          <Link href="/contact" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/contact')}`} onClick={() => setActiveLink('/contact')} aria-current={activeLink === '/contact' ? 'page' : undefined}>Contact</Link>
          <Link href="/courses" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/courses')}`} onClick={() => setActiveLink('/courses')} aria-current={activeLink === '/courses' ? 'page' : undefined}>Courses</Link>
          <Link href="/blogs" className={`rounded-md px-3 py-2 text-sm font-medium ${isActive('/blogs')}`} onClick={() => setActiveLink('/blogs')} aria-current={activeLink === '/blogs' ? 'page' : undefined}>Blogs</Link>

          {/* Dropdown in Mobile */}
          {/* <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full text-white justify-center gap-x-1.5 bottom-0 px-3 py-2 text-sm font-semibold shadow-sm"
                id="menu-button"
                aria-expanded={isOpen ? 'true' : 'false'}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                More
              </button>
            </div>
            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</Link>
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Support</Link>
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">License</Link>
                  <form method="POST" action="#" role="none">
                    <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                  </form>
                </div>
              </div>
            )}
          </div> */}

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
