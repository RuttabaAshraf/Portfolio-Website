import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryRole, setInquiryRole] = useState('Junior Graphic Designer');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const emailAddress = 'AKASHAMEHBOOB@GMAIL.COM';
  const linkedInUrl = 'https://www.linkedin.com/in/akasha-mahboob-9a9896305';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Design Opportunity / Inquiry: ${inquiryRole} - from ${inquiryName || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Hello Akasha,\n\n${inquiryMessage || "I reviewed your portfolio and would love to discuss a design opportunity with you."}\n\nBest regards,\n${inquiryName || 'Colleague'}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 border-b border-[#1E222B] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold">
                  GET IN TOUCH
                </span>
                <span className="text-[#4E5669]">&middot;</span>
                <span className="text-xs font-mono text-[#8C94A7] uppercase tracking-wider">
                  DIRECT ACCESS
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.05] mb-4">
                HAVE AN IDEA? <br />
                <span className="text-[#FF4D2E]">LET&apos;S DESIGN IT.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#9EA5B6] max-w-xl leading-relaxed">
                Open to creative opportunities, collaborations, freelance projects, internships, and junior design roles.
              </p>
            </div>

            {/* Email Contact Box */}
            <div className="p-6 rounded-2xl bg-[#0F1219] border border-[#202635] space-y-4">
              <span className="text-xs font-mono text-[#7A8398] uppercase block">
                DIRECT INBOX
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-lg sm:text-2xl font-extrabold text-white font-mono hover:text-[#FF4D2E] transition-colors break-all"
                >
                  {emailAddress}
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="px-4 py-2.5 bg-[#FF4D2E] hover:bg-[#E63D1F] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>EMAIL DIRECTLY</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 bg-[#171A24] hover:bg-[#232838] text-white rounded border border-[#272D3E] transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#10B981]" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#A0A8BD]" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Verified Profiles */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#7A8398] uppercase block">
                VERIFIED PROFESSIONAL PROFILES
              </span>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#11141D] hover:bg-[#1A1F2C] border border-[#202635] hover:border-[#38425A] text-xs font-mono text-white transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LINKEDIN PROFILE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#7A8398] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Inquiry Mailto Generator */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0F1219] border border-[#202534]">
            <div className="flex items-center justify-between border-b border-[#1E2331] pb-4 mb-6">
              <span className="text-xs font-mono text-[#FF4D2E] font-bold uppercase tracking-wider">
                QUICK INQUIRY
              </span>
              <span className="text-xs font-mono text-[#636C7F]">OPENS EMAIL CLIENT</span>
            </div>

            <form onSubmit={handleSendInquiry} className="space-y-4">
              <div>
                <label className="text-[11px] font-mono text-[#7A8398] uppercase block mb-1">
                  YOUR NAME / ORGANIZATION
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins / Creative Agency"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded bg-[#131620] border border-[#202636] focus:border-[#FF4D2E] text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#7A8398] uppercase block mb-1">
                  ROLE OF INTEREST
                </label>
                <select
                  value={inquiryRole}
                  onChange={(e) => setInquiryRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded bg-[#131620] border border-[#202636] focus:border-[#FF4D2E] text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="Junior Graphic Designer">Junior Graphic Designer</option>
                  <option value="Graphic Designer">Graphic Designer</option>
                  <option value="Visual Designer">Visual Designer</option>
                  <option value="Digital Designer">Digital Designer</option>
                  <option value="UI/Visual Designer">UI/Visual Designer</option>
                  <option value="Brand Designer">Brand Designer</option>
                  <option value="Design Intern">Design Intern</option>
                  <option value="Freelance Project">Freelance Project</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono text-[#7A8398] uppercase block mb-1">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your team, project, or the creative challenges you are tackling..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded bg-[#131620] border border-[#202636] focus:border-[#FF4D2E] text-sm text-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#FF4D2E] hover:bg-[#E63D1F] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>COMPOSE &amp; SEND MESSAGE</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
