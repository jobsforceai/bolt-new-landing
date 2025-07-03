import { Rocket, ArrowRight, Play } from 'lucide-react'
import TerminalWithAnim from './terminal-with-anim'

const HomeComponent = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between'>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-6xl mx-auto mb-20">
            
            
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Your AI-Powered
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#41e3fe] via-blue-500 to-purple-600 block animate-gradient">
                Career Revolution
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Transform your job search with intelligent Chrome extension or expert human agents. 
              <span className="text-[#41e3fe] font-bold">AI Apply to 1000+ jobs</span> with one click, 
              get <span className="text-[#41e3fe] font-bold">ATS scores</span> on LinkedIn, and land your dream career faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button 
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-[#41e3fe] to-blue-500 text-white px-6 py-3 rounded-xl text-base font-bold hover:shadow-2xl transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden"
              >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Rocket size={18} className="relative z-10" />
              <span className="relative z-10">Join 5,000+ on Waitlist</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              
              <button className="group border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl text-base font-bold hover:border-[#41e3fe] hover:text-[#41e3fe] transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm">
              <Play size={18} />
              <span>Watch Demo</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </button>
            </div>
          </div>
        </div>
        <TerminalWithAnim />
        
    </div>
  )
}

export default HomeComponent