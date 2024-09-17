//import React from 'react'
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { Star, MapPin, Phone, Mail, Scissors } from 'lucide-react'

// Mock data for the tailor
const tailor = {
  id: 1,
  name: "Emma's Tailoring",
  rating: 4.8,
  totalReviews: 120,
  experience: 10,
  specialty: "Women's Formal Wear",
  location: "123 Fashion St, New York, NY 10001",
  phone: "+1 (555) 123-4567",
  email: "emma@emmastailoring.com",
  about: "With over a decade of experience in women's formal wear, Emma's Tailoring brings a perfect blend of classic elegance and modern trends to every piece. Our attention to detail and commitment to quality ensures that each garment is tailored to perfection.",
  services: [
    { name: "Evening Gowns", price: "$300+" },
    { name: "Wedding Dresses", price: "$500+" },
    { name: "Business Suits", price: "$250+" },
    { name: "Alterations", price: "$50+" },
  ],
  portfolio: [
    { id: 1, title: "Elegant Evening Gown", image: "/placeholder.svg?height=300&width=400" },
    { id: 2, title: "Bridal Collection 2023", image: "/placeholder.svg?height=300&width=400" },
    { id: 3, title: "Corporate Chic Suits", image: "/placeholder.svg?height=300&width=400" },
    { id: 4, title: "Vintage-Inspired Dresses", image: "/placeholder.svg?height=300&width=400" },
  ],
  reviews: [
    { id: 1, author: "Sarah L.", rating: 5, comment: "Emma created the most beautiful wedding dress for me. Her attention to detail is impeccable!" },
    { id: 2, author: "Jessica M.", rating: 4, comment: "Great work on my evening gown. Fit like a glove and received many compliments." },
    { id: 3, author: "Rachel K.", rating: 5, comment: "Excellent alterations on my suit. Quick turnaround and professional service." },
  ]
}

export default function TailorProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600">TailorMatch</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Search Tailors</Button>
              <Button variant="outline" className="ml-4">Sign In</Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{tailor.name}</h1>
              <div className="mt-1 flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="ml-1 text-sm text-gray-600">{tailor.rating} ({tailor.totalReviews} reviews)</span>
              </div>
            </div>
            <Button size="lg">Book Now</Button>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  Location
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{tailor.location}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <Phone className="h-5 w-5 mr-1" />
                  Phone
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{tailor.phone}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <Mail className="h-5 w-5 mr-1" />
                  Email
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{tailor.email}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <Scissors className="h-5 w-5 mr-1" />
                  Specialty
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{tailor.specialty}</dd>
              </div>
            </dl>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About {tailor.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{tailor.about}</p>
          </CardContent>
        </Card>

        <Tabs defaultValue="services" className="mb-8">
          <TabsList>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Services Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="divide-y divide-gray-200">
                  {tailor.services.map((service, index) => (
                    <li key={index} className="py-4 flex justify-between">
                      <span className="text-gray-900">{service.name}</span>
                      <span className="text-gray-600">{service.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="portfolio">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tailor.portfolio.map((item) => (
                <Card key={item.id}>
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews">
            <div className="space-y-6">
              {tailor.reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-2">{review.comment}</p>
                    <p className="text-sm font-medium text-gray-900">- {review.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center">
          <Button size="lg">Book an Appointment</Button>
        </div>
      </main>
    </div>
  )
}