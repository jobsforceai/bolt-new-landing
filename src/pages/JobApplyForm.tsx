
import React, { useState, FormEvent, useCallback } from "react";
import {
  Phone,
  MapPin,
  ArrowRight,
  Link as LinkIcon,
  ChevronLeft,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

export default function JobApplyForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState<string | undefined>(undefined);
  const [driveLink, setDriveLink] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !location || !contact || !driveLink) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!driveLink.includes("drive.google.com")) {
      alert("Please provide a valid Google Drive link.");
      return;
    }

    setSubmitting(true);
    try {
      const formData = {
        jobId: id,
        name: fullName,
        email,
        phone: contact,
        resume: driveLink,
        location,
      };

      const res = await fetch(
        `https://carrer-and-early-signup.vercel.app/apply-job`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error(`Error ${res.status}`);

      alert("Application submitted successfully!");
      setFullName("");
      setEmail("");
      setLocation("");
      setContact("");
      setDriveLink("");
      navigate(`/careers`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Submission failed.";
      alert(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate(`/apply/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 relative overflow-hidden">
      <div className="absolute w-[30rem] h-[30rem] rounded-full bg-[hsl(256,100%,95%)] blur-[100px] top-0 left-0 -translate-x-1/3 -translate-y-1/2" />
      <div className="absolute w-[30rem] h-[30rem] rounded-full bg-[#e1f7ff] blur-[100px] bottom-0 right-0 translate-x-1/3 translate-y-1/2" />

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-2xl">
        <button
          onClick={handleBack}
          className="flex items-center cursor-pointer text-[#0595f6] hover:text-[#0474c4] mb-6 transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Job Details
        </button>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2 text-gray-900 bg-clip-text bg-gradient-to-r from-[#0595f6] to-[#41E2FF]">
            Join Our Team
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Fill out the form below to apply for the position. We'll get
            back to you soon.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 shadow-xl shadow-[#0595f6]/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block mb-2 text-gray-700 font-medium">
                Full Name<span className="text-[#0595f6] ml-1">*</span>
              </label>
              <input
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.currentTarget.value)}
                placeholder="John Doe"
                className="w-full h-11 bg-gray-50 border border-gray-200 rounded-lg px-4 text-gray-900 placeholder-gray-400 focus:border-[#0595f6] focus:ring-1 focus:ring-[#0595f6]/20 transition-all duration-200"
              />
            </div>

            <div className="col-span-1">
              <label className="block mb-2 text-gray-700 font-medium">
                Email Address<span className="text-[#0595f6] ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                placeholder="you@example.com"
                className="w-full h-11 bg-gray-50 border border-gray-200 rounded-lg px-4 text-gray-900 placeholder-gray-400 focus:border-[#0595f6] focus:ring-1 focus:ring-[#0595f6]/20 transition-all duration-200"
              />
            </div>

            <div className="col-span-1">
              <label className="mb-2 text-gray-700 font-medium flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#0595f6]" />
                Location<span className="text-[#0595f6] ml-1">*</span>
              </label>
              <input
                name="location"
                value={location}
                onChange={(e) => setLocation(e.currentTarget.value)}
                placeholder="City, Country"
                className="w-full h-11 bg-gray-50 border border-gray-200 rounded-lg px-4 text-gray-900 placeholder-gray-400 focus:border-[#0595f6] focus:ring-1 focus:ring-[#0595f6]/20 transition-all duration-200"
              />
            </div>

            <div className="col-span-1">
              <label className="mb-2 text-gray-700 font-medium flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#0595f6]" />
                Phone<span className="text-[#0595f6] ml-1">*</span>
              </label>
              <input
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.currentTarget.value)}
                placeholder="+1 (555) 123-4567"
                className="w-full h-11 bg-gray-50 border border-gray-200 rounded-lg px-4 text-gray-900 placeholder-gray-400 focus:border-[#0595f6] focus:ring-1 focus:ring-[#0595f6]/20 transition-all duration-200"
              />
            </div>

            <div className="col-span-2">
              <label className="mb-2 text-gray-700 font-medium flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-[#0595f6]" />
                Google Drive Resume Link
                <span className="text-[#0595f6] ml-1">*</span>
              </label>
              <input
                type="url"
                name="driveLink"
                value={driveLink}
                onChange={(e) => setDriveLink(e.currentTarget.value)}
                placeholder="https://drive.google.com/..."
                className="w-full h-11 bg-gray-50 border border-gray-200 rounded-lg px-4 text-gray-900 placeholder-gray-400 focus:border-[#0595f6] focus:ring-1 focus:ring-[#0595f6]/20 transition-all duration-200"
              />
              <p className="mt-2 text-sm text-gray-500">
                Please upload your resume to Google Drive and share the link
                (make sure it's accessible).
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="w-full text-white rounded-xl bg-gradient-to-r from-[#0595f6] to-[#41E2FF] px-6 py-4 font-semibold text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:opacity-90 disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Submit Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
