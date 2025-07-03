import React, { useState } from 'react';
import {
  Chrome,
  Users,
  CheckCircle,
  ArrowRight,
  Plus,
  Minus,
  Zap,
  Shield,
  Target,
  Mail,
  Star,
  TrendingUp,
  Clock,
  Bot,
  User,
  Briefcase,
  FileText,
  MessageSquare,
  BarChart3,
  Award,
  Sparkles,
  Rocket,
  Globe,
  Download,
  Play,
  Activity,
  Layers,
  Brain,
  Gauge,
  Cpu,
  Database,
  Network,
  Eye,
  Lightbulb
} from 'lucide-react';
import HomeComponent from '../components/home-component';

const Home = () => {
  const [jobCount, setJobCount] = useState(10);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const agentPrice = jobCount * 0.5;
  const extensionPrice = 29;

  const handleJobCountChange = (change: number) => {
    const newCount = Math.max(1, Math.min(100, jobCount + change));
    setJobCount(newCount);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="pt-20">
      {/* Revolutionary Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#41e3fe]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <HomeComponent />
        {/* Enhanced Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
          {[
            { icon: Award, label: '10,000+ Applications', color: 'text-[#41e3fe]' },
            { icon: TrendingUp, label: '85% Response Rate', color: 'text-green-500' },
            { icon: Users, label: '2,500+ Users Hired', color: 'text-blue-500' },
            { icon: Clock, label: '48hr Avg Response', color: 'text-purple-500' }
          ].map((item, index) => (
            <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <item.icon className={`${item.color} mb-3 mx-auto`} size={32} />
              <div className="font-bold text-gray-900 text-lg">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Revolutionary Service Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-gray-900 mb-6">
              Choose Your <span className="text-[#41e3fe]">Success Path</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI automation or expert human precision - both designed to accelerate your career
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Revolutionary Chrome Extension Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#41e3fe]/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">

                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#41e3fe]/10 to-blue-500/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full translate-y-16 -translate-x-16 group-hover:scale-125 transition-transform duration-1000 delay-200"></div>

                {/* Revolutionary Browser Interface Mockup */}
                <div className="relative mb-10">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                    {/* Browser Chrome */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-700 rounded-lg px-4 py-2 ml-4">
                        <div className="text-gray-300 text-sm">linkedin.com/jobs</div>
                      </div>
                    </div>

                    {/* LinkedIn Interface */}
                    <div className="bg-white rounded-xl p-6 relative">
                      <img
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="LinkedIn Jobs Interface"
                        className="w-full h-48 object-cover rounded-lg opacity-90"
                      />

                      {/* AI Extension Overlay */}
                      <div className="absolute inset-6 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-[#41e3fe]/20 shadow-2xl">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#41e3fe] to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                              <Brain className="text-white" size={20} />
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-gray-900 flex items-center gap-2">
                                JobsForce AI Extension
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              </div>
                              <div className="text-sm text-gray-600">AI applying to Software Engineer roles...</div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-[#41e3fe]">ATS: 94%</div>
                              <div className="text-xs text-gray-500">Match Score</div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">AI Fill Progress</span>
                              <span className="text-[#41e3fe] font-semibold">847/1000 jobs</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-gradient-to-r from-[#41e3fe] to-blue-500 h-2 rounded-full animate-pulse" style={{ width: '84.7%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#41e3fe] to-blue-500 p-5 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <Chrome className="text-white" size={36} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                      <Zap className="text-white" size={12} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-gray-900 mb-2">AI Chrome Extension</h3>
                    <p className="text-gray-600 font-semibold text-lg">Revolutionary automation at your fingertips</p>
                  </div>
                </div>

                {/* Enhanced Features */}
                <div className="space-y-4 mb-10">
                  {[
                    { icon: Zap, title: 'One-Click AI Apply to 1000+ Jobs', desc: 'Lightning-fast bulk applications' },
                    { icon: Gauge, title: 'ATS Score on All LinkedIn Jobs', desc: 'Real-time compatibility scoring' },
                    { icon: Brain, title: 'AI Fill Forms Intelligently', desc: 'Smart auto-completion technology' },
                    { icon: Target, title: 'Precision Job Matching', desc: 'Advanced AI-powered targeting' }
                  ].map((feature, index) => (
                    <div key={index} className="group/item flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-2xl hover:from-[#41e3fe]/5 hover:to-blue-500/5 transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-[#41e3fe]/20">
                      <div className="bg-[#41e3fe]/10 p-3 rounded-xl group-hover/item:bg-[#41e3fe]/20 transition-colors">
                        <feature.icon className="text-[#41e3fe]" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">{feature.title}</div>
                        <div className="text-sm text-gray-600">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-3xl p-8 mb-8 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#41e3fe]/10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="text-center relative">
                    <div className="flex items-baseline justify-center gap-3 mb-3">
                      <span className="text-5xl font-black text-gray-900">${extensionPrice}</span>
                      <span className="text-gray-600 font-semibold">one-time</span>
                    </div>
                    <div className="text-[#41e3fe] font-bold text-lg mb-2">Lifetime Access • No Subscriptions</div>
                    <div className="text-gray-600">Unlimited applications • Free updates forever</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#41e3fe] to-blue-500 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3 group/btn relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  <Download size={24} className="relative z-10" />
                  <span className="relative z-10">Get Extension Now</span>
                  <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform relative z-10" />
                </button>
              </div>
            </div>

            {/* Revolutionary Human Agent Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">

                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-20 -translate-x-20 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-full translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-1000 delay-200"></div>

                {/* Revolutionary Agent Dashboard */}
                <div className="relative mb-10">
                  <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-white font-semibold">Agent Dashboard - Live</span>
                      </div>
                      <div className="text-blue-300 text-sm">Real-time Activity</div>
                    </div>

                    {/* Agent Interface */}
                    <div className="bg-white rounded-xl p-6 relative">
                      <img
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Professional Agent Team"
                        className="w-full h-48 object-cover rounded-lg"
                      />

                      {/* Agent Activity Overlay */}
                      <div className="absolute inset-6 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-blue-500/20 shadow-2xl">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="relative">
                              <img
                                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
                                alt="Agent Sarah"
                                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                              />
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-gray-900 flex items-center gap-2">
                                Sarah M. - Your Dedicated Agent
                                <Activity className="text-blue-500" size={16} />
                              </div>
                              <div className="text-sm text-gray-600">Applied to 12 jobs today • 3 responses received</div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                              <span className="text-gray-700">Crafting personalized cover letter for Meta...</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700">Interview scheduled with Google for tomorrow</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-5 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110">
                      <Users className="text-white" size={36} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                      <User className="text-white" size={12} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-gray-900 mb-2">Human Agent Service</h3>
                    <p className="text-gray-600 font-semibold text-lg">Expert humans working for your success</p>
                  </div>
                </div>

                {/* Enhanced Features */}
                <div className="space-y-4 mb-10">
                  {[
                    { icon: MessageSquare, title: 'Personalized Cover Letters', desc: 'Tailored for each application' },
                    { icon: Briefcase, title: 'Strategic Job Matching', desc: 'Expert timing and targeting' },
                    { icon: Star, title: 'Interview Preparation', desc: 'Coaching and practice sessions' },
                    { icon: BarChart3, title: 'Daily Progress Reports', desc: 'Detailed insights and analytics' }
                  ].map((feature, index) => (
                    <div key={index} className="group/item flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50/50 rounded-2xl hover:from-blue-500/5 hover:to-purple-500/5 transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-blue-500/20">
                      <div className="bg-blue-500/10 p-3 rounded-xl group-hover/item:bg-blue-500/20 transition-colors">
                        <feature.icon className="text-blue-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 mb-1">{feature.title}</div>
                        <div className="text-sm text-gray-600">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dynamic Pricing Calculator */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 mb-8 border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full -translate-y-12 -translate-x-12"></div>
                  <div className="text-center mb-6 relative">
                    <div className="flex items-baseline justify-center gap-3 mb-3">
                      <span className="text-5xl font-black text-gray-900">${agentPrice.toFixed(1)}</span>
                      <span className="text-gray-600 font-semibold">total cost</span>
                    </div>
                    <div className="text-blue-600 font-bold text-lg mb-2">$0.50 per job application • Pay as you go</div>
                  </div>

                  <div className="flex items-center justify-center gap-8 bg-white rounded-2xl p-6 shadow-lg">
                    <button
                      onClick={() => handleJobCountChange(-5)}
                      className="bg-gradient-to-r from-gray-100 to-blue-100 hover:from-blue-100 hover:to-purple-100 border border-gray-200 hover:border-blue-300 p-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                    >
                      <Minus size={20} />
                    </button>
                    <div className="text-center">
                      <div className="text-3xl font-black text-gray-900">{jobCount}</div>
                      <div className="text-sm text-gray-600 font-semibold">job applications</div>
                    </div>
                    <button
                      onClick={() => handleJobCountChange(5)}
                      className="bg-gradient-to-r from-gray-100 to-blue-100 hover:from-blue-100 hover:to-purple-100 border border-gray-200 hover:border-blue-300 p-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3 group/btn relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                  <Users size={24} className="relative z-10" />
                  <span className="relative z-10">Hire Your Agent</span>
                  <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform relative z-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Features Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#41e3fe]/10 to-blue-500/10 text-[#41e3fe] px-6 py-3 rounded-full text-sm font-bold mb-8 border border-[#41e3fe]/20">
              <Lightbulb size={18} />
              Revolutionary Technology
            </div>
            <h2 className="text-6xl font-black text-gray-900 mb-8">
              The Future of <span className="text-[#41e3fe]">Job Applications</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Combining cutting-edge AI automation with human expertise to revolutionize how you find and land your dream job
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast AI Apply',
                description: 'Apply to 1000+ relevant jobs in minutes with our revolutionary one-click technology. Our AI handles the repetitive work while you focus on interview preparation.',
                gradient: 'from-[#41e3fe] to-blue-500'
              },
              {
                icon: Target,
                title: 'Precision ATS Scoring',
                description: 'Get real-time ATS compatibility scores on every LinkedIn job. Advanced algorithms analyze requirements and match them with your skills for maximum success.',
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                icon: Shield,
                title: 'Enterprise-Grade Security',
                description: 'Your personal data is protected with bank-level encryption. We never store sensitive information and follow strict privacy protocols.',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group text-center hover:scale-110 transition-all duration-500">
                <div className={`bg-gradient-to-br ${feature.gradient}/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 border border-gray-100`}>
                  <feature.icon className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} size={40} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-gray-900 mb-8">Success Stories</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Real results from real professionals who transformed their job search with JobsForce.ai
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: 'Sarah Chen',
                role: 'Software Engineer',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
                quote: 'Got 3 interviews in the first week using the Chrome extension. The AI Apply feature saved me hours of repetitive work!',
                result: 'Landed job at Google • $180K salary'
              },
              {
                name: 'Marcus Johnson',
                role: 'Product Manager',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
                quote: 'The human agent service was incredible. They crafted personalized cover letters that got me noticed by top companies.',
                result: 'Landed job at Meta • $220K salary'
              },
              {
                name: 'Emily Rodriguez',
                role: 'UX Designer',
                image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
                quote: 'Applied to 50+ jobs in one day with the extension. The ATS scoring was so precise - every application was relevant to my skills.',
                result: 'Landed job at Airbnb • $160K salary'
              }
            ].map((story, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#41e3fe]"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{story.name}</h4>
                    <p className="text-gray-600">{story.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                  "{story.quote}"
                </p>
                <div className="text-[#41e3fe] font-bold text-lg">
                  {story.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#41e3fe]/10 via-blue-50/50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10,000+', label: 'Applications Sent', sublabel: 'Across all platforms' },
              { number: '85%', label: 'Response Rate', sublabel: 'Industry leading' },
              { number: '2,500+', label: 'Users Hired', sublabel: 'Dream jobs secured' },
              { number: '48hrs', label: 'Avg. Response', sublabel: 'From application' }
            ].map((stat, index) => (
              <div key={index} className="group hover:scale-110 transition-all duration-500">
                <div className="text-6xl font-black text-[#41e3fe] mb-4">{stat.number}</div>
                <div className="text-gray-700 font-bold text-xl mb-2">{stat.label}</div>
                <div className="text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#41e3fe]/10 to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#41e3fe] to-blue-500"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-3 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-bold mb-10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#41e3fe] rounded-full animate-ping"></div>
            <Rocket size={18} />
            Join the Revolution
            <div className="w-2 h-2 bg-[#41e3fe] rounded-full animate-ping"></div>
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-10 leading-tight">
            Ready to Transform Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#41e3fe] to-blue-400 block">
              Job Search Forever?
            </span>
          </h2>

          <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Join over 5,000 ambitious professionals who are already getting more interviews,
            landing better jobs, and accelerating their careers with JobsForce.ai
          </p>

          <form onSubmit={handleWaitlistSubmit} className="max-w-2xl mx-auto mb-16">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your professional email"
                  className="w-full px-8 py-5 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[#41e3fe]/50 bg-white/95 backdrop-blur-sm text-xl font-medium"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className={`px-10 py-5 rounded-2xl font-bold transition-all duration-500 text-xl ${isSubmitted
                    ? 'bg-green-500 text-white shadow-2xl scale-105'
                    : 'bg-gradient-to-r from-[#41e3fe] to-blue-500 text-white hover:shadow-2xl hover:scale-110'
                  }`}
              >
                {isSubmitted ? (
                  <div className="flex items-center gap-3">
                    <CheckCircle size={24} />
                    Welcome Aboard!
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Mail size={24} />
                    Join Waitlist
                  </div>
                )}
              </button>
            </div>
          </form>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '5,000+', label: 'Professionals waiting' },
              { number: 'Q1 2025', label: 'Expected launch' },
              { number: '50% OFF', label: 'Early bird pricing' }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-black text-[#41e3fe] mb-3">{item.number}</div>
                <div className="text-gray-300 text-lg">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;