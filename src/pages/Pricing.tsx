import React, { useState } from 'react';
import { 
  ArrowRight, 
  Star,
  Sparkles
} from 'lucide-react';
import PricingCard from '../components/PricingCard';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [jobCount, setJobCount] = useState('10');
  const agentPrice = (parseInt(jobCount, 10) || 0) * 0.5;
  const extensionPrice = 29;

  const handleJobCountChange = (change: number) => {
    const currentCount = parseInt(jobCount, 10) || 0;
    const newCount = Math.max(1, Math.min(100, currentCount + change));
    setJobCount(String(newCount));
  };

  const handleJobCountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setJobCount(value);
    }
  };

  const handleJobCountInputBlur = () => {
    let numValue = parseInt(jobCount, 10);
    if (isNaN(numValue) || numValue < 1) {
      numValue = 1;
    }
    if (numValue > 100) {
      numValue = 100;
    }
    setJobCount(String(numValue));
  };

  const extensionFeatures = [
    'One-Click AI Apply to 1000+ Jobs',
    'Real-Time ATS Scoring on LinkedIn',
    'AI Fill Forms Technology',
    'Advanced Analytics Dashboard',
    'Resume Optimization Engine',
    'Lifetime Updates & Support'
  ];

  const agentFeatures = [
    'Expert Humans Handle All Applications',
    'Personalized Cover Letters for Each Role',
    'Strategic Job Matching & Timing',
    'Interview Preparation & Coaching',
    'Daily Progress Reports & Insights',
    '24/7 Dedicated Agent Support'
  ];

  return (
    <div className="pt-16">
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
              Whether you prefer AI automation or human expertise, we have the
              perfect solution for your career goals
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            <PricingCard
              type="extension"
              title="Chrome Extension"
              price={`$${extensionPrice}`}
              priceDescription="per month"
              features={extensionFeatures}
              buttonText="Get Extension Now"
            />

            <PricingCard
              type="agent"
              title="Human Agent Service"
              price="$0.50"
              priceDescription="per application"
              features={agentFeatures}
              buttonText="Hire Your Agent"
              isPopular={true}
              jobCount={jobCount}
              agentPrice={agentPrice}
              handleJobCountChange={handleJobCountChange}
              handleJobCountInputChange={handleJobCountInputChange}
              handleJobCountInputBlur={handleJobCountInputBlur}
            />

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
              Compare features and benefits to choose the perfect solution for
              your needs
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-blue-50/50">
                  <tr>
                    <th className="px-8 py-6 text-left text-lg font-bold text-gray-900">
                      Features
                    </th>
                    <th className="px-8 py-6 text-center text-lg font-bold text-gray-900">
                      Chrome Extension
                    </th>
                    <th className="px-8 py-6 text-center text-lg font-bold text-gray-900">
                      Human Agent
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      feature: "Application Speed",
                      extension: "Lightning Fast",
                      agent: "Strategic Timing",
                    },
                    {
                      feature: "Personalization",
                      extension: "AI-Powered",
                      agent: "Human Expertise",
                    },
                    {
                      feature: "Cover Letters",
                      extension: "Template-Based",
                      agent: "Fully Customized",
                    },
                    { feature: "ATS Scoring", extension: "✓", agent: "✓" },
                    { feature: "Interview Prep", extension: "✗", agent: "✓" },
                    {
                      feature: "Daily Reports",
                      extension: "Analytics Dashboard",
                      agent: "Personal Reports",
                    },
                    {
                      feature: "Support",
                      extension: "Email Support",
                      agent: "24/7 Dedicated Agent",
                    },
                    { feature: "Success Rate", extension: "85%", agent: "92%" },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-8 py-6 font-semibold text-gray-900">
                        {row.feature}
                      </td>
                      <td className="px-8 py-6 text-center text-gray-700">
                        {row.extension}
                      </td>
                      <td className="px-8 py-6 text-center text-gray-700">
                        {row.agent}
                      </td>
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
                question: "Is there a free trial available?",
                answer:
                  "We offer a 7-day money-back guarantee for the Chrome extension and a 3-application trial for the Human Agent service.",
              },
              {
                question: "How does the ATS scoring work?",
                answer:
                  "Our AI analyzes job descriptions and compares them with your profile to provide a compatibility score from 0-100, helping you focus on the best opportunities.",
              },
              {
                question: "Can I switch between services?",
                answer:
                  "Absolutely! You can use both services simultaneously or switch between them based on your needs and preferences.",
              },
              {
                question: "What happens to my data?",
                answer:
                  "We prioritize your privacy. Data is processed in real-time and never stored permanently. We comply with all major privacy regulations including GDPR and CCPA.",
              },
              {
                question: "How quickly will I see results?",
                answer:
                  "Most users see increased interview requests within the first week. The Chrome extension provides immediate results, while Human Agents typically show results within 3-5 days.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
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
            Join thousands of professionals who are already landing their dream
            jobs
          </p>
          <Link to="/waitlist">
            <button className="bg-white/95 text-[#0595f6] px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-xl hover:bg-white transition-all duration-300 flex items-center gap-3 mx-auto">
              <Sparkles size={24} />
              Join Waitlist Now
              <ArrowRight size={24} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
