import React, { useState } from 'react';
import { 
  Chrome, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Plus, 
  Minus,
  Bot,
  User,
  Star,
  Zap,
  Target,
  Shield,
  Award,
  Sparkles
} from 'lucide-react';

const Pricing = () => {
  const [jobCount, setJobCount] = useState(10);
  const agentPrice = jobCount * 0.5;
  const extensionPrice = 29;

  const handleJobCountChange = (change: number) => {
    const newCount = Math.max(1, Math.min(100, jobCount + change));
    setJobCount(newCount);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0595f6]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0595f6]/10 to-blue-500/10 text-[#0595f6] px-6 py-3 rounded-full text-sm font-bold mb-8 border border-[#0595f6]/20">
              <Sparkles size={18} />
              Transparent Pricing
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black text-gray-900 mb-8 leading-tight">
              Choose Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0595f6] via-blue-500 to-purple-600 block">
                Success Path
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Whether you prefer AI automation or human expertise, we have the perfect solution for your career goals
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Chrome Extension Pricing */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0595f6]/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-12 hover:border-[#0595f6] hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-100 text-gray-600 px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                    Self-Service
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-[#0595f6] to-blue-500 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Bot className="text-white" size={32} />
                    </div>
                    <h3 className="text-4xl font-black text-gray-900">Chrome Extension</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-black text-gray-900">${extensionPrice}</div>
                    <div className="text-gray-600 font-semibold">one-time payment</div>
                  </div>
                </div>
                
                <ul className="space-y-5 mb-12">
                  {[
                    'One-Click AI Apply to 1000+ Jobs',
                    'Real-Time ATS Scoring on LinkedIn',
                    'AI Fill Forms Technology',
                    'Advanced Analytics Dashboard',
                    'Resume Optimization Engine',
                    'Lifetime Updates & Support'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <CheckCircle className="text-[#0595f6] flex-shrink-0" size={24} />
                      <span className="text-gray-700 font-medium text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gradient-to-r from-[#0595f6]/5 to-blue-500/5 rounded-2xl p-6 mb-8 border border-[#0595f6]/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="text-[#0595f6]" size={20} />
                    <span className="font-bold text-gray-900">Lifetime Value</span>
                  </div>
                  <p className="text-gray-600">No monthly fees, no hidden costs. Pay once, use forever with free updates.</p>
                </div>
                
                <button className="w-full border-2 border-[#0595f6] text-[#0595f6] py-5 rounded-2xl font-bold text-lg hover:bg-[#0595f6] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Get Extension Now
                </button>
              </div>
            </div>

            {/* Human Agent Pricing */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#0595f6] to-blue-600 text-white rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white text-[#0595f6] px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <User className="text-white" size={32} />
                    </div>
                    <h3 className="text-4xl font-black">Human Agent Service</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-black">$0.50</div>
                    <div className="opacity-80 font-semibold">per application</div>
                  </div>
                </div>
                
                <ul className="space-y-5 mb-12">
                  {[
                    'Expert Humans Handle All Applications',
                    'Personalized Cover Letters for Each Role',
                    'Strategic Job Matching & Timing',
                    'Interview Preparation & Coaching',
                    'Daily Progress Reports & Insights',
                    '24/7 Dedicated Agent Support'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <CheckCircle className="text-white flex-shrink-0" size={24} />
                      <span className="font-medium text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-3 mb-3">
                      <span className="text-4xl font-black">${agentPrice.toFixed(1)}</span>
                      <span className="opacity-80 font-semibold">total cost</span>
                    </div>
                    <div className="font-bold text-lg mb-4">Pay as you go • No commitments</div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-8 bg-white/10 rounded-2xl p-6">
                    <button 
                      onClick={() => handleJobCountChange(-5)}
                      className="bg-white/20 hover:bg-white/30 border border-white/30 p-4 rounded-2xl transition-all duration-300 hover:scale-110"
                    >
                      <Minus size={20} />
                    </button>
                    <div className="text-center">
                      <div className="text-3xl font-black">{jobCount}</div>
                      <div className="text-sm opacity-80 font-semibold">job applications</div>
                    </div>
                    <button 
                      onClick={() => handleJobCountChange(5)}
                      className="bg-white/20 hover:bg-white/30 border border-white/30 p-4 rounded-2xl transition-all duration-300 hover:scale-110"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
                
                <button className="w-full bg-white text-[#0595f6] py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Hire Your Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Detailed <span className="text-[#0595f6]">Comparison</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare features and benefits to choose the perfect solution for your needs
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-blue-50/50">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-bold text-gray-900">Features</th>
                    <th className="px-8 py-6 text-center text-lg font-bold text-gray-900">Chrome Extension</th>
                    <th className="px-8 py-6 text-center text-lg font-bold text-gray-900">Human Agent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feature: 'Application Speed', extension: 'Lightning Fast', agent: 'Strategic Timing' },
                    { feature: 'Personalization', extension: 'AI-Powered', agent: 'Human Expertise' },
                    { feature: 'Cover Letters', extension: 'Template-Based', agent: 'Fully Customized' },
                    { feature: 'ATS Scoring', extension: '✓', agent: '✓' },
                    { feature: 'Interview Prep', extension: '✗', agent: '✓' },
                    { feature: 'Daily Reports', extension: 'Analytics Dashboard', agent: 'Personal Reports' },
                    { feature: 'Support', extension: 'Email Support', agent: '24/7 Dedicated Agent' },
                    { feature: 'Success Rate', extension: '85%', agent: '92%' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-8 py-6 text-center text-gray-700">{row.extension}</td>
                      <td className="px-8 py-6 text-center text-gray-700">{row.agent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-gray-900 mb-8">
              Frequently Asked <span className="text-[#0595f6]">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Is there a free trial available?',
                answer: 'We offer a 7-day money-back guarantee for the Chrome extension and a 3-application trial for the Human Agent service.'
              },
              {
                question: 'How does the ATS scoring work?',
                answer: 'Our AI analyzes job descriptions and compares them with your profile to provide a compatibility score from 0-100, helping you focus on the best opportunities.'
              },
              {
                question: 'Can I switch between services?',
                answer: 'Absolutely! You can use both services simultaneously or switch between them based on your needs and preferences.'
              },
              {
                question: 'What happens to my data?',
                answer: 'We prioritize your privacy. Data is processed in real-time and never stored permanently. We comply with all major privacy regulations including GDPR and CCPA.'
              },
              {
                question: 'How quickly will I see results?',
                answer: 'Most users see increased interview requests within the first week. The Chrome extension provides immediate results, while Human Agents typically show results within 3-5 days.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0595f6] to-blue-500 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl font-black mb-8">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            Join thousands of professionals who are already landing their dream jobs
          </p>
          <button className="bg-white text-[#0595f6] px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
            <Star size={24} />
            Join Waitlist Now
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;