
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Trophy, Users, Zap, Code2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import MatrixRain from '../components/MatrixRain';
import ThreeScene from '../components/ThreeScene';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    document.title = 'Vibe Coding - 6 Hours Hackathon | Code. Create. Compete.';
  }, []);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "6 Hours",
      description: "Intense coding sprint"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "$5,000",
      description: "Prize pool"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "500+",
      description: "Developers expected"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "All Levels",
      description: "Beginner to expert"
    }
  ];

  const tracks = [
    { name: "AI & Machine Learning", color: "bg-blue-500" },
    { name: "Web3 & Blockchain", color: "bg-purple-500" },
    { name: "Sustainability Tech", color: "bg-green-500" },
    { name: "FinTech Innovation", color: "bg-yellow-500" },
    { name: "Open Innovation", color: "bg-red-500" }
  ];

  return (
    <div className="min-h-screen bg-vibe-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center matrix-bg overflow-hidden">
        <MatrixRain />
        <ThreeScene />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold mb-6 leading-tight">
              <span className="text-vibe-green glow-text">VIBE</span>
              <br />
              <span className="text-white">CODING</span>
            </h1>
            
            <div className="text-xl md:text-2xl font-mono text-vibe-green mb-4 animate-pulse-green">
              6 HOURS HACKATHON
            </div>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white">
              Code. Create. Compete.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Unleash Your Coding Vibe in the ultimate 6-hour hackathon experience. 
              Build innovative solutions, compete with top developers, and win amazing prizes.
            </p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/enrollment"
              className="group bg-vibe-green text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-white transition-all duration-300 hover:scale-105 animate-glow flex items-center space-x-2"
            >
              <span>Join the Hackathon</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="glass-effect px-8 py-4 rounded-lg text-lg font-medium hover:bg-vibe-green hover:text-black transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Learn More</span>
            </Link>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="600" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg text-center hover:bg-vibe-green hover:text-black transition-all duration-300 hover:scale-105">
                <div className="text-vibe-green mb-3 flex justify-center">
                  {feature.icon}
                </div>
                <div className="text-2xl font-bold mb-2">{feature.title}</div>
                <div className="text-sm opacity-80">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-vibe-green rounded-full flex justify-center">
            <div className="w-1 h-3 bg-vibe-green rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Event Details Preview */}
      <section className="py-20 bg-gradient-to-b from-vibe-black to-vibe-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              <span className="text-vibe-green">EVENT</span> <span className="text-white">DETAILS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us for an unforgettable coding experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100" className="glass-effect p-8 rounded-lg hover:scale-105 transition-transform duration-300">
              <Calendar className="w-12 h-12 text-vibe-green mb-4" />
              <h3 className="text-2xl font-bold mb-4">When</h3>
              <p className="text-gray-300">
                <strong>Date:</strong> March 15, 2025<br />
                <strong>Time:</strong> 10:00 AM - 4:00 PM<br />
                <strong>Duration:</strong> 6 Hours
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" className="glass-effect p-8 rounded-lg hover:scale-105 transition-transform duration-300">
              <Zap className="w-12 h-12 text-vibe-green mb-4" />
              <h3 className="text-2xl font-bold mb-4">Format</h3>
              <p className="text-gray-300">
                <strong>Mode:</strong> Hybrid Event<br />
                <strong>Virtual:</strong> Global participation<br />
                <strong>In-Person:</strong> Tech Hub locations
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="glass-effect p-8 rounded-lg hover:scale-105 transition-transform duration-300">
              <Trophy className="w-12 h-12 text-vibe-green mb-4" />
              <h3 className="text-2xl font-bold mb-4">Prizes</h3>
              <p className="text-gray-300">
                <strong>1st Place:</strong> $2,500<br />
                <strong>2nd Place:</strong> $1,500<br />
                <strong>3rd Place:</strong> $1,000 + Swag
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 bg-vibe-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              <span className="text-vibe-green">CODING</span> <span className="text-white">TRACKS</span>
            </h2>
            <p className="text-xl text-gray-300">
              Choose your challenge and build something amazing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative glass-effect p-6 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-4 h-4 ${track.color} rounded-full mb-4`}></div>
                <h3 className="text-xl font-bold text-white group-hover:text-vibe-green transition-colors">
                  {track.name}
                </h3>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-vibe-green rounded-lg transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-vibe-black to-vibe-gray">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
              <span className="text-white">READY TO</span> <span className="text-vibe-green glow-text">CODE?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Don't miss out on this epic coding adventure. Register now and secure your spot!
            </p>
            <Link
              to="/enrollment"
              className="inline-flex items-center space-x-3 bg-vibe-green text-black px-12 py-4 rounded-lg text-xl font-bold hover:bg-white transition-all duration-300 hover:scale-105 animate-glow"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
