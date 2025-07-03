import React, { useState } from "react";
import {
  CheckCircle,
  Mail,
  Rocket,
  Users,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <div className="pt-16">
      <section
        id="waitlist"
        className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden min-h-screen flex items-center"
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
          
          {/* Filler content to make the page look less empty */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-8 text-white">Why Join the Waitlist?</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/5 p-6 rounded-2xl">
                <h4 className="text-2xl font-bold text-[#0595f6] mb-3">Exclusive Early Access</h4>
                <p className="text-gray-300">Be the first to experience the future of job hunting. Get a head start on the competition.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl">
                <h4 className="text-2xl font-bold text-[#0595f6] mb-3">Founder's Pricing</h4>
                <p className="text-gray-300">Lock in a special 50% discount for life. This offer is only for our early supporters.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl">
                <h4 className="text-2xl font-bold text-[#0595f6] mb-3">Shape the Future</h4>
                <p className="text-gray-300">Your feedback will directly influence our development and help us build the best platform for you.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl">
                <h4 className="text-2xl font-bold text-[#0595f6] mb-3">Community Access</h4>
                <p className="text-gray-300">Join a private community of ambitious professionals and get exclusive content and networking opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Waitlist;
