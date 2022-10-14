import Image from 'next/image'

export default function HowItWorks() {
    return (
      <div className="drop-shadow-md relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <video className="h-56 w-full object-cover lg:absolute lg:h-full object-fit"
              poster="/background_rev.gif"
              type="video/mp4"
              alt="A man magically taking whole pieces of paper from a shredder"
              muted autoPlay="autoplay" loop="loop" 
              
              >
             <source src="https://ik.imagekit.io/a9ltbtydo/about-new/background_rev.mp4"></source>
              
            
              </video>
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h2 className="font-semibold leading-6 text-[#ff66ea]">We create connections</h2>
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl" id="about">About Us</h3>
              <p className="mt-8 text-lg text-gray-500">
                Dot Vonn came from the idea that huge brands shouldn&apos;t be the only ones to get the best of creative & technical services. 
              </p>
              <div className="prose prose-indigo mt-5 text-gray-500">
                <p>
               Creative entrepreneurs and growing brands - those who make products, art or experiences - deserve help, too. We&apos;re a network of creative and technical pros who work in industries like advertising, design, production and tech. And we know the superpower of a well-crafted online presence & brand to create meaningful connections.  
                </p><br></br>
                <p>
                 So we joined forces to make that power accessible to the many. We bet you&apos;re doing something more people would love to see. We love to help them see it.
                </p><br></br>
                {/* <ul role="list">
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul> */}
                {/* <p>
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                  velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                  egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                </p> */}
                <div id="how-it-works">
                <h2 className="font-semibold leading-6 text-[#ff66ea]">Work with us</h2>
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Our Process</h3><br></br>
              
                <p>
                  We&apos;ll always start by learning about your business. And then we&apos;ll establish goals and a plan specific to <em>your business.</em> That means you&apos;ll always talk to a real person, and get a custom solution. From the smallest project to a long-term vision, you get todays leading creative know-how and technical chops.  
                </p>
                </div>
                {/* <p>
                  Mauris ullamcorper imperdiet nec egestas mi quis quam ante vulputate. Vel faucibus adipiscing lacus,
                  eget. Nunc fermentum id tellus donec. Ut metus odio sit sit varius non nunc orci. Eu, mi neque, ornare
                  suspendisse amet, nibh. Facilisi volutpat lectus id sapien dis mauris rhoncus. Est rhoncus, interdum
                  imperdiet ac eros, diam mauris, tortor. Risus id sit molestie magna.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }