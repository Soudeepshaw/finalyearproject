import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/Components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select"
import { Star, MapPin, Search, List, Map, Clock, Scissors, Crosshair } from 'lucide-react'
import { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export default function CustomerHomepage() {
  const [location, setLocation] = useState('')
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 })

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation(`${latitude}, ${longitude}`)
          setMapCenter({ lat: latitude, lng: longitude })
        },
        (error) => {
          console.error("Error getting location:", error)
        }
      )
    } else {
      console.error("Geolocation is not supported by this browser.")
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  const tailorNames = [
    "Stitch & Style",
    "Perfect Fit Tailors",
    "Elegant Threads",
    "Bespoke Creations",
    "Sew Chic",
    "Tailored Elegance",
    "Needle & Thread Masters",
    "Dapper Designs",
    "Seam Supreme",
    "Tailor's Touch"
  ]

  function getTailorName(index:number) {
    return tailorNames[index - 1] || `Custom Tailor ${index}`
  }

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600">CustomFit</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="ghost">Sign In</Button>
              <Button variant="outline" className="ml-4">Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <Card className="mb-12 p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent className="text-center">
            <h1 className="text-5xl font-bold mb-4">Find Your Perfect Tailor</h1>
            <p className="text-xl">Discover skilled tailors near you for custom-made clothing</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow flex">
                <Input 
                  className="flex-grow rounded-r-none" 
                  placeholder="Enter your location" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Button 
                  className="rounded-l-none" 
                  variant="outline"
                  onClick={getCurrentLocation}
                >
                  <Crosshair className="h-4 w-4" />
                </Button>
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mens">Men's Wear</SelectItem>
                  <SelectItem value="womens">Women's Wear</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full md:w-auto">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="list" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="list"><List className="h-4 w-4 mr-2" />List View</TabsTrigger>
            <TabsTrigger value="map"><Map className="h-4 w-4 mr-2" />Map View</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((tailor) => (
                <Card key={tailor} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={tailor <= 10 ? [
                      "https://ideogram.ai/api/images/direct/79oDcN5fTimZ5GBPtqfreg.jpg",
                      "https://ideogram.ai/api/images/direct/H6TT9xVUTiKLXJcyR84T4Q.jpg",
                      "https://ideogram.ai/api/images/direct/R1QtwtNvQC-HQqsmaAtlLw.jpg",
                      "https://ideogram.ai/api/images/direct/b57559I5RDOxY4KmygNojQ.jpg",
                      "https://ideogram.ai/api/images/direct/ONGwsNN6QqO9jUS1Zw8Tgg.jpg",
                      "https://ideogram.ai/api/images/direct/ToWwRov4SYKQRwwVgPkqgg.jpg",
                      "https://ideogram.ai/api/images/direct/U3eO8d28TP6lnAO6CD14JQ.jpg",
                      "https://ideogram.ai/api/images/direct/EEkczur2R4iRlKQsFznIig.jpg",
                      "https://ideogram.ai/api/images/direct/4oha2yoGT96E_9EitmEXDQ.jpg",
                      "https://ideogram.ai/api/images/direct/4oha2yoGT96E_9EitmEXDQ.jpg"
                    ][tailor - 1] : `https://source.unsplash.com/400x200/?tailor,sewing?sig=${tailor}`}
                    alt={`Tailor ${tailor}`}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{getTailorName(tailor)}</h3>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">4.{tailor % 5 + 1} (120 reviews)</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">2.{tailor % 5 + 1} miles away</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Clock className="h-5 w-5 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">Open: 9AM - 6PM</span>
                    </div>
                    <div className="flex items-center">
                      <Scissors className="h-5 w-5 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">Specialties: Men's Wear, Formal, Casual</span>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 p-4">
                    <Button className="w-full">View Profile</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map">
            <Card>
              <CardContent className="p-0">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={mapCenter}
                    zoom={14}
                  >
                    <Marker position={mapCenter} />
                  </GoogleMap>
                </LoadScript>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}