import React from 'react';
import { 
  Chrome, 
  Users, 
  Zap, 
  Target, 
  Shield, 
  Brain,
  Gauge,
  MessageSquare,
  BarChart3,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Cpu,
  Database,
  Network,
  Eye,
  Lightbulb,
  Activity,
  Award,
  Clock,
  FileText
} from 'lucide-react';

const Features = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#41e3fe]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#41e3fe]/10 to-blue-500/10 text-[#41e3fe] px-6 py-3 rounded-full text-sm font-bold mb-8 border border-[#41e3fe]/20">
              <Lightbulb size={18} />
              Revolutionary Features
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
              Cutting-Edge
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#41e3fe] via-blue-500 to-purple-600 block">
                AI Technology
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover the revolutionary features that make JobsForce.ai the most advanced job search platform in the world
            </p>
          </div>
        </div>
      </section>

      {/* Chrome Extension Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-[#41e3fe] to-blue-500 p-4 rounded-2xl shadow-lg">
                <Chrome className="text-white" size={32} />
              </div>
              <h2 className="text-5xl font-black text-gray-900">Chrome Extension Features</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary AI-powered automation that transforms how you apply to jobs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'One-Click AI Apply to 1000+ Jobs',
                description: 'Revolutionary bulk application technology that applies to hundreds of relevant positions with a single click',
                gradient: 'from-[#41e3fe] to-blue-500'
              },
              {
                icon: Gauge,
                title: 'Real-Time ATS Scoring',
                description: 'Get instant compatibility scores for every LinkedIn job, ensuring maximum application success rates',
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                icon: Brain,
                title: 'AI Fill Forms Intelligently',
                description: 'Advanced AI technology that intelligently fills out job application forms with perfect accuracy',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Target,
                title: 'Precision Job Matching',
                description: 'Smart algorithms analyze job requirements and match them perfectly with your skills and experience',
                gradient: 'from-pink-500 to-red-500'
              },
              {
                icon: BarChart3,
                title: 'Advanced Analytics Dashboard',
                description: 'Comprehensive tracking and analytics to monitor your application success and optimize your strategy',
                gradient: 'from-red-500 to-orange-500'
              },
              {
                icon: FileText,
                title: 'Dynamic Resume Optimization',
                description: 'Automatically optimize your resume for each specific role to maximize ATS compatibility',
                gradient: 'from-orange-500 to-yellow-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className={`bg-gradient-to-br ${feature.gradient}/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Agent Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                <Users className="text-white" size={32} />
              </div>
              <h2 className="text-5xl font-black text-gray-900">Human Agent Service</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert human professionals dedicated to accelerating your career success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'Personalized Cover Letters',
                description: 'Expert-crafted, personalized cover letters for each application that highlight your unique value proposition',
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                icon: Target,
                title: 'Strategic Job Matching',
                description: 'Human expertise in identifying the perfect roles that align with your career goals and skill set',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Star,
                title: 'Interview Preparation',
                description: 'Comprehensive interview coaching and preparation sessions to maximize your success rate',
                gradient: 'from-pink-500 to-red-500'
              },
              {
                icon: Activity,
                title: 'Daily Progress Reports',
                description: 'Detailed daily reports on application progress, responses, and strategic recommendations',
                gradient: 'from-red-500 to-orange-500'
              },
              {
                icon: Award,
                title: 'Career Strategy Consulting',
                description: 'Professional career guidance and strategic planning to accelerate your professional growth',
                gradient: 'from-orange-500 to-yellow-500'
              },
              {
                icon: Clock,
                title: '24/7 Dedicated Support',
                description: 'Round-the-clock support from your dedicated agent team for any questions or concerns',
                gradient: 'from-yellow-500 to-green-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className={`bg-gradient-to-br ${feature.gradient}/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Powered by <span className="text-[#41e3fe]">Advanced Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge AI and machine learning technologies for unparalleled performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Cpu,
                title: 'Advanced AI Engine',
                description: 'Powered by state-of-the-art machine learning algorithms'
              },
              {
                icon: Database,
                title: 'Big Data Analytics',
                description: 'Processing millions of job postings for optimal matching'
              },
              {
                icon: Network,
                title: 'Cloud Infrastructure',
                description: 'Scalable, secure, and lightning-fast global network'
              },
              {
                icon: Eye,
                title: 'Computer Vision',
                description: 'Advanced form recognition and intelligent data extraction'
              }
            ].map((tech, index) => (
              <div key={index} className="group text-center hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-[#41e3fe]/10 to-blue-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                  <tech.icon className="text-[#41e3fe]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-[#41e3fe] to-blue-500 p-4 rounded-2xl shadow-lg">
                <Shield className="text-white" size={32} />
              </div>
              <h2 className="text-5xl font-black">Enterprise-Grade Security</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your data security and privacy are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Bank-Level Encryption',
                description: 'All data is encrypted with AES-256 encryption, the same standard used by banks and government agencies'
              },
              {
                icon: Eye,
                title: 'Zero Data Storage',
                description: 'We never store your personal information. All data is processed in real-time and immediately discarded'
              },
              {
                icon: CheckCircle,
                title: 'GDPR Compliant',
                description: 'Fully compliant with GDPR, CCPA, and other international privacy regulations'
              }
            ].map((security, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="bg-[#41e3fe]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <security.icon className="text-[#41e3fe]" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{security.title}</h3>
                <p className="text-gray-300 leading-relaxed">{security.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#41e3fe] to-blue-500 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl font-black mb-8">
            Ready to Experience the Future?
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            Join thousands of professionals who are already transforming their careers
          </p>
          <button className="bg-white text-[#41e3fe] px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
            <Sparkles size={24} />
            Join Waitlist Now
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Features;