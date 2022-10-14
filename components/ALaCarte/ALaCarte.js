import Image from 'next/image'
import Link from 'next/link'

// const sides = [


//     { id: null, name: 'None' },
//     { id: 1, name: 'Baked beans' },
//     { id: 2, name: 'Coleslaw' },
//     { id: 3, name: 'French fries' },
//     { id: 4, name: 'Garden salad' },
//     { id: 5, name: 'Mashed potatoes' },
//   ]

  const sidesTwo = [


    { id: null, name: 'None' },
    { id: 1, name: 'Baked beans' },
    { id: 2, name: 'Coleslaw' },
    { id: 3, name: 'French fries' },
    { id: 4, name: 'Garden salad' },
    { id: 5, name: 'Mashed potatoes' },
  ]

  const sides = [


    { id: 1, name: 'Ad design & copy' },
    { id: 2, name: 'Content batch' },
    { id: 3, name: 'Blog post' },
    { id: 4, name: 'Email design' },
    { id: 5, name: 'Email copy/ Newsletter copy' },
    { id: 6, name: 'Page audit & competitor audit' },
    { id: 7, name: 'Content pillars & content plan' },
    { id: 8, name: 'Social content template' },
  ]
  
  export default function ALaCarte() {
    return (
      
        <div className="w-full f-container flex flex-col justify-center items-center gap-y-10 mb-20 py-12 shadow-xl md:pl-12 md:pr-12 z-0">
        <video className="lg:absolute z-1" muted autoPlay="autoplay" loop poster="/paper_reverse_min.gif">
          <source src="https://ik.imagekit.io/a9ltbtydo/pricing-gif/paper_reverse.mp4"></source>
        </video>
       <div className="headline-cont lg:flex items-center pl-12 w-full z-10">
        <h1 className="text-2xl font-bold text-white bg-black/50 shadow md px-4 py-4 z-50">Just need a couple things done? <span className="text-[#ffc800]"> Cool with us</span>.</h1>
        <div className='flex flex-row gap-x-40 justify-center'>
        </div>
      <fieldset className="accent-[#ffc800] z-50">
        {/* <legend className="text-lg font-medium text-gray-900 px-12">Side</legend> */}
        <div className="mt-4 divide-y flex flex-wrap divide-gray-200 border-gray-200 md:flex-wrap md:gap-2 md:px-12 w-screen md:w-full md:space-y-2 space-y-8">
          {sides.map((side, sideIdx) => (
            <div key={sideIdx} className="bg-white rounded-md relative border flex items start md:flex items-start md:flex-wrap py-4 px-12 shadow-md w-5/6 md:w-full">
              <div className="min-w-0 flex-1 text-sm ">
                <label htmlFor={`side-${side.id}`} className="select-none font-medium text-gray-700">
                  {side.name}
                </label>
              </div>
              <div className="ml-3 flex h-5 items-center md:justify-end">
                <input
                  id={`side-${side.id}`}
                  name="plan"
                  type="checkbox"
                  defaultChecked={side.id === null}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 "
                />
              </div>
            </div>
          ))}
           
        </div>
        <div className="mt-12 md:ml-12 lg:flex lg:flex-row lg:justify-center">
       <a href="https://calendly.com/dot-vonn/dot-vonn-intro-consultation" className="md:w-1/2 w-full self-start border border-black border-2 bg-black text-white hover:bg-[#ffc800] hover:text-black font-bold text-center shadow-md px-12" target="_blank" rel="noreferrer">Get Started</a>
        </div>
      </fieldset>
      </div>
      </div>
    )
  }
  