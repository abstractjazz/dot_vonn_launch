import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"

export default function CollaboratorForm() {
  return (
    
    <div className="bg-gray-10 flex flex-col items-center bg-gradient-to-tl from-red-500/75 to-zinc-500/50">
      
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8" id="collaborators">
        <div className="relative bg-[url('/fingerprint_bg.jpg')] shadow-xl">
         

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-white py-10 px-6 sm:px-10 xl:p-12">
              <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-black">Stay in touch</h3>
              <p className="mt-6 max-w-3xltext-base text-black">
               If you&apos;re a potential collaborator who wants to make money and meaningful creative work, this is the form you&apos;ve been waiting for.  
              </p>
              <div className=" mt-12">
                <h1 className="text-3xl font-bold mb-4 mt-4">What is Dot Vonn?</h1>
                <p>A web studio that serves creative entrepreneurs. We're made up of a network of creatives, technologists and strategists who believe in making our own opportunities. We also practice collaboration (not hierarchy 🙅🏾‍♀️) and transparent, equitable pay. Sound good? <span className="text-red-800">Leave your info</span>, and we'll be in touch as projects become available.</p>
              </div><br></br>
             <div className="text-gray-500 text-sm">
              <p className="mb-4">Based in sunny Oakland, California</p>
              
             <ul key ="contactInfo">
              <li className="flex space-x-3" key="phone">
              <EnvelopeIcon className="h-5 w-5"/>
              <span>info@dotvonn.com</span>
              </li>

              <li className="flex space-x-3" key="envelope">
              <PhoneIcon className="h-5 w-5"/>
               <span>+1 510-221-0875</span>
               </li>
               </ul>
              </div>
             
            </div>


            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900"></h3>
              <form name="collaborator-form" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" action={"/success"} method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="collaborator-form" />
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-100">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-900"
                      aria-required
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-100">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-900"
                      aria-required
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-900"
                      aria-required
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-100">
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-900"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-100">
                      What do you do?
                    </label>
                <select name="craft" id="craft" className="text-white" required>
                    <option value="select" selected disabled>Select</option>
                    <option value="visual">Visual Creative</option>
                    <option value="dev">Developer</option>
                    <option value="writer">Writer</option>
                    <option value="strat">Strategist</option>
                    <option value="social">Social Media Practitioner</option>
                    <option value="other">Other</option>
                </select>
                
             
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-100">
                      Website or social url
                    </label>

                  </div>
                  <div className="mt-1">
                    <input
                      id="social"
                      name="social" 
                      className="block w-full rounded-md border-gray-300 py-3 px-4 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-900"
                      defaultValue={''}
                      required
                      aria-required
                    />
                  </div>
                </div>

                
                
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center border-2 border-black bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#ffc800] hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}