import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ShipCars4ULogo from "@/components/ShipCars4ULogo";
import { Truck, Shield, Clock, Star, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

export default function Index() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <ShipCars4ULogo width={200} height={38} />
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-shipcar-dark hover:text-shipcar-blue transition-colors">Services</a>
              <a href="#how-it-works" className="text-shipcar-dark hover:text-shipcar-blue transition-colors">How It Works</a>
              <a href="#about" className="text-shipcar-dark hover:text-shipcar-blue transition-colors">About</a>
              <a href="#contact" className="text-shipcar-dark hover:text-shipcar-blue transition-colors">Contact</a>
              <Button className="bg-shipcar-blue hover:bg-shipcar-blue/90 text-white">Get Quote</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-shipcar-dark via-shipcar-dark to-shipcar-blue text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Trusted Auto Transport
                <span className="block text-shipcar-blue">Nationwide</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Ship your car with confidence. Over 1 million vehicles transported safely with our network of certified carriers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={scrollToTop} className="bg-shipcar-blue hover:bg-shipcar-blue/90 text-white text-lg px-8 py-3">
                  Get Instant Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-shipcar-dark text-lg px-8 py-3">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Licensed & Bonded</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            
            {/* Quote Form */}
            <Card className="bg-white/95 backdrop-blur shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-shipcar-dark">Get Your Free Quote</CardTitle>
                <CardDescription>Fill out the form below for an instant quote</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <Input id="pickup" placeholder="City, State or ZIP" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delivery">Delivery Location</Label>
                    <Input id="delivery" placeholder="City, State or ZIP" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="year">Vehicle Year</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="older">Older</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="make">Vehicle Make</Label>
                    <Input id="make" placeholder="Toyota, Ford, etc." />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="model">Vehicle Model</Label>
                  <Input id="model" placeholder="Camry, F-150, etc." />
                </div>
                
                <Button onClick={scrollToTop} className="w-full bg-shipcar-blue hover:bg-shipcar-blue/90 text-white text-lg py-3">
                  Get Free Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-shipcar-dark mb-4">Our Transport Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're moving across the country or just need to ship a car, we have the right solution for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-12 h-12 text-shipcar-blue mb-4" />
                <CardTitle className="text-xl text-shipcar-dark">Open Carrier</CardTitle>
                <CardDescription>
                  Most popular and cost-effective option for standard vehicles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Most affordable option</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Faster pickup times</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Fully insured transport</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-shipcar-blue mb-4" />
                <CardTitle className="text-xl text-shipcar-dark">Enclosed Carrier</CardTitle>
                <CardDescription>
                  Premium protection for luxury, classic, or exotic vehicles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Maximum protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Weather protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Premium insurance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-shipcar-blue mb-4" />
                <CardTitle className="text-xl text-shipcar-dark">Expedited Shipping</CardTitle>
                <CardDescription>
                  Fast delivery when you need your vehicle quickly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Priority scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Guaranteed pickup dates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-shipcar-dark mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent process from quote to delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-shipcar-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-shipcar-dark mb-2">Get Quote</h3>
              <p className="text-gray-600">Fill out our simple form and get an instant quote for your shipment.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-shipcar-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-shipcar-dark mb-2">Book Service</h3>
              <p className="text-gray-600">Review terms and secure your shipment with our booking specialists.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-shipcar-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-shipcar-dark mb-2">Pickup</h3>
              <p className="text-gray-600">Our carrier will inspect and load your vehicle at the pickup location.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-shipcar-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-shipcar-dark mb-2">Delivery</h3>
              <p className="text-gray-600">Track your shipment and receive your vehicle at the destination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-shipcar-dark mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold text-shipcar-dark">4.9/5 from 50,000+ reviews</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent service! My car was picked up on time and delivered in perfect condition. The driver was professional and kept me updated throughout the journey."
                </p>
                <div className="font-semibold text-shipcar-dark">Sarah Johnson</div>
                <div className="text-sm text-gray-500">California to New York</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I was nervous about shipping my classic car, but ShipCars4U made the process seamless. The enclosed carrier service was worth every penny."
                </p>
                <div className="font-semibold text-shipcar-dark">Michael Chen</div>
                <div className="text-sm text-gray-500">Texas to Florida</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Great communication and competitive pricing. I've used ShipCars4U three times now for different moves and they never disappoint."
                </p>
                <div className="font-semibold text-shipcar-dark">Emily Rodriguez</div>
                <div className="text-sm text-gray-500">Illinois to Arizona</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-shipcar-dark mb-4">About ShipCars4U</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the auto transport industry with reliable, secure, and affordable vehicle shipping solutions nationwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-shipcar-dark">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                At ShipCars4U, we're committed to making auto transport simple, secure, and stress-free. With over a decade of experience
                in the industry, we've built a network of licensed and insured carriers who share our commitment to excellence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're relocating for work, buying a car online, or need to ship a vehicle for any reason, we provide
                transparent pricing, reliable service, and peace of mind throughout the entire process.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-shipcar-blue mb-2">1M+</div>
                  <div className="text-sm text-gray-600">Vehicles Shipped</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-shipcar-blue mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-shipcar-blue mb-2">4.9</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-shipcar-blue mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-shipcar-dark">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-shipcar-dark mb-1">Licensed & Insured</h4>
                    <p className="text-gray-600">All our carriers are properly licensed, bonded, and insured for your protection.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-shipcar-dark mb-1">Transparent Pricing</h4>
                    <p className="text-gray-600">No hidden fees or surprise charges. What you see is what you pay.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-shipcar-dark mb-1">Real-Time Tracking</h4>
                    <p className="text-gray-600">Stay informed with updates throughout your vehicle's journey.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-shipcar-dark mb-1">Nationwide Coverage</h4>
                    <p className="text-gray-600">We ship to all 50 states with reliable pickup and delivery services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-shipcar-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Ship Your Vehicle?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join over 1 million satisfied customers who trust ShipCars4U with their vehicle transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToTop} className="bg-shipcar-blue hover:bg-shipcar-blue/90 text-white text-lg px-8 py-3">
              Get Free Quote Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-shipcar-dark text-lg px-8 py-3">
              Call (888) 590-7884
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-shipcar-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <ShipCars4ULogo width={180} height={34} className="mb-4" />
              <p className="text-gray-300 mb-4">
                America's trusted auto transport company with over a decade of experience.
              </p>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>(888) 590-7884</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-shipcar-blue transition-colors">Open Carrier</a></li>
                <li><a href="#" className="hover:text-shipcar-blue transition-colors">Enclosed Carrier</a></li>
                <li><a href="#" className="hover:text-shipcar-blue transition-colors">Expedited Shipping</a></li>
                <li><a href="#" className="hover:text-shipcar-blue transition-colors">Motorcycle Transport</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-shipcar-blue transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-shipcar-blue transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-shipcar-blue transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-shipcar-blue transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(888) 590-7884</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@shipcars4u.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Chicago, IL</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShipCars4U Auto Transport. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
