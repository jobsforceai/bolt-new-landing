import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Briefcase,
  Heart,
  Coffee,
  Zap,
  Target,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Globe,
  Laptop,
  Calendar,
  TrendingUp,
  Star,
  Building,
  Rocket
} from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Product', 'Design', 'Marketing', 'Sales', 'Operations'];

  const jobs = [
    {
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$150,000 - $200,000',
      description: 'Build the next generation of AI-powered job search tools. Work with React, Node.js, and cutting-edge AI technologies.',
      requirements: ['5+ years full-stack experience', 'React/Node.js expertise', 'AI/ML experience preferred']
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$160,000 - $220,000',
      description: 'Develop and optimize our AI algorithms for job matching, resume optimization, and application automation.',
      requirements: ['PhD/MS in AI/ML or equivalent', 'Python/TensorFlow experience', 'NLP expertise']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      salary: '$140,000 - $180,000',
      description: 'Lead product strategy and roadmap for our Chrome extension and human agent services.',
      requirements: ['5+ years product management', 'B2C product experience', 'Data-driven mindset']
    },
    {
      title: 'Senior UX Designer',
      department: 'Design',
      location: 'Los Angeles, CA / Remote',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'Design intuitive and beautiful user experiences that help people find their dream jobs.',
      requirements: ['5+ years UX design', 'Figma expertise', 'User research experience']
    },
    {
      title: 'Growth Marketing Manager',
      department: 'Marketing',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      salary: '$100,000 - $140,000',
      description: 'Drive user acquisition and growth through innovative marketing strategies and campaigns.',
      requirements: ['3+ years growth marketing', 'Performance marketing', 'Analytics expertise']
    },
    {
      title: 'Enterprise Sales Director',
      department: 'Sales',
      location: 'Chicago, IL / Remote',
      type: 'Full-time',
      salary: '$130,000 - $170,000 + Commission',
      description: 'Lead enterprise sales efforts and build relationships with Fortune 500 companies.',
      requirements: ['7+ years B2B sales', 'Enterprise sales experience', 'SaaS background']
    }
  ];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness stipend'
    },
    {
      icon: Laptop,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and home office setup budget'
    },
    {
      icon: TrendingUp,
      title: 'Equity & Growth',
      description: 'Competitive equity package and unlimited learning & development budget'
    },
    {
      icon: Calendar,
      title: 'Time Off',
      description: 'Unlimited PTO, sabbatical program, and company-wide mental health days'
    },
    {
      icon: Coffee,
      title: 'Perks & Benefits',
      description: 'Catered meals, gym membership, and annual team retreats'
    },
    {
      icon: Rocket,
      title: 'Career Acceleration',
      description: 'Fast-track career growth with mentorship and leadership opportunities'
    }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technology to solve real problems'
    },
    {
      icon: Users,
      title: 'People-Centric',
      description: 'Every decision we make puts our users and team members at the center'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We set ambitious goals and execute with precision to deliver exceptional outcomes'
    },
    {
      icon: Award,
      title: 'Excellence Always',
      description: 'We maintain the highest standards in everything we do, from code to customer service'
    }
  ];

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
              <Building size={18} />
              Join Our Mission
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
              Build the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#41e3fe] via-blue-500 to-purple-600 block">
                Career Success
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join our world-class team of innovators, engineers, and visionaries who are revolutionizing 
              how people find and land their dream jobs with cutting-edge AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button 
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-[#41e3fe] to-blue-500 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-500 hover:scale-110 flex items-center justify-center gap-4"
              >
                <Briefcase size={24} />
                <span>View Open Positions</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button className="group border-3 border-gray-200 text-gray-700 px-12 py-5 rounded-2xl text-xl font-bold hover:border-[#41e3fe] hover:text-[#41e3fe] transition-all duration-500 hover:scale-110 flex items-center justify-center gap-4 bg-white/80 backdrop-blur-sm">
                <Globe size={24} />
                <span>Our Culture</span>
              </button>
            </div>

            {/* Company Stats */}
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '50+', label: 'Team Members', icon: Users },
                { number: '$25M', label: 'Series A Funding', icon: TrendingUp },
                { number: '5,000+', label: 'Users Served', icon: Star },
                { number: '15+', label: 'Countries', icon: Globe }
              ].map((stat, index) => (
                <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <stat.icon className="text-[#41e3fe] mb-3 mx-auto" size={32} />
                  <div className="text-3xl font-black text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Our <span className="text-[#41e3fe]">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-[#41e3fe]/10 to-blue-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                  <value.icon className="text-[#41e3fe]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              World-Class <span className="text-[#41e3fe]">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our team's success, growth, and well-being with comprehensive benefits and perks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-[#41e3fe]/10 to-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="text-[#41e3fe]" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Open <span className="text-[#41e3fe]">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join our growing team and help us revolutionize the future of job searching
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    selectedDepartment === dept
                      ? 'bg-[#41e3fe] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#41e3fe]/10 hover:text-[#41e3fe]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div key={index} className="group bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className="bg-[#41e3fe]/10 text-[#41e3fe] px-3 py-1 rounded-full text-sm font-semibold">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign size={16} />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <span key={reqIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:ml-8">
                    <button className="w-full lg:w-auto bg-gradient-to-r from-[#41e3fe] to-blue-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                      <span>Apply Now</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No positions available in this department currently.</p>
              <p className="text-gray-500 mt-2">Check back soon or view all positions!</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Our Hiring <span className="text-[#41e3fe]">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed a transparent, efficient process to help you showcase your best self
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Application Review',
                description: 'We review your application and portfolio within 48 hours'
              },
              {
                step: '02',
                title: 'Initial Screen',
                description: '30-minute conversation with our talent team about your background'
              },
              {
                step: '03',
                title: 'Technical/Role Interview',
                description: 'Deep dive into your skills with the hiring manager and team members'
              },
              {
                step: '04',
                title: 'Final Interview',
                description: 'Culture fit conversation with leadership and offer discussion'
              }
            ].map((process, index) => (
              <div key={index} className="group text-center hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-[#41e3fe] to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:shadow-lg transition-all duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#41e3fe] to-blue-500 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl font-black mb-8">
            Ready to Join Our Mission?
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            Help us build the future of career success and make a meaningful impact on millions of lives
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#41e3fe] px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 justify-center">
              <Briefcase size={24} />
              View All Positions
              <ArrowRight size={24} />
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-[#41e3fe] transition-all duration-300 hover:scale-105 flex items-center gap-3 justify-center">
              <Heart size={24} />
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;