import React, { useState } from "react";
import {
  Chrome,
  Zap,
  Target,
  BarChart3,
  FileText,
  Download,
  ArrowRight,
  Users,
  MessageSquare,
  Briefcase,
  Star,
  Clock,
  Plus,
  Minus,
  User,
  Sparkles,
  TrendingUp,
  Shield,
  Rocket,
  Brain,
  CheckCircle,
  Play,
  Award,
  Globe,
  Heart,
  Coffee,
  Headphones,
} from "lucide-react";

const JobsforcePromo = () => {
  const [activeTab, setActiveTab] = useState("extension");
  const [jobCount, setJobCount] = useState(50);
  const extensionPrice = 29;
  const agentPrice = jobCount * 0.5;

  const handleJobCountChange = (delta) => {
    setJobCount(Math.max(5, jobCount + delta));
  };

  const tabs = [
    { id: "extension", label: "Extension", shortLabel: "Chrome", icon: Chrome },
    { id: "agent", label: "Agent", shortLabel: "Human", icon: Users },
    { id: "features", label: "Features", shortLabel: "Features", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white p-2 to-cyan-50 border-t-2 border-slate-200">
      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 mb-8 sm:mb-12 mt-3">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-1 sm:p-2 shadow-xl border border-white/20">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 py-3 sm:py-4 px-2 sm:px-4 mx-1 sm:mx-2 rounded-xl font-bold text-sm sm:text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg transform scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <tab.icon size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 mb-12 sm:mb-20">
        {activeTab === "extension" && (
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 sm:p-4 rounded-2xl shadow-lg">
                    <Chrome className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-900">
                      Chrome Extension
                    </h3>
                    <p className="text-base sm:text-xl text-slate-600">
                      AI-Powered Automation
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8">
                  Our Chrome extension is like having a personal job-hunting
                  robot that never sleeps. It automatically finds, matches, and
                  applies to jobs while you focus on what matters most -
                  preparing for interviews and landing your dream role.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-4 sm:p-6 border border-cyan-100">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 shadow-lg">
                    <Zap className="text-white" size={20} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    Lightning Fast
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600">
                    Apply to 100+ jobs in the time it takes to submit one
                    application manually
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 sm:p-6 border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 shadow-lg">
                    <Brain className="text-white" size={20} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    AI Matching
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600">
                    97% accuracy in matching your skills to the perfect job
                    opportunities
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 sm:p-6 border border-purple-100">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 shadow-lg">
                    <Shield className="text-white" size={20} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    Secure & Safe
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600">
                    Enterprise-grade security protects your data and maintains
                    your privacy
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 sm:p-6 border border-emerald-100">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 shadow-lg">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    Smart Analytics
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600">
                    Real-time insights and performance tracking to optimize your
                    job search
                  </p>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-slate-50 via-cyan-50 to-blue-50 rounded-3xl p-6 sm:p-8 border-2 border-cyan-100">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-2 sm:gap-3 mb-4">
                    <span className="text-4xl sm:text-6xl font-black text-slate-900">
                      ${extensionPrice}
                    </span>
                    <span className="text-base sm:text-xl text-slate-600 font-semibold">
                      per month
                    </span>
                  </div>
                  <div className="text-cyan-600 font-bold text-sm sm:text-xl mb-4 flex items-center justify-center gap-2">
                    <CheckCircle size={20} />
                    Cancel anytime • No hidden fees
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white py-3 sm:py-4 px-8 sm:px-12 rounded-2xl font-bold text-base sm:text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    Join waitlist
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl">
              <img src="/models/rm.png" alt="Human Agent" className="object-cover" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "agent" && (
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 sm:p-4 rounded-2xl shadow-lg">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-black text-slate-900">
                      Human Agent
                    </h3>
                    <p className="text-base sm:text-xl text-slate-600">
                      Elite Career Professionals
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8">
                  When you need the human touch, our elite career professionals
                  step in. They craft personalized strategies, write compelling
                  cover letters, and provide one-on-one coaching to maximize
                  your success rate.
                </p>
              </div>

              {/* Services */}
              <div className="space-y-4">
                {[
                  {
                    icon: MessageSquare,
                    title: "Personalized Cover Letters",
                    desc: "Crafted by industry experts who understand your target role",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Rocket,
                    title: "Strategic Job Targeting",
                    desc: "Maximum success probability through data-driven targeting",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: Headphones,
                    title: "Interview Coaching",
                    desc: "1-on-1 preparation sessions with seasoned professionals",
                    color: "from-emerald-500 to-teal-500",
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance Analytics",
                    desc: "Weekly strategy optimization based on real results",
                    color: "from-orange-500 to-red-500",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`bg-gradient-to-r ${service.color} p-2 sm:p-3 rounded-xl shadow-lg`}
                      >
                        <service.icon className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">
                          {service.title}
                        </h4>
                        <p className="text-sm sm:text-base text-slate-600">{service.desc}</p>
                      </div>
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Pricing */}
              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-6 sm:p-8 border-2 border-purple-100">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2 sm:gap-3 mb-4">
                    <span className="text-4xl sm:text-6xl font-black text-slate-900">
                      ${agentPrice.toFixed(0)}
                    </span>
                    <span className="text-base sm:text-xl text-slate-600 font-semibold">
                      total
                    </span>
                  </div>
                  <div className="text-purple-600 font-bold text-sm sm:text-xl mb-6 flex items-center justify-center gap-2">
                    <Star size={20} />
                    <span className="text-center">$0.50 per application • Pay as you succeed</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl mb-6">
                  <div className="flex items-center justify-center gap-4 sm:gap-8">
                    <button
                      onClick={() => handleJobCountChange(-5)}
                      className="bg-gradient-to-r from-slate-100 to-slate-200 hover:from-purple-100 hover:to-pink-100 border-2 border-slate-200 hover:border-purple-300 p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:scale-110"
                    >
                      <Minus size={20} />
                    </button>
                    <div className="text-center px-4 sm:px-6">
                      <div className="text-3xl sm:text-5xl font-black text-slate-900 mb-2">
                        {jobCount}
                      </div>
                      <div className="text-sm sm:text-lg text-slate-600 font-semibold">
                        applications
                      </div>
                    </div>
                    <button
                      onClick={() => handleJobCountChange(5)}
                      className="bg-gradient-to-r from-slate-100 to-slate-200 hover:from-purple-100 hover:to-pink-100 border-2 border-slate-200 hover:border-purple-300 p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:scale-110"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 text-white py-3 sm:py-4 px-8 sm:px-12 rounded-2xl font-bold text-base sm:text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Join waitlist
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl">
              <img src="/models/hum.png" alt="Human Agent" className="object-cover" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                title: "AI-Powered Automation",
                desc: "Advanced machine learning algorithms that understand job requirements and match them perfectly to your profile",
                color: "from-cyan-400 to-blue-500",
              },
              {
                icon: Brain,
                title: "Intelligent Matching",
                desc: "97% accuracy rate in job matching using natural language processing and career data analysis",
                color: "from-blue-500 to-purple-500",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Your data is protected with bank-level security protocols and privacy-first architecture",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: TrendingUp,
                title: "Real-Time Analytics",
                desc: "Track your application success rate, response times, and optimize your job search strategy",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: Globe,
                title: "Global Job Coverage",
                desc: "Access to jobs from major platforms worldwide including LinkedIn, Indeed, Glassdoor and more",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Heart,
                title: "Personalized Experience",
                desc: "Customized job recommendations based on your career goals, salary expectations, and preferences",
                color: "from-pink-500 to-rose-500",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-r ${feature.color} p-3 sm:p-4 rounded-2xl w-fit mb-4 sm:mb-6 shadow-lg`}
                >
                  <feature.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {feature.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsforcePromo;


