
import React, { useEffect, useState } from 'react';
import { User, Mail, Users, Code, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Enrollment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    teamName: '',
    skillLevel: '',
    track: '',
    experience: '',
    agreesToTerms: false,
    agreesToEmails: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Enrollment - Vibe Coding Hackathon';
  }, []);

  const skillLevels = [
    { value: 'beginner', label: 'Beginner', description: '0-1 years of coding experience' },
    { value: 'intermediate', label: 'Intermediate', description: '2-4 years of coding experience' },
    { value: 'advanced', label: 'Advanced', description: '5+ years of coding experience' },
    { value: 'expert', label: 'Expert', description: 'Professional developer/architect' }
  ];

  const tracks = [
    { value: 'ai-ml', label: 'AI & Machine Learning', color: 'bg-blue-500' },
    { value: 'web3', label: 'Web3 & Blockchain', color: 'bg-purple-500' },
    { value: 'sustainability', label: 'Sustainability Tech', color: 'bg-green-500' },
    { value: 'fintech', label: 'FinTech Innovation', color: 'bg-yellow-500' },
    { value: 'open', label: 'Open Innovation', color: 'bg-red-500' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email;
      case 2:
        return formData.skillLevel && formData.track;
      case 3:
        return formData.agreesToTerms;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    // Simulate payment processing
    try {
      // In a real implementation, you would integrate with Stripe or PayPal here
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmissionSuccess(true);
      setCurrentStep(4);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <React.Fragment key={step}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
            step === currentStep ? 'bg-vibe-green text-black' :
            step < currentStep ? 'bg-vibe-green text-black' :
            'bg-gray-600 text-gray-300'
          }`}>
            {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {step < 4 && (
            <div className={`w-16 h-1 ${
              step < currentStep ? 'bg-vibe-green' : 'bg-gray-600'
            }`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  if (submissionSuccess) {
    return (
      <div className="min-h-screen bg-vibe-black text-white">
        <Navigation />
        <div className="pt-24 pb-16 flex items-center justify-center min-h-screen">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div data-aos="fade-up" className="glass-effect p-12 rounded-2xl">
              <div className="w-20 h-20 bg-vibe-green rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-black" />
              </div>
              <h1 className="text-4xl font-mono font-bold mb-6">
                <span className="text-vibe-green">ENROLLMENT</span> <span className="text-white">SUCCESSFUL!</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Welcome to Vibe Coding! You're all set for the hackathon.
              </p>
              <div className="space-y-4 text-left bg-vibe-gray/50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold text-vibe-green">What's Next?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Check your email for confirmation and event details</li>
                  <li>• Join our Discord server for updates and networking</li>
                  <li>• Mark March 15, 2025 on your calendar</li>
                  <li>• Prepare your development environment</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="bg-vibe-green text-black px-8 py-3 rounded-lg font-bold hover:bg-white transition-all duration-300"
                >
                  Join Discord
                </a>
                <a
                  href="/"
                  className="glass-effect px-8 py-3 rounded-lg font-medium hover:bg-vibe-green hover:text-black transition-all duration-300"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-vibe-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-vibe-black to-vibe-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-mono font-bold mb-6">
              <span className="text-vibe-green glow-text">JOIN</span>
              <br />
              <span className="text-white">THE HACKATHON</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Secure your spot in the ultimate 6-hour coding experience
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-12 bg-vibe-gray">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="glass-effect p-8 rounded-2xl">
            {renderStepIndicator()}

            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-mono font-bold text-vibe-green mb-2">
                      Personal Information
                    </h2>
                    <p className="text-gray-300">Tell us about yourself</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-vibe-black border border-gray-600 rounded-lg text-white focus:border-vibe-green focus:outline-none transition-colors"
                          placeholder="John"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 bg-vibe-black border border-gray-600 rounded-lg text-white focus:border-vibe-green focus:outline-none transition-colors"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-vibe-black border border-gray-600 rounded-lg text-white focus:border-vibe-green focus:outline-none transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Team Name (Optional)
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-vibe-black border border-gray-600 rounded-lg text-white focus:border-vibe-green focus:outline-none transition-colors"
                        placeholder="The Code Warriors"
                      />
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      Leave blank if you'll join a team during the event
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2: Technical Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-mono font-bold text-vibe-green mb-2">
                      Technical Profile
                    </h2>
                    <p className="text-gray-300">Help us understand your coding background</p>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-4">
                      Skill Level *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {skillLevels.map((level) => (
                        <label
                          key={level.value}
                          className={`cursor-pointer p-4 border-2 rounded-lg transition-all duration-300 ${
                            formData.skillLevel === level.value
                              ? 'border-vibe-green bg-vibe-green/10'
                              : 'border-gray-600 hover:border-gray-400'
                          }`}
                        >
                          <input
                            type="radio"
                            name="skillLevel"
                            value={level.value}
                            checked={formData.skillLevel === level.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="text-white font-medium">{level.label}</div>
                          <div className="text-sm text-gray-400">{level.description}</div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-4">
                      Preferred Track *
                    </label>
                    <div className="space-y-3">
                      {tracks.map((track) => (
                        <label
                          key={track.value}
                          className={`cursor-pointer p-4 border-2 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                            formData.track === track.value
                              ? 'border-vibe-green bg-vibe-green/10'
                              : 'border-gray-600 hover:border-gray-400'
                          }`}
                        >
                          <input
                            type="radio"
                            name="track"
                            value={track.value}
                            checked={formData.track === track.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 ${track.color} rounded-full`}></div>
                          <div className="text-white font-medium">{track.label}</div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Coding Experience (Optional)
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-vibe-black border border-gray-600 rounded-lg text-white focus:border-vibe-green focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your favorite programming languages, frameworks, or projects..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Payment & Terms */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-mono font-bold text-vibe-green mb-2">
                      Payment & Terms
                    </h2>
                    <p className="text-gray-300">Complete your registration</p>
                  </div>

                  {/* Pricing */}
                  <div className="glass-effect p-6 rounded-lg border border-vibe-green">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">Hackathon Entry</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-vibe-green">$25</div>
                        <div className="text-sm text-gray-400 line-through">$50</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>✓ 6-hour coding experience</p>
                      <p>✓ Lunch and refreshments</p>
                      <p>✓ Mentorship and networking</p>
                      <p>✓ Swag bag and certificates</p>
                      <p>✓ Access to prizes and awards</p>
                    </div>
                    <div className="mt-4 p-3 bg-vibe-green/20 rounded-lg">
                      <p className="text-sm text-vibe-green font-medium">
                        🎉 Early bird pricing - 50% off! Limited time offer.
                      </p>
                    </div>
                  </div>

                  {/* Mock Payment Form */}
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Payment Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 bg-vibe-black border border-gray-600 rounded-lg text-white focus:border-vibe-green focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white font-medium mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 bg-vibe-black border border-gray-600 rounded-lg text-white focus:border-vibe-green focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-white font-medium mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 bg-vibe-black border border-gray-600 rounded-lg text-white focus:border-vibe-green focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-500/20 rounded-lg">
                      <p className="text-sm text-blue-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        This is a demo form. No actual payment will be processed.
                      </p>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreesToTerms"
                        checked={formData.agreesToTerms}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-vibe-green bg-vibe-black border-gray-600 rounded focus:ring-vibe-green focus:ring-2"
                        required
                      />
                      <span className="text-gray-300">
                        I agree to the{' '}
                        <a href="#" className="text-vibe-green hover:underline">Terms of Service</a>{' '}
                        and{' '}
                        <a href="#" className="text-vibe-green hover:underline">Privacy Policy</a>{' '}
                        *
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreesToEmails"
                        checked={formData.agreesToEmails}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-vibe-green bg-vibe-black border-gray-600 rounded focus:ring-vibe-green focus:ring-2"
                      />
                      <span className="text-gray-300">
                        I agree to receive promotional emails and updates about future events
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-600">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    currentStep === 1
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'glass-effect text-white hover:bg-gray-600'
                  }`}
                >
                  Previous
                </button>

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!validateStep(currentStep)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      validateStep(currentStep)
                        ? 'bg-vibe-green text-black hover:bg-white'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!validateStep(3) || isSubmitting}
                    className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                      validateStep(3) && !isSubmitting
                        ? 'bg-vibe-green text-black hover:bg-white hover:scale-105 animate-glow'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Enrollment ($25)'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enrollment;
