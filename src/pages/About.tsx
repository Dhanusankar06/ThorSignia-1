import { Link } from "react-router-dom"
import { Globe, Lightbulb, Users, Zap, BarChart3, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OurPurpose from '@/components/OurPurpose'
import OurJourney from '@/components/OurJourney'
import CompanyAnthem from '@/components/CompanyAnthem'
import CoreValues from '@/components/CoreValues'
import AnimatedHeader from '@/components/AnimatedHeader'
import WhoWeAre from '@/components/WhoWeAre'
import ChatbotDemo from '@/components/ChatbotDemo'


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AnimatedHeader />

      <OurPurpose />
      <WhoWeAre />
      <OurJourney />
      <CompanyAnthem />
      <CoreValues />

      {/* Footer */}
      <Footer />
      <ChatbotDemo />
    </div>
  )
}
