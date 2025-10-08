import { Phone, Mail, MapPin, Clock, Smile, Sparkles, Shield, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smile className="h-8 w-8 text-sky-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">San Diego Bright Smile</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Professional Dental Care</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:6195550123" className="hidden sm:flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium">
              <Phone className="h-4 w-4" />
              (619) 555-0123
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Smile is Our Priority
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience exceptional dental care in the heart of San Diego. From routine check-ups to cosmetic transformations, we're here for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Phone className="h-5 w-5" />
              Schedule Appointment
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Mail className="h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 text-sky-600">
                  <MapPin className="h-5 w-5" />
                  <CardTitle>Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  123 Pacific Coast Highway<br />
                  San Diego, CA 92101
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Free parking available
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 text-sky-600">
                  <Clock className="h-5 w-5" />
                  <CardTitle>Office Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <p className="flex justify-between"><span>Mon - Thu:</span> <span className="font-medium">8:00 AM - 6:00 PM</span></p>
                  <p className="flex justify-between"><span>Friday:</span> <span className="font-medium">8:00 AM - 5:00 PM</span></p>
                  <p className="flex justify-between"><span>Saturday:</span> <span className="font-medium">9:00 AM - 2:00 PM</span></p>
                  <p className="flex justify-between"><span>Sunday:</span> <span className="font-medium">Closed</span></p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 text-sky-600">
                  <Phone className="h-5 w-5" />
                  <CardTitle>Contact</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="tel:6195550123" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-sky-600">
                    <Phone className="h-4 w-4" />
                    (619) 555-0123
                  </a>
                  <a href="mailto:info@sandiegobrightsmile.com" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-sky-600">
                    <Mail className="h-4 w-4" />
                    info@sandiegobrightsmile.com
                  </a>
                  <p className="text-sm text-sky-600 font-medium mt-3">
                    Emergency appointments available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>General Dentistry</CardTitle>
                <CardDescription>Preventive care for healthy smiles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Regular check-ups</li>
                  <li>• Professional cleanings</li>
                  <li>• Dental exams & X-rays</li>
                  <li>• Fluoride treatments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Cosmetic Dentistry</CardTitle>
                <CardDescription>Enhance your beautiful smile</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Teeth whitening</li>
                  <li>• Porcelain veneers</li>
                  <li>• Dental bonding</li>
                  <li>• Smile makeovers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Restorative Care</CardTitle>
                <CardDescription>Restore function and aesthetics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Dental fillings</li>
                  <li>• Crowns & bridges</li>
                  <li>• Dental implants</li>
                  <li>• Dentures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smile className="h-10 w-10 text-sky-600 mb-2" />
                <CardTitle>Orthodontics</CardTitle>
                <CardDescription>Straighten your smile</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Traditional braces</li>
                  <li>• Invisalign</li>
                  <li>• Retainers</li>
                  <li>• Bite correction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 bg-sky-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose San Diego Bright Smile?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-sky-100">
                Our skilled dentists have over 15 years of experience providing exceptional care
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
              <p className="text-sky-100">
                State-of-the-art equipment and techniques for comfortable, effective treatments
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Patient-Centered</h3>
              <p className="text-sky-100">
                We prioritize your comfort and well-being in every visit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Insurance & Payment Options</CardTitle>
              <CardDescription>We make dental care accessible and affordable</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Accepted Insurance</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Most major dental insurance plans</li>
                    <li>• PPO plans accepted</li>
                    <li>• HMO plans accepted</li>
                    <li>• We'll verify your coverage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Payment Options</h4>
                  <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• Flexible payment plans</li>
                    <li>• CareCredit financing</li>
                    <li>• Cash, check, and credit cards</li>
                    <li>• No-interest financing available</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smile className="h-6 w-6 text-sky-400" />
            <span className="text-lg font-semibold">San Diego Bright Smile Dental</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            123 Pacific Coast Highway, San Diego, CA 92101
          </p>
          <p className="text-gray-400 text-sm mb-4">
            (619) 555-0123 | info@sandiegobrightsmile.com
          </p>
          <p className="text-gray-500 text-xs">
            © 2024 San Diego Bright Smile Dental. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  )
}
