import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [


  
  {
    question: "Can we work out a custom agreement not listed in your pricing?",
    answer:
      "We developed our pricing to be accessible to entrepreneurs in a range of stages. If you need more or less than you see in our retainers, that's cool. Reach out and we'll see what we can do.",
  },
  {
    question: "What comes with a simple website?",
    answer:
      "A simple website is up to five pages of static content, meaning you won't be able to make updates on the fly. If you think you'll need to make frequent updates, we offer site maintenance, or a custom build.",
  },
  {
    question: "Are there limits on free hosting?",
    answer:
      "Hosting is free for sites with up to 10,000 visitors per month. If you think your site will get more than that, we'd recommend paying a small monthly fee for predictable site costs and performance.",
  },
  {
    question: "What's a website copy consultation?",
    answer:
      "Choosing the words that lead a person to the action you want on your site is part art, part science. A website copy consultation shows you the basics so you're better equipped to tackle that task.",
  },
  {
    question: "What are content pillars and what's a content plan?",
    answer:
      "Content pillars and a content plan are a core part of your content strategy. Your pillars are the themes you talk about that are connected to your business goals. Your content plan decides how those themes come to life by outlining what kind of content to make and the best place to publish it. Together, content pillars and a content plan help ensure your content is both valuable to your audience and supporting your overall business strategy.",
  },
  {
    question: "Do you shoot videos or stills?",
    answer:
      "We typically create original designs or animations, source images or video, or use images you provide. However, we can work with our partners to arrange a shoot. If you think you may need a shoot, let's talk about the details, and make a plan together.",
  },
  {
    question: "What's up with the name?",
    answer:
      "Our name is an homage to and creative twist on the name of Dorothy Vaughan, an early Black Woman computer scientist. We honor her technical brilliance, strength and pioneering genius.",
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            FAQs
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
