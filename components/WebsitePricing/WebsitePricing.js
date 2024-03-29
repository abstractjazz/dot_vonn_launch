
import { CheckCircleIcon } from '@heroicons/react/20/solid'


const includedFeatures = [

  'Website built for you by creative industry pros',
  'Includes easy-to-use CMS',
  'Fresh baked, never stale design and layout styles –– tailored to your brand',
  'Free hosting',
//   if you expect your site will receive more than 10,000 visits per month - 19/ month
  'Custom domain set up',
  // Provider, godaddy. Fee not included
  'Custom e-mail set up',
//   tooltip:  Provider, gmail. Fee not included.
  'Content loaded for you',
   
  'Launch & training consultation',
  'Free website copy consultation',
]

export default function WebsitePricing() {
  return (
    <div className="h-1/2 bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center">
            <h3 className=" font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Custom website
            </h3>
            <p className="mt-4 text-xl text-gray-600">
              If you're not satisfied, contact us within the first 14 days and we'll send you a full refund.
            </p>
          </div> */}
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Custom Web Development</h3>
                <p className="mt-6 text-base text-gray-500">
                 A modern, full-featured website built for your needs and your brand. Professionally designed and optimized with today&apos;s best-practices, your site will stand out from the cookie-cutter crowd.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-[#]">
                      What&apos;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-red-200"/>
                  </div>
                  <ul role="list" className="mt-8 w-full space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                {/* <p className="text-lg font-medium leading-6 text-gray-900">Pay once, own it forever</p> */}
                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                  <span>$2995</span>
                  <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">USD</span>
                </div>
              
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="https://calendly.com/dot-vonn/dot-vonn-intro-consultation"
                      className="flex items-center justify-center border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:border-black hover:border-2 hover:bg-[#ffc800] hover:text-black"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                {/* <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-900">
                    Get a free sample <span className="font-normal text-gray-500">(20MB)</span>
                  </a>
                </div> */}

                  <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    Have something different in mind? Let&apos;s make it happen.
                  </a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
