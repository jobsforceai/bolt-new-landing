import React from 'react';
import { motion } from 'framer-motion';

// Skeleton Loader Component
type SkeletonProps = {
    height?: number | string;
    width?: number | string;
    className?: string;
};

const Skeleton = ({ height = 20, width = '100%', className = '' }: SkeletonProps) => (
    <div
        className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded ${className}`}
        style={{ height, width }}
    />
);

// Job Card
type JobCardProps = {
    title: string;
    details: string;
};

const JobCard = ({ title, details }: JobCardProps) => (
    <div className="backdrop-blur-md bg-white/80 rounded-3xl p-6 mb-4 border border-white/20 min-h-[90px] flex flex-col justify-center">
        <h3 className="text-black text-lg font-semibold mb-1">{title}</h3>
        <p className="text-black/80 text-sm">{details}</p>
    </div>
);

// User Details Skeleton Card
const UserDetailsCard = () => (
    <div className="backdrop-blur-md bg-white/80 rounded-3xl p-6 mb-4 border border-white/20 min-h-[90px] flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-2">
            <Skeleton width={40} height={40} className="rounded-full" />
            <div>
                <Skeleton width={100} height={12} className="mb-1" />
                <Skeleton width={60} height={10} />
            </div>
        </div>
        <Skeleton width="80%" height={10} className="mb-1" />
        <Skeleton width="60%" height={10} />
        <div className="mt-2 text-xs text-gray-400">Loading user details...</div>
    </div>
);

// Resume Skeleton Card
const ResumeCard = () => (
    <div className="backdrop-blur-md bg-white/80 rounded-3xl p-6 mb-4 border border-white/20 min-h-[120px] flex flex-col justify-center">
        <div className="mb-2">
            <Skeleton width="40%" height={14} className="mb-2" />
            <Skeleton width="60%" height={10} className="mb-1" />
            <Skeleton width="90%" height={10} className="mb-1" />
            <Skeleton width="80%" height={10} className="mb-1" />
            <Skeleton width="70%" height={10} />
        </div>
        <div className="mt-2 text-xs text-gray-400">Fetching resume...</div>
    </div>
);

// Auto Form Filling Animation
const AutoFormFilling = () => (
    <div className="backdrop-blur-md bg-white/80 rounded-3xl p-6 mb-4 border border-white/20 min-h-[120px] flex flex-col justify-center">
        <div className="mb-2 text-black font-semibold">Auto-filling Application Form</div>
        <div className="space-y-2">
            <Skeleton width="90%" height={12} />
            <Skeleton width="80%" height={12} />
            <Skeleton width="70%" height={12} />
            <Skeleton width="60%" height={12} />
        </div>
        <div className="mt-2 text-xs text-gray-400">Applying...</div>
    </div>
);

// Congratulations Card
const CongratsCard = () => (
    <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        className="backdrop-blur-md bg-emerald-100/90 rounded-3xl p-8 border border-emerald-400/30 min-h-[120px] flex flex-col items-center justify-center"
    >
        <div className="text-4xl mb-2">🎉</div>
        <div className="text-2xl font-bold text-emerald-700 mb-1">Congratulations!</div>
        <div className="text-lg text-emerald-600"> jobs applied successfully</div>
    </motion.div>
);

const steps = [
    { type: 'job', title: "Software Engineer", details: "Full-time, NY" },
    { type: 'job', title: "Accountant", details: "Full-time, Berlin" },
    // User details skeleton
    { type: 'user' },
    // Resume skeleton
    { type: 'resume' },
    // Auto form filling
    { type: 'form' },
    // Congrats
    { type: 'congrats' },
];

const CARD_HEIGHT = 110; 
const ANIMATION_DURATION = 1;

const RightAnim1 = () => {
    const [step, setStep] = React.useState(0);

    React.useEffect(() => {
        if (step < steps.length - 1) {
            const timeout = setTimeout(() => setStep(step + 1), ANIMATION_DURATION * 1000);
            return () => clearTimeout(timeout);
        }
    }, [step]);

    return (
        <div className="flex items-center justify-center min-h-[420px]">
            <div className="relative w-80 h-[420px] overflow-hidden">
                {/* Scrolling container */}
                <motion.div
                    className="absolute w-full"
                    animate={{
                        y: -step * CARD_HEIGHT,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 18,
                    }}
                >
                    {steps.map((item, idx) => {
                        if (item.type === 'job')
                            return <JobCard key={idx} title={item.title ?? ''} details={item.details ?? ''} />;
                        if (item.type === 'user')
                            return <UserDetailsCard key={idx} />;
                        if (item.type === 'resume')
                            return <ResumeCard key={idx} />;
                        if (item.type === 'form')
                            return <AutoFormFilling key={idx} />;
                        if (item.type === 'congrats')
                            return <CongratsCard key={idx} />;
                        return null;
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default RightAnim1;