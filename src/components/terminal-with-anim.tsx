import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useRef, useEffect } from "react";
import RightAnim1 from "./right-anim1";

gsap.registerPlugin(ScrollTrigger);

const commands = [
  { text: "Finding jobs ✔︎" },
  { text: "Fetching Details ✔︎" },
  { text: "Fetching Resume ✔︎" },
  { text: "Applying ✔︎" },
  { text: "Applied Successfully ✔︎" },
];

export default function TerminalWithAnim() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const terminalBlockRef = useRef<HTMLDivElement | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const STEP_DURATION_MS = 2200; // Unified duration

  // Step progression on a fixed timer
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStep(prev => (prev + 1) % commands.length);
    }, STEP_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [step]);
  
  // Typewriter effect, synced with step duration
  useEffect(() => {
    setTyped('');
    const current = commands[step].text;
    const typeDuration = STEP_DURATION_MS * 0.5; // Use 50% of step time for typing
    const typingInterval = typeDuration / current.length;
    
    let i = 0;
    const interval = setInterval(() => {
      setTyped(current.slice(0, i + 1));
      i++;
      if (i === current.length) clearInterval(interval);
    }, typingInterval);
    return () => clearInterval(interval);
  }, [step]);

  // GSAP animation for the terminal block
  useEffect(() => {
    const terminalBlock = terminalBlockRef.current;
    if (!terminalBlock) return;
    gsap.to(terminalBlock, {
      duration: 1,
      scrollTrigger: {
        trigger: terminalBlock,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reset",
      },
      y: 0,
      ease: "power2.out",
    });
  }, [step]);

  return (
    <div
      className="flex w-full min-h-[350px] items-center justify-center animate-float "
      style={{
        perspective: 1200,
      }}
    >
      <div
        className="flex flex-col lg:flex-row items-center justify-center gap-2 w-full max-w-5xl"
        style={{
          transform: isMobile ? 'none' : 'translateX(50px) rotateX(5deg) rotateZ(2deg) scale(0.9)',
        }}
      >
        {/* Terminal block with floating animation */}
        <div
          className="rounded-2xl bg-black/70 backdrop-blur-md p-0 shadow-2xl border border-gray-700/50 overflow-hidden"
          ref={terminalBlockRef}
          style={{
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.20)',
            minWidth: 350,
          }}
        >
          {/* Terminal header with traffic lights */}
          <div className="flex items-center h-8 px-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2 border border-[#e0443e]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2 border border-[#dea123]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#13a10e]" />
            <span className="ml-4 text-xs text-gray-400 font-medium select-none">AI Apply Terminal</span>
          </div>
          <div className="w-auto rounded-b-2xl bg-black/70 p-6 font-mono text-base text-gray-200 h-[180px] flex flex-col">
            <div className="commands-container min-h-[24px] space-y-1">
              {commands.map((command, idx) => {
          if (idx < step) {
            // Already completed commands
            return (
              <div key={idx}>
                <span className="text-green-400">●</span>{' '}
                <span>{command.text}</span>
              </div>
            );
          }
          if (idx === step) {
            // Current command with typewriter effect
            return (
              <div key={idx}>
                <span className="text-green-400">●</span>{' '}
                <span>
            {typed}
            <span className="animate-pulse text-gray-200">|</span>
                </span>
              </div>
            );
          }
          // Future commands: don't render
          return null;
              })}
            </div>
          </div>
        </div>

        {/* Dotted SVG line connecting the two sections */}
        {/* <div className="hidden lg:flex items-center justify-center relative h-full" style={{ minWidth: 60 }}>
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 right-0 mx-auto">
            <line
              x1="30"
              y1="10"
              x2="30"
              y2="110"
              stroke="#BDBDBD"
              strokeWidth="3"
              strokeDasharray="8 8"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </div> */}

        {/* Right side animation with floating animation */}
        <div className="flex-1 flex items-center justify-center min-h-[120px]">
          <RightAnim1 />
        </div>
      </div>
    </div>
  );
}
