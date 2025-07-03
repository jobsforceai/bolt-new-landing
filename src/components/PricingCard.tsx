import React from "react";
import { CheckCircle, Bot, User, Plus, Minus, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  type: "extension" | "agent";
  title: string;
  price: string;
  priceDescription: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  jobCount?: number;
  agentPrice?: number;
  handleJobCountChange?: (change: number) => void;
  handleJobCountInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleJobCountInputBlur?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  type,
  title,
  price,
  priceDescription,
  features,
  buttonText,
  isPopular = false,
  jobCount,
  agentPrice,
  handleJobCountChange,
  handleJobCountInputChange,
  handleJobCountInputBlur,
}) => {
  const isAgent = type === 'agent';

  return (
    <div className="group relative">
      <div
        className={`absolute inset-0 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 '
        }`}
      ></div>
      <div
        className={`relative rounded-3xl p-12 transition-all duration-500 group-hover:scale-105 ${
          isAgent
            ? 'bg-gradient-to-br from-[#0595f6] to-blue-600 text-white shadow-2xl hover:shadow-3xl'
            : 'bg-white border-2 border-gray-200 hover:border-[#0595f6] hover:shadow-2xl'
        }`}
      >
        {isPopular && (
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-white text-[#0595f6] px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              Most Popular
            </div>
          </div>
        )}
        {!isPopular && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-100 text-gray-600 px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              Self-Service
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div
              className={`p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 ${
                isAgent ? 'bg-white/20 backdrop-blur-sm' : 'bg-gradient-to-br from-[#0595f6] to-blue-500 shadow-lg'
              }`}
            >
              {isAgent ? <User className="text-white" size={32} /> : <Bot className="text-white" size={32} />}
            </div>
            <h3 className={`text-3xl font-black ${!isAgent && 'text-gray-900'}`}>{title}</h3>
          </div>
          <div className="text-right">
            <div className={`text-5xl font-black ${!isAgent && 'text-gray-900'}`}>{price}</div>
            <div className={`${isAgent ? 'opacity-80' : 'text-gray-600'} font-semibold`}>{priceDescription}</div>
          </div>
        </div>

        <ul className="space-y-5 mb-12">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-4">
              <CheckCircle className={`${isAgent ? 'text-white' : 'text-[#0595f6]'} flex-shrink-0`} size={24} />
              <span className={`font-medium text-lg ${!isAgent && 'text-gray-700'}`}>{feature}</span>
            </li>
          ))}
        </ul>

        {type === 'extension' && (
          <div className="bg-gradient-to-r from-[#0595f6]/5 to-blue-500/5 rounded-2xl p-6 mb-8 border border-[#0595f6]/20">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="text-[#0595f6]" size={20} />
              <span className="font-bold text-gray-900">Flexible Subscription</span>
            </div>
            <p className="text-gray-600">No long-term commitments. Cancel anytime.</p>
          </div>
        )}

        {isAgent && handleJobCountChange && handleJobCountInputChange && (
          <div className="bg-gradient-to-br from-blue-400/30 to-purple-400/30 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/30 shadow-2xl">
            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center gap-3 mb-3">
                <span className="text-4xl font-black">${agentPrice?.toFixed(1)}</span>
                <span className="opacity-80 font-semibold">total cost</span>
              </div>
              <div className="font-bold text-lg mb-4">Pay as you go • No commitments</div>
            </div>
            
            <div className="flex items-center justify-center gap-4 bg-white/10 rounded-2xl p-4">
              <button 
                onClick={() => handleJobCountChange(-1)}
                className="bg-white/20 hover:bg-white/30 border border-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Minus size={16} />
              </button>
              <div className="text-center">
                <input
                  type="text"
                  value={jobCount}
                  onChange={handleJobCountInputChange}
                  onBlur={handleJobCountInputBlur}
                  className="text-3xl font-black bg-transparent w-24 text-center focus:outline-none"
                />
                <div className="text-sm opacity-80 font-semibold">job applications</div>
              </div>
              <button 
                onClick={() => handleJobCountChange(1)}
                className="bg-white/20 hover:bg-white/30 border border-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        )}
<Link to="/waitlist">


        <button
          className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
            isAgent
              ? 'bg-white text-[#0595f6] hover:bg-gray-100 shadow-lg hover:shadow-xl'
              : 'border-2 border-[#0595f6] text-[#0595f6] hover:bg-[#0595f6] hover:text-white hover:shadow-xl'
          }`}
        >
          {buttonText}
        </button>
</Link>
      </div>
    </div>
  );
};

export default PricingCard;