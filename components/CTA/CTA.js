export default function CTA() {
    return (
      <div className="mt-24 bg-black">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            <span className="block">Have questions?</span>
            <span className="block text-[#ffc800]">Schedule a free consultation</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://calendly.com/dot-vonn/dot-vonn-intro-consultation"
                className="inline-flex items-center justify-center border-2 border-black bg-white px-5 py-3 text-base font-medium text-black hover:bg-[#ffc800]"
                target="_blank"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }