

import React from 'react';
import { motion } from 'framer-motion';
import { User, FileText, Edit, CheckCircle, Star, Briefcase } from 'lucide-react';

// --- Enhanced Card Components ---

// 1. User Details Card
const UserDetailsCard = () => (
    <motion.div 
        className="backdrop-blur-xl bg-white/80 rounded-3xl p-6 border border-blue-200/80 h-full flex flex-col justify-center  overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex items-center gap-4">
            <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 20 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white"
            >
                <User size={24} />
            </motion.div>
            <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">Fetching Details</h3>
                <p className="text-sm text-gray-500">Locating your profile...</p>
            </div>
        </div>
        <div className="w-full bg-blue-100 rounded-full h-2.5 mt-4 overflow-hidden relative">
            <motion.div 
                className="bg-blue-500 h-full absolute top-0"
                initial={{ x: '-100%', width: '10%' }}
                animate={{ x: ['-100%', '200%'], width: ['10%', '40%', '10%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.2 }}
            />
        </div>
    </motion.div>
);

// 2. Resume Card
const ResumeCard = () => (
    <motion.div 
        className="backdrop-blur-xl bg-white/80 rounded-3xl p-6 border border-purple-200/80 h-full flex items-center justify-between  overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center text-white relative">
            <FileText size={32} />
            <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-white/50"
                animate={{ y: [0, 64, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
        <div className="flex-1 ml-5 text-right">
            <h3 className="text-lg font-bold text-gray-800">Analyzing Resume</h3>
            <p className="text-sm text-gray-500">Checking for keywords...</p>
        </div>
    </motion.div>
);

// 3. Auto Form Filling Card
const AutoFormFilling = () => (
    <motion.div 
        className="backdrop-blur-xl bg-white/80 rounded-3xl p-4 border border-teal-200/80 h-full flex flex-col justify-center "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white">
                <Edit size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Auto-filling Form</h3>
        </div>
        <div className="space-y-1.5">
            {[0.9, 0.8, 0.7].map((width, i) => (
                <div key={i} className="w-full bg-gray-200 rounded-md h-3.5 overflow-hidden">
                    <motion.div 
                        className="bg-teal-500 h-full rounded-md relative"
                        initial={{ width: '0%' }}
                        animate={{ width: `${width * 100}%` }}
                        transition={{ duration: 1, delay: i * 0.2 + 0.3, ease: 'easeOut' }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: i * 0.2 + 0.5 }}
                        />
                    </motion.div>
                </div>
            ))}
        </div>
    </motion.div>
);

// 4. Congratulations Card
const CongratsCard = () => {
    const colors = ["#41E2FF", "#41A1FF", "#8A41FF", "#E841FF"];
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="relative backdrop-blur-xl shadow-sm bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-4 border border-white/30 h-full flex flex-col items-center justify-center  overflow-hidden"
        >
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        backgroundColor: colors[i % colors.length],
                        width: Math.random() * 8 + 4,
                        height: Math.random() * 8 + 4,
                    }}
                    initial={{ opacity: 0, scale: 0, x: '50%', y: '50%' }}
                    animate={{ 
                        opacity: [0, 1, 0], 
                        scale: 1,
                        x: `${Math.random() * 200 - 100}%`,
                        y: `${Math.random() * 200 - 100}%`,
                    }}
                    transition={{ duration: 1.5, delay: 0.5 + Math.random() * 0.5, ease: 'easeOut' }}
                />
            ))}
            <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white mb-2"
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 15 }}
            >
                <CheckCircle size={28} />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800">Applied!</h3>
            <p className="text-sm text-gray-600">Your profile is on its way.</p>
        </motion.div>
    );
};

// --- Main Component ---

const steps = [
    { type: 'job', title: "Software Engineer", details: "Full-time, NY" },
    { type: 'user' },
    { type: 'resume' },
    { type: 'form' },
    { type: 'congrats' },
];

const CARD_HEIGHT = 140; 
const STEP_DURATION_MS = 2200; // Unified duration

const RightAnim1 = () => {
    const [step, setStep] = React.useState(0);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setStep(prev => (prev + 1) % steps.length);
        }, STEP_DURATION_MS);
        return () => clearTimeout(timeout);
    }, [step]);

    const getCardComponent = (item: (typeof steps)[0], idx: number) => {
        switch (item.type) {
            case 'job':
                return <JobCard key={idx} title={item.title ?? ''} details={item.details ?? ''} />;
            case 'user':
                return <UserDetailsCard key={idx} />;
            case 'resume':
                return <ResumeCard key={idx} />;
            case 'form':
                return <AutoFormFilling key={idx} />;
            case 'congrats':
                return <CongratsCard key={idx} />;
            default:
                return null;
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[420px]">
            <div className="relative w-80 h-[420px] overflow-hidden" style={{ perspective: '1000px' }}>
                <motion.div
                    className="absolute w-full"
                    animate={{
                        y: -step * CARD_HEIGHT + (420 / 2) - (CARD_HEIGHT / 2),
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 18,
                    }}
                >
                    {steps.map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            className="w-full"
                            style={{ height: CARD_HEIGHT }}
                            animate={{ 
                                scale: step === idx ? 1 : 0.85,
                                opacity: Math.abs(step - idx) < 3 ? 1 : 0,
                            }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                        >
                            {getCardComponent(item, idx)}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

// Job Card (Slightly tweaked for consistency)
type JobCardProps = {
    title: string;
    details: string;
};

const JobCard = ({ title, details }: JobCardProps) => (
    <div className="backdrop-blur-xl bg-white/90 rounded-3xl p-5 border border-gray-200/80 h-full flex flex-col justify-center  overflow-hidden">
        <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                <Briefcase size={22} />
            </div>
            <div className="flex-1">
                <h3 className="text-black text-md font-bold leading-tight">{title}</h3>
                <p className="text-sm text-gray-500">Innovate Tech Inc.</p>
            </div>
        </div>
        <p className="text-xs text-gray-600 my-2.5">
            Seeking a passionate engineer to build next-gen features...
        </p>
        <div className="flex items-center gap-2">
            {details.split(',').map((detail, i) => (
                <span key={i} className="text-xs font-semibold text-gray-700 bg-gray-200/80 px-2.5 py-1 rounded-full">
                    {detail.trim()}
                </span>
            ))}
        </div>
    </div>
);

export default RightAnim1;