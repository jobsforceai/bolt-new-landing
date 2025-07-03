import React, { useState } from "react";
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
  Lightbulb,
} from "lucide-react";
import HomeComponent from "../components/home-component";
import JobsForcePromo from "../components/JobsForcePromo";

const Home = () => {
  const [jobCount, setJobCount] = useState(10);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const agentPrice = jobCount * 0.5;
  const extensionPrice = 29;

  const handleJobCountChange = (change: number) => {
    const newCount = Math.max(1, Math.min(100, jobCount + change));
    setJobCount(newCount);
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch(
          "https://carrer-and-early-signup.vercel.app/early-apply",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to submit email");
        }
        const data = await response.json();
        console.log("Waitlist submission successful:", data);
      } catch (error) {
        console.error("Error submitting waitlist:", error);
        alert("Failed to submit your email. Please try again later.");
        return;
      }
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="pt-20">
      {/* Revolutionary Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0595f6]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <HomeComponent />
        {/* Enhanced Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
          {[
            {
              icon: Award,
              label: "10,000+ Applications",
              color: "text-[#0595f6]",
            },
            {
              icon: TrendingUp,
              label: "85% Response Rate",
              color: "text-green-500",
            },
            {
              icon: Users,
              label: "2,500+ Users Hired",
              color: "text-blue-500",
            },
            {
              icon: Clock,
              label: "48hr Avg Response",
              color: "text-purple-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-500 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <item.icon className={`${item.color} mb-3 mx-auto`} size={32} />
              <div className="font-bold text-center text-gray-900 text-lg">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Revolutionary Service Cards */}
      <JobsForcePromo />

      {/* Revolutionary Features Section */}

      {/* Success Stories */}

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#0595f6]/10 via-blue-50/50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "10,000+",
                label: "Applications Sent",
                sublabel: "Across all platforms",
              },
              {
                number: "85%",
                label: "Response Rate",
                sublabel: "Industry leading",
              },
              {
                number: "2,500+",
                label: "Users Hired",
                sublabel: "Dream jobs secured",
              },
              {
                number: "48hrs",
                label: "Avg. Response",
                sublabel: "From application",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group hover:scale-110 transition-all duration-500"
              >
                <div className="text-6xl font-black text-[#0595f6] mb-4">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-bold text-xl mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section
        id="waitlist"
        className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0595f6]/10 to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0595f6] to-blue-500"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-3 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-bold mb-10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#0595f6] rounded-full animate-ping"></div>
            <Rocket size={18} />
            Join the Revolution
            <div className="w-2 h-2 bg-[#0595f6] rounded-full animate-ping"></div>
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-10 leading-tight">
            Ready to Transform Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0595f6] to-blue-400 block">
              Job Search Forever?
            </span>
          </h2>

          <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Join over 5,000 ambitious professionals who are already getting more
            interviews, landing better jobs, and accelerating their careers with
            JobsForce.ai
          </p>

          <form
            onSubmit={handleWaitlistSubmit}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your professional email"
                  className="w-full px-8 py-5 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[#0595f6]/50 bg-white/95 backdrop-blur-sm text-xl font-medium"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className={`px-10 py-5 rounded-2xl font-bold transition-all duration-500 text-xl ${
                  isSubmitted
                    ? "bg-green-500 text-white shadow-2xl scale-105"
                    : "bg-gradient-to-r from-[#0595f6] to-blue-500 text-white hover:shadow-2xl hover:scale-110"
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
              { number: "5,000+", label: "Professionals waiting" },
              { number: "Q1 2025", label: "Expected launch" },
              { number: "50% OFF", label: "Early bird pricing" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl font-black text-[#0595f6] mb-3">
                  {item.number}
                </div>
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
