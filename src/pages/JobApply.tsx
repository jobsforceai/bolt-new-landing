
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  Check,
  Clock,
  DollarSign,
  MapPin,
  Share2,
  Star,
  Target,
  Users,
} from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  posted: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
  applications: string;
}

const JobApply = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState<JobOpening | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchJob(): Promise<void> {
      setLoading(true);
      try {
        const res = await fetch(
          `https://carrer-and-early-signup.vercel.app/jobs/${id}`
        );
        if (!res.ok) {
          throw new Error("Could not load job");
        }
        const job: JobOpening = await res.json();
        setJobData(job);
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Failed to load job details.";
        console.error(message);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchJob();
  }, [id]);


  if (loading || !jobData)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        Loading data...
      </div>
    );

  return (
    <div className="min-h-screen text-gray-800 bg-white relative overflow-hidden">
      {/* Light blur circles */}
      <div className="absolute w-[25rem] h-[25rem] rounded-full bg-[hsl(256,100%,78%)] blur-[150px] top-0 left-0 -translate-x-1/3 -translate-y-1/2" />
      <div className="absolute w-[25rem] h-[25rem] rounded-full bg-[#41E2FF] blur-[150px] bottom-0 right-0 translate-x-1/3 translate-y-1/2" />

      {/* Header */}
      <div className="pt-24 pb-12 relative backdrop-blur-sm bg-white/70">
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/careers"
            className="inline-flex items-center text-[#0595f6] hover:text-[#0170cf] font-semibold mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back to Careers
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {jobData.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#0595f6]" />
              <span className="font-medium text-[#0595f6]">JobsForce.Ai</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-600" />
              <span>{jobData.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <span>{jobData.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-gray-600" />
              <span>{jobData.salary}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span>Posted {jobData.posted}</span>
            <span>•</span>
            <span>{jobData.applications} applications</span>
            <span>•</span>
            <span>{jobData.experience} experience required</span>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => {
                setShowDisclaimer(true);
              }}
              className="text-white rounded-full bg-[linear-gradient(to_right,_#0595f6_0%,_#41E2FF_100%)] px-12 py-4 font-bold text-lg inline-flex items-center shadow-lg transition-transform transform hover:scale-105"
            >
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(window.location.href);
                alert("Job link copied!");
              }}
              className="flex items-center gap-2 px-6 py-4 text-base font-medium text-[#0595f6] border border-[#0595f6]/20 bg-[#0595f6]/5 hover:bg-[#0595f6]/10 rounded-full transition-transform transform hover:scale-105"
            >
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main */}
            <div className="lg:col-span-3 space-y-8">
              {/** About This Role **/}
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#0595f6]/20 shadow-lg shadow-[#0595f6]/10">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-[#0595f6]" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    About This Role
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {jobData.description}
                </p>
              </section>

              {/** Responsibilities **/}
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#0595f6]/20 shadow-lg shadow-[#0595f6]/10">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-[#0595f6]" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Key Responsibilities
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {jobData.responsibilities.map((r: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#0595f6] rounded-full mt-2 flex-shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/** Requirements **/}
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#0595f6]/20 shadow-lg shadow-[#0595f6]/10">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-[#0595f6]" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Requirements
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {jobData.requirements.map((req: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0595f6] flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/** Benefits **/}
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#0595f6]/20 shadow-lg shadow-[#0595f6]/10">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-[#0595f6]" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Benefits & Perks
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {jobData.benefits.map((b: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#41E2FF] rounded-full mt-2 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2 space-y-6">
              {/** Quick Info **/}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#0595f6]/20 shadow-lg shadow-[#0595f6]/10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Info
                </h3>
                <div className="space-y-3 text-gray-700">
                  {[
                    ["Job Type", jobData.type],
                    ["Experience", jobData.experience],
                    ["Salary Range", jobData.salary],
                    ["Applications", jobData.applications],
                  ].map(([label, val]) => (
                    <div key={label as string} className="flex justify-between">
                      <span className="text-gray-600">{label}</span>
                      <span className="font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/** Skills **/}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#0595f6]/20 shadow-lg shadow-[#0595f6]/10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {jobData.skills.map((skill: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#0595f6]/20 text-[#0595f6] rounded-full text-sm font-medium border border-[#0595f6]/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/** Sticky Apply **/}
              <div className="sticky top-6">
                <button
                  onClick={() => setShowDisclaimer(true)}
                  className="w-full text-white rounded-full bg-[linear-gradient(to_right,_#0595f6_0%,_#41E2FF_100%)] px-8 py-4 font-bold text-lg inline-flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <p className="text-gray-600 text-sm mt-3 text-center">
                  One-click apply with your profile
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {showDisclaimer && (
        <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full border border-[#0595f6]/20 shadow-2xl text-center relative">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-700 mb-6">
              We consider your profile data and your primary resume on JobsForce
              for this application. If you want to update your details or upload
              a different resume, please do so before proceeding.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowDisclaimer(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-full transition"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  setShowDisclaimer(false);
                  navigate(`/apply/${id}/form`);
                }}
                className="bg-[#0595f6] hover:bg-[#0170cf] text-white px-6 py-2 rounded-full font-semibold transition"
              >
                Proceed & Apply
              </button>
            </div>
            <button
              onClick={() => setShowDisclaimer(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-gray-800 text-lg"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApply;
