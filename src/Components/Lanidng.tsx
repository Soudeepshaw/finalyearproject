import React from 'react'
import { Button } from "@/Components/ui/button"
import { Card, CardContent } from "@/Components/ui/card"
import { Scissors, Ruler, Shirt, CheckCircle, Search, Calendar, Star } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Scissors className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">TailorMatch</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost">How It Works</Button>
              <Button variant="ghost">Tailors</Button>
              <Button variant="ghost">About Us</Button>
              <Button variant="outline" className="ml-4">Sign In</Button>
              <Button className="ml-4">Sign Up</Button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Custom Tailoring, Simplified
              </h1>
              <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
                Find expert tailors near you and get perfectly fitted clothes with our AI-powered platform.
              </p>
              <div className="mt-10 flex justify-center">
                <Button size="lg" className="mr-4">
                  Find a Tailor
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-100">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Tailoring Excellence at Your Fingertips
              </h2>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">Find Nearby Tailors</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Discover skilled tailors in your area with just a few clicks.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                    <Ruler className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">AI-Driven Measurement Tool</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Get accurate measurements using our cutting-edge AI technology.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                    <Shirt className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">Custom Clothing Options</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Choose from a wide range of styles and fabrics for your perfect fit.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">Verified Tailors</h3>
                  <p className="mt-2 text-base text-gray-500">
                    All our tailors are vetted and verified for quality assurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Get your custom-tailored clothes in three simple steps.
              </p>
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mx-auto">
                    1
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">Search</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Find tailors near you based on your preferences and requirements.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mx-auto">
                    2
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">Book</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Schedule an appointment with your chosen tailor at a convenient time.
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mx-auto">
                    3
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-gray-900">Get Tailored</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Enjoy your perfectly fitted, custom-made clothing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose Us
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Experience the perfect fit with our unique advantages.
              </p>
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Ruler className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Accurate Measurements</h3>
                    <p className="text-base text-gray-500">
                      Our AI-powered tool ensures precise measurements for the perfect fit.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Convenience</h3>
                    <p className="text-base text-gray-500">
                      Book appointments at your preferred time and location.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Scissors className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Experienced Tailors</h3>
                    <p className="text-base text-gray-500">
                      Work with skilled professionals vetted for quality and expertise.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What Our Customers Say
              </h2>
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  { name: "Alex Johnson", tailor: "Emma's Tailoring", rating: 5 },
                  { name: "Sarah Lee", tailor: "Stitch Perfect", rating: 4 },
                  { name: "Michael Chen", tailor: "Bespoke Creations", rating: 5 },
                  { name: "Emily Rodriguez", tailor: "Tailored Elegance", rating: 5 },
                  { name: "David Kim", tailor: "Precision Fits", rating: 4 },
                  { name: "Olivia Thompson", tailor: "Couture Creations", rating: 5 },
                ].map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <p className="text-base text-gray-500 mb-4">
                        "Exceptional service! The fit was perfect, and the tailor was very professional."
                      </p>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.tailor}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Find a Tailor</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Measurement Guide</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Custom Designs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
            <p className="text-base text-gray-400">
              © 2023 TailorMatch. All rights reserve d.
            </p>
            <p className="text-base text-gray-400">
              Customer Support: support@tailormatch.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}