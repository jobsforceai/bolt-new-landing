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
import { Link } from "react-router-dom";

const JobsForcePromo = () => {
  const [activeTab, setActiveTab] = useState("extension");
  const [jobCount, setJobCount] = useState(50);
  const extensionPrice = 29;
  const agentPrice = jobCount * 0.5;

  const handleJobCountChange = (delta) => {
    setJobCount(Math.max(5, jobCount + delta));
  };

  const tabs = [
    { id: "extension", label: "Chrome Extension", icon: Chrome },
    { id: "agent", label: "Human Agent", icon: Users },
    { id: "features", label: "Features", icon: Star },
    { id: "success", label: "Success Stories", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white p-2 to-cyan-50 border-t-2 border-slate-200">
      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-12 mt-3">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-xl border border-white/20">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-4 mx-2 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? " bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg transform scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <tab.icon size={24} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        {activeTab === "extension" && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-4 rounded-2xl shadow-lg">
                    <Chrome className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-slate-900">
                      Chrome Extension
                    </h3>
                    <p className="text-xl text-slate-600">
                      Revolutionary AI-Powered Automation
                    </p>
                  </div>
                </div>

                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Our Chrome extension is like having a personal job-hunting
                  robot that never sleeps. It automatically finds, matches, and
                  applies to jobs while you focus on what matters most -
                  preparing for interviews and landing your dream role.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-xl w-fit mb-4 shadow-lg">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Lightning Fast
                  </h4>
                  <p className="text-slate-600">
                    Apply to 100+ jobs in the time it takes to submit one
                    application manually
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl w-fit mb-4 shadow-lg">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    AI Matching
                  </h4>
                  <p className="text-slate-600">
                    97% accuracy in matching your skills to the perfect job
                    opportunities
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl w-fit mb-4 shadow-lg">
                    <Shield className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Secure & Safe
                  </h4>
                  <p className="text-slate-600">
                    Enterprise-grade security protects your data and maintains
                    your privacy
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl w-fit mb-4 shadow-lg">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Smart Analytics
                  </h4>
                  <p className="text-slate-600">
                    Real-time insights and performance tracking to optimize your
                    job search
                  </p>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-slate-50 via-cyan-50 to-blue-50 rounded-3xl p-8 border-2 border-cyan-100">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-3 mb-4">
                    <span className="text-6xl font-black text-slate-900">
                      ${extensionPrice}
                    </span>
                    <span className="text-xl text-slate-600 font-semibold">
                      per month
                    </span>
                  </div>
                  <div className="text-cyan-600 font-bold text-xl mb-4 flex items-center justify-center gap-2">
                    <CheckCircle size={24} />
                    Cancel anytime • No hidden fees
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white py-4 px-12 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <a href="#waitlist">Join waitlist</a>
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl  shadow-xl">
                <img src="./models/rm.png" alt="extension preview"  className="object-contain"/>
              </div>
            </div>
          </div>
        )}

        {activeTab === "agent" && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                    <Users className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-slate-900">
                      Human Agent
                    </h3>
                    <p className="text-xl text-slate-600">
                      Elite Career Professionals
                    </p>
                  </div>
                </div>

                <p className="text-lg text-slate-700 leading-relaxed mb-8">
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
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`bg-gradient-to-r ${service.color} p-3 rounded-xl shadow-lg`}
                      >
                        <service.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-slate-600">{service.desc}</p>
                      </div>
                      <CheckCircle className="text-green-500" size={24} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Pricing */}
              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-100">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-3 mb-4">
                    <span className="text-6xl font-black text-slate-900">
                      ${agentPrice.toFixed(0)}
                    </span>
                    <span className="text-xl text-slate-600 font-semibold">
                      total investment
                    </span>
                  </div>
                  <div className="text-purple-600 font-bold text-xl mb-6 flex items-center justify-center gap-2">
                    <Star size={24} />
                    $0.50 per premium application • Pay as you succeed
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl mb-6">
                  <div className="flex items-center justify-center gap-8">
                    <button
                      onClick={() => handleJobCountChange(-5)}
                      className="bg-gradient-to-r from-slate-100 to-slate-200 hover:from-purple-100 hover:to-pink-100 border-2 border-slate-200 hover:border-purple-300 p-4 rounded-2xl transition-all duration-300 hover:scale-110"
                    >
                      <Minus size={24} />
                    </button>
                    <div className="text-center px-6">
                      <div className="text-5xl font-black text-slate-900 mb-2">
                        {jobCount}
                      </div>
                      <div className="text-lg text-slate-600 font-semibold">
                        premium applications
                      </div>
                    </div>
                    <button
                      onClick={() => handleJobCountChange(5)}
                      className="bg-gradient-to-r from-slate-100 to-slate-200 hover:from-purple-100 hover:to-pink-100 border-2 border-slate-200 hover:border-purple-300 p-4 rounded-2xl transition-all duration-300 hover:scale-110"
                    >
                      <Plus size={24} />
                    </button>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 text-white py-4 px-12 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <a href="#waitlist">Join waitlist</a>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl  shadow-xl">
               <img src="./models/hum.png" alt="Human Agent" className="object-cover" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="grid lg:grid-cols-3 gap-8">
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
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl w-fit mb-6 shadow-lg`}
                >
                  <feature.icon className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "success" && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-black text-slate-900 mb-4">
                Success Stories
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See how JobsForce has transformed careers and helped thousands
                land their dream jobs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Software Engineer",
                  company: "Google",
                  increase: "40%",
                  time: "2 weeks",
                  avatar: "👩‍💻",
                },
                {
                  name: "Michael Rodriguez",
                  role: "Product Manager",
                  company: "Microsoft",
                  increase: "65%",
                  time: "3 weeks",
                  avatar: "👨‍💼",
                },
                {
                  name: "Emily Johnson",
                  role: "Data Scientist",
                  company: "Netflix",
                  increase: "55%",
                  time: "1 week",
                  avatar: "👩‍🔬",
                },
              ].map((story, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{story.avatar}</div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      {story.name}
                    </h4>
                    <p className="text-lg text-slate-600 mb-1">{story.role}</p>
                    <p className="text-cyan-500 font-bold text-xl">
                      {story.company}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-black text-cyan-500 mb-1">
                          {story.increase}
                        </div>
                        <div className="text-sm text-slate-600">
                          Salary Increase
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-blue-500 mb-1">
                          {story.time}
                        </div>
                        <div className="text-sm text-slate-600">
                          Time to Hire
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 italic">
                    "JobsForce completely transformed my job search. The AI
                    found opportunities I never would have discovered, and the
                    human agent helped me craft the perfect application
                    strategy."
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white">
              <h3 className="text-4xl font-black mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of professionals who've accelerated their career
                with JobsForce
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobsForcePromo;
