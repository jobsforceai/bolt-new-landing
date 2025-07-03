import { Rocket, ArrowRight, Play, Star, StarHalf } from "lucide-react";
import TerminalWithAnim from "./terminal-with-anim";
import { motion } from "framer-motion";
import RotatingText from "./bitsAnimation";
const HomeComponent = () => {
  return (
    <div className="flex px-16 flex-col lg:flex-row items-center justify-between">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-6xl mx-auto mb-20">
            
            
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Your AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0595f6] via-blue-500 to-purple-600 block animate-gradient">
                Career Revolution
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Transform your job search with intelligent Chrome extension or expert human agents. 
              <span className="text-[#0595f6] font-bold">AI Apply to 1000+ jobs</span> with one click, 
              get <span className="text-[#0595f6] font-bold">ATS scores</span> on aedIn, and land your dream career faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button 
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-[#0595f6] to-blue-500 text-white px-6 py-3 rounded-xl text-base font-bold hover:shadow-2xl transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden"
              >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Rocket size={18} className="relative z-10" />
              <span className="relative z-10">Join 5,000+ on Waitlist</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              
              <button className="group border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl text-base font-bold hover:border-[#0595f6] hover:text-[#0595f6] transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm">
              <Play size={18} />
              <span>Watch Demo</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </button>
            </div>
          </div>
        </div> */}

      <div className="relative z-10 w-full max-w-2xl">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight text-center lg:text-left"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
          initial={{ opacity: 0, y: 100, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
          }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your AI-Powered
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0595f6] via-blue-500 to-purple-600 block animate-gradient">
              Career Revolution
            </span>
          </motion.span>
        </motion.h1>

        {/* Subtitle with Rotating Text */}

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 text-center lg:text-left max-w-xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Automate your job search with our intelligent Chrome extension. Apply
          to 1000+ jobs with a single click, get instant ATS scores, and land
          your dream career faster.
        </motion.p>

        {/* CTA Buttons and Social Proof Section - Combined Layout */}
        <motion.div
          className="mb-8 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Button Row - Side by Side */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            {/* Primary CTA */}
            <div className="flex items-center ">
              <a href={`/waitlist`}>
                <button className="cursor-pointer relative px-8 py-4 text-lg font-medium text-white rounded-full transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
                  {/* Main Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-pink-400 rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Subtle Noise Texture */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIC8+PC9zdmc+')] opacity-5 mix-blend-overlay"></div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>

                  {/* Inner Shadow */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"></div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Get Started</span>
                    <motion.svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform group-hover:translate-x-1 transition-transform duration-200"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </motion.svg>
                  </span>

                  {/* Hover Effect - Light Sweep */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/10 to-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_1.5s_ease-in-out_infinite] transform rotate-45"></div>
                  </div>
                </button>
              </a>
            </div>

            {/* 90 Days Challenge Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <a href="/job-guarantee">
                <button className="cursor-pointer relative group px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-amber-500 to-rose-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] overflow-hidden border border-amber-300/30 min-w-[220px]">
                  {/* Animated background layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_12px_rgba(255,255,255,0.3)]"></div>

                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <motion.span
                      className="text-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      🚀
                    </motion.span>
                    <span className="font-semibold tracking-tight">
                      Join our 90-Days Challenge
                    </span>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_1.5s_ease-in-out_infinite] transform rotate-12"></div>
                  </div>
                </button>
              </a>
            </motion.div>
          </div>

          {/* Rating Section - Below Buttons */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md border border-white/30 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 max-w-max">
              {/* Compact Avatars */}
              <div className="flex -space-x-3">
                {[
                  { src: "/models/69.png", bg: "from-blue-400 to-purple-500" },
                  { src: "/models/78.png", bg: "from-green-400 to-blue-500" },
                  { src: "/models/82.png", bg: "from-orange-400 to-red-500" },
                  { src: "/models/86.png", bg: "from-pink-400 to-rose-500" },
                  { src: "/models/79.png", bg: "from-yellow-400 to-pink-400" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-gradient-to-br ${item.bg}`}
                  >
                    <img
                      src={item.src}
                      alt={`User ${i + 1}`}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover "
                    />
                  </div>
                ))}
              </div>

              {/* Rating and Text */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <StarHalf className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium text-slate-600 ml-1">
                    4.5
                  </span>
                </div>
                <span className="text-sm text-slate-500">
                  Trusted by 10k+ students
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className=" flex items-center justify-center">
        <TerminalWithAnim />
      </div>
    </div>
  );
};

export default HomeComponent;
