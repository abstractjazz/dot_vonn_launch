import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ()=>{
return(

  <>
   <Disclosure as="nav" className="bg-white shadow drop-shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                 
                  <a href={'/'}>
                  <Image
                    className="block h-8 w-auto lg:block"
                    src="/logo_no_square.svg"
                    alt="Dot Vonn"
                    width="55%"
                    height="55%"
                  />
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href={"/#about"}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-black hover:text-gray-500 "
                  >
                    About us
                  </a>
                  <Link href="/#how-it-works">
                  <a
                   
                    className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-gray-900 hover:text-gray-500"
                  >
                    Our Process
                  </a>
                  </Link>
                  <Link href='/pricing'>
                  <a
                    
                    className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-gray-300 hover:text-gray-500"
                  >
                    Pricing
                  </a>
                 </Link>
                 <Link href="/#contact-1">
                  <a
                    
                    className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-gray-300 hover:text-gray-500"
                  > Contact
                  </a>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <a href='https://calendly.com/dot-vonn/dot-vonn-intro-consultation'
                  target="_blank"
                  className="p-1 text-black border-2 border-black hover:bg-[#ffc800ff] focus:outline-none"
                 >
                 Get Access
                  {/* <span className="sr-only">View notifications</span> */}
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                
                </a>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  {/* <div>
                    <button className="flex rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Sign In
                   </button>
                  </div> */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          
          <Disclosure.Panel className="sm:hidden ">
            
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
             
              <Disclosure.Button
                as='a'
                href={'/#about'}
                className="block border-l-4 py-2 pl-3 pr-4 text-base font-medium text-black hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
              
            
                About
       
              </Disclosure.Button>
            
            
              <Disclosure.Button
                as="a"
                href={'/#how-it-works'}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                
                How it works
           
              </Disclosure.Button>
             
              
              <Disclosure.Button
                as="a"
                href={'/pricing'}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
               
                Pricing
               
              </Disclosure.Button>
              
              
             
              <Disclosure.Button
                as="a"
                href={'/#contact-1'}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                
                Contact
            
              </Disclosure.Button>
            
            </div>
        
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  </>

)

}

export default Navbar;