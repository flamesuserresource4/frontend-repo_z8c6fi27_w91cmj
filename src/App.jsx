import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import PricingTeaser from './components/PricingTeaser'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* Global background accents */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-white" />
        <div className="absolute top-[-10%] right-[-10%] h-[40rem] w-[40rem] rounded-full blur-3xl opacity-30 bg-gradient-to-br from-fuchsia-300 to-violet-300" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[36rem] w-[36rem] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-violet-200 to-pink-200" />
        <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(0,0,0,0.02)_1px)] [background-size:16px_16px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SocialProof />
        <PricingTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
