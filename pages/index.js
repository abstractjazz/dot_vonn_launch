import Splash from '../components/MainPage'
import HowItWorks from '../components/HowItWorks'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Services from '../components/Services'


export default function Main() {
  return (
   <section>
   <Splash/>
   <Services/>
   <HowItWorks/>
   <CTA/>
   <Contact/>
   <FAQ/>
   </section>
  )
}
