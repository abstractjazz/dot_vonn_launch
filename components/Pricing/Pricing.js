import { CheckIcon, FaceSmileIcon } from '@heroicons/react/20/solid'
import WebsitePricing from '../WebsitePricing'
import ALaCarte from '../ALaCarte'
import FAQ from '../FAQ'
import Contact from '../Contact'


const tiers = [


  {
    name: 'Brand Starter Kit',
    href: '#',
    priceMonthly: 3995,
    description: "Nice work! You've got a business. Now, let's work on your brand.",
    includedFeatures: ['Professionally designed logo', 'Business card design', 'Custom type & design system', 'Page & competitor audit', 'Content pillars & content plan', '1 content batch (set of 9 across 1 platform)', 'Simple website'],
    pricingStructure: 'single payment'  
  },
  {
    name: 'Creative Sprint',
    href: '#',
    priceMonthly: '1495',
    description:  "Grab attention, hold it,  start building on it.",
    includedFeatures: [
      'Ad design & copy (Facebook, Insta, TikTok, LinkedIn) - 3 ads perfectly to spec',
      'Content Batch (9 posts on a single platform)',
      'Blog post',
      'Email design',
      'Email copy / Newsletter copy',
      // 'Page audit & competitor audit',
      // 'Content pillars & content plan',
      'Social content template (3 designs)', 
      // add hover tooltips
    ],
    action: 'Choose any',
    selectionFrequency: 'services per month',
    includedServiceNumber: 3,
    pricingStructure: '/mo for 3 months',
    
  },
  {
    name: 'Creative Partnership',
    href: '#',
    priceMonthly: '1385',
    description: 'Make valuable content for enthusiastic followers – who can become loyal customers.',
    includedFeatures: [
      'Ad design & copy (Facebook, Insta, TikTok, LinkedIn) - 3 ads perfectly to spec',
      'Content Batch (9 posts on a single platform)',
      'Blog post',
      'Email design',
      'Email copy / Newsletter copy',
      'Page audit & competitor audit',
      // 'Content pillars & content plan',
      'Social content template (3 designs)', 
    ],
    action: 'Choose any',
    includedServiceNumber: 3,
    selectionFrequency: 'services per month',
    pricingStructure:'/mo for 6 months',
    
  },
  {
    name: 'Strategic Partnership',
    href: '#',
    priceMonthly: '1175',
    description: 'A longer-term investment in your business and brand. And a partner for the journey.',
    includedFeatures: [
      'Ad design & copy (Facebook, Insta, TikTok, LinkedIn) - 3 ads perfectly to spec',
      'Content Batch (9 posts on a single platform)',
      'Blog post',
      'Email design',
      'Email copy / Newsletter copy',
      'Page audit & competitor audit',
      'Social content template (3 designs)', 
      'Content pillars & content plan',
      'Discount on custom website',
      'Discount on website maintenance'
    ],
    action: 'Choose any',
    includedServiceNumber: 4,
    selectionFrequency: 'services per month',
    
    pricingStructure: '/mo for 12 months',
   
  },
]

export default function Pricing() {
 

  return (
    
   
    <div className="bg-white" id="pricing">
      <div className="py-8 md:px-4 sm:px-6 lg:px-8">
        <div className="md:w-full sm:align-center sm:flex sm:flex-col shadow-xl  p-4 md:p-12 mt-12 bg-[url('/pricing_bg_2.jpg')]">
        <div className="bg-white shadow-md pb-12 bg-gradient-to-br from-[#ffc800]/25 to-white">
          <h1 className="lg:text-5xl text-3xl font-bold tracking-tight text-black sm:text-center pt-8 px-12">Pricing</h1>
          <p className=" ml-8 mt-5 text-md lg:text-xl sm:text-center font-semibold px-4 rounded-md">
          Launch a website. Choose a retainer. Or start small with a single service. 
          </p>
          {/* <FaceSmileIcon className="smiley h-10 w-10 flex-shrink-0 text-[#ff66ea]" aria-hidden="true"></FaceSmileIcon>
          <FaceSmileIcon className="smiley h-10 w-10 flex-shrink-0 text-black" aria-hidden="true"></FaceSmileIcon>
          <FaceSmileIcon className="smiley h-10 w-10 flex-shrink-0 text-black" aria-hidden="true"></FaceSmileIcon>
          <FaceSmileIcon className="smiley h-10 w-10 flex-shrink-0 text-[#ffc800]" aria-hidden="true"></FaceSmileIcon>
          <FaceSmileIcon className="smiley h-10 w-10 flex-shrink-0 text-black" aria-hidden="true"></FaceSmileIcon>
          <FaceSmileIcon className="smiley h-10 w-10 flex-shrink-0 text-black" aria-hidden="true"></FaceSmileIcon> */}
          </div>
          <WebsitePricing/>
          {/* <div className="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
            <button
              type="button"
              className="relative w-1/2 whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
            >
              Monthly billing
            </button>
            <button
              type="button"
              className="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
            >
              Yearly billing
            </button>
          </div> */}
        </div>
        <div className="mt-12 pb-12 px-12 bg-gray-200 flex flex-col shadow-md items-center">
        <div className="text-center rounded-md shadow-md pb-12 w-screen md:w-3/4 mt-12 bg-[url('/static_still.png')] px-12">
          <div className="bg-black/30 px-12">
            <h3 className="text-4xl font-bold mt-14 text-[#ffc800]">Creative Retainers</h3>
            </div>
          </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 w-screen md:w-full lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          
          {tiers.map((tier) =>
         
          (

              <div id="keyCheck" key={tier.name} className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm bg-white w-screen md:w-full">
  
              <div className="p-6">
                <h2 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-gray-500"><br></br>{tier.pricingStructure}</span>
                </p>
                <a
                  href="https://calendly.com/dot-vonn/dot-vonn-intro-consultation"
                  className="mt-8 block w-1/2 lg:w-full border-2 border-black bg-black py-2 text-center text-sm font-semibold text-white hover:bg-[#ffc800] hover:text-black"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Access
                </a>
              </div>
              
              <div className="px-6 pt-6 pb-8">
                {/* useState/ useEffect for conditional rendering  */}
                <h3 className="text-sm font-medium text-gray-900">What&apos;s included: <br></br> <span className="text-[#ff66ea]" id="pickAny"> {tier.action} {tier.includedServiceNumber} {tier.selectionFrequency}</span></h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
            
              </div>
            </div>
           
          ))}
          
        </div>
        </div>
       <div className="flex flex-col items-center justify-center mt-12">
       <ALaCarte/>
      
       </div>
       
      </div>
      <FAQ/>
      <Contact/>
    </div>
    
  )
}
