import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, CheckCircle2, ArrowRight, Copy, Check } from 'lucide-react';

// Crisp WhatsApp SVG brand icon
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.742.949 3.71 1.449 5.711 1.45h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.412Z" />
  </svg>
);

interface ContactSectionProps {
  initialService?: string;
  initialEstimate?: {
    type: string;
    area: number;
    grade: string;
    estimatedCost: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Residential',
  initialEstimate,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    area: initialEstimate ? initialEstimate.area.toString() : '',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Sync props when initialService or initialEstimate change
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialEstimate) {
      setFormData((prev) => ({
        ...prev,
        service: initialEstimate.type || prev.service,
        area: initialEstimate.area ? initialEstimate.area.toString() : prev.area,
        message: prev.message
          ? prev.message
          : `Preliminary Estimate: ${initialEstimate.estimatedCost} (${initialEstimate.grade} Grade)`,
      }));
    }
  }, [initialEstimate]);

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText('9790082198');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateWhatsAppMessage = (data: typeof formData) => {
    const lines = [
      `*🏛️ SARA INFRA CONSTRUCTION - PROJECT PROPOSAL REQUEST*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `*👤 Client Name:* ${data.name.trim()}`,
      `*📞 Phone Number:* ${data.phone.trim()}`,
      data.email.trim() ? `*✉️ Email:* ${data.email.trim()}` : null,
      `*🏗️ Service Division:* ${data.service}`,
      data.area.trim() ? `*📐 Project Footprint:* ${data.area.trim()} sq.ft.` : null,
      data.location.trim() ? `*📍 Site Location:* ${data.location.trim()}` : null,
      initialEstimate
        ? `*💰 BOQ Benchmark:* ${initialEstimate.estimatedCost} (${initialEstimate.grade} Grade)`
        : null,
      data.message.trim() ? `*📝 Architectural Requirements:* ${data.message.trim()}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `_Forwarded to CEO P. Sankar (+91 97900 82198)_`,
    ].filter(Boolean);

    return lines.join('\n');
  };

  const buildWhatsAppUrl = (data: typeof formData) => {
    const text = generateWhatsAppMessage(data);
    return `https://wa.me/919790082198?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and direct phone number.');
      return;
    }
    setErrorMsg('');

    const targetUrl = buildWhatsAppUrl(formData);
    setWhatsappUrl(targetUrl);
    setSubmitted(true);

    // Auto-open WhatsApp chat window pre-filled to 9790082198
    try {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Handled gracefully in confirmation screen
    }
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & Office Presence (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C5A059] mb-3">
                <span>Direct Access</span>
                <span className="text-slate-400">/</span>
                <span className="text-slate-500">Site Appointments</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#092347] tracking-tight font-['Outfit'] mb-4">
                Begin Your Next Landmark Project
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Connect directly with our senior structural engineers and principal project directors for site feasibility assessments, architectural review, and turnkey construction proposals.
              </p>

              {/* Owner & Engineer Leadership Profile Card */}
              <div className="bg-gradient-to-r from-slate-50 to-amber-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 mb-6 flex items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#092347] text-[#C5A059] flex items-center justify-center font-black font-['Outfit'] text-base border-2 border-[#C5A059] shrink-0 shadow-xs">
                    PS
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                      Principal Leadership
                    </div>
                    <div className="text-lg font-black text-[#092347] font-['Outfit'] leading-tight">
                      P. Sankar
                    </div>
                    <div className="text-xs font-semibold text-slate-600">
                      CEO
                    </div>
                  </div>
                </div>
                <a
                  href="tel:9790082198"
                  className="px-3.5 py-2 bg-[#092347] hover:bg-[#061830] text-white text-xs font-bold rounded-md transition-colors flex items-center gap-1.5 shrink-0 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call Direct</span>
                </a>
              </div>

              {/* Prominent Direct Phone Highlight Card (9790082198) */}
              <div className="bg-[#092347] text-white p-6 rounded-xl border border-[#0F356B] shadow-md mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    Primary Direct Desk
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="text-xs text-slate-300 hover:text-white flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-[#C5A059]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href="tel:9790082198"
                  className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white hover:text-[#C5A059] transition-colors flex items-center gap-3 tracking-tight"
                >
                  <Phone className="w-6 h-6 text-[#C5A059] shrink-0" />
                  <span>+91 97900 82198</span>
                </a>

                {/* Direct WhatsApp Quick Chat Link */}
                <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-white/10">
                  <a
                    href="https://wa.me/919790082198?text=Hello%20Sara%20Infra%20Construction%2C%20I%20would%20like%20to%20inquire%20about%20a%20construction%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded shadow-sm transition-all hover:scale-105"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <span className="text-xs text-slate-300 font-normal">
                    Instant response to 9790082198
                  </span>
                </div>

                <p className="text-xs text-slate-300 mt-3 font-normal">
                  Direct connection to Sara Infra Construction Engineering Division. Available Monday to Sunday, 8:30 AM – 7:30 PM IST.
                </p>
              </div>

              {/* Physical Office & Credentials */}
              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-100 rounded text-[#092347] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Headquarters & Design Studio</span>
                    <span>M408, Oxygen by Urban Tree, 29 Pushkin Street, Perumbakkam, Chennai</span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Oxygen+by+Urban+Tree+Perumbakkam+Chennai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[11px] text-[#0047AB] hover:underline font-medium mt-0.5"
                    >
                      Get Directions via Google Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-100 rounded text-[#092347] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Working Hours & Consultations</span>
                    <span>Monday to Sunday: 08:30 – 19:30</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-slate-400">
              Zero unsolicited sales calls. Your project blueprint and parameters remain completely confidential.
            </div>
          </div>

          {/* Right Column: Lead Capture / Consultation Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-full mb-3">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                    Transmitted to WhatsApp Desk (+91 97900 82198)
                  </div>

                  <h3 className="text-2xl font-black font-['Outfit'] text-[#092347] mb-2">
                    Proposal Brief Dispatched!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your engineering proposal has been generated and directed to CEO <span className="font-semibold text-[#092347]">P. Sankar</span> at <span className="font-semibold text-[#092347]">+91 97900 82198</span>.
                  </p>

                  {/* Primary WhatsApp Direct Dispatch Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                    <a
                      href={whatsappUrl || buildWhatsAppUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all hover:scale-[1.02]"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      <span>Open Chat on WhatsApp (+91 97900 82198)</span>
                    </a>
                    <a
                      href="tel:9790082198"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#092347] hover:bg-[#061830] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#C5A059]" />
                      <span>Call 9790082198</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-500 max-w-md mx-auto mb-6">
                    If WhatsApp didn't open automatically on your device, click the green button above to deliver your message.
                  </p>

                  {/* Summary of sent details */}
                  <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-left max-w-md mx-auto mb-6 space-y-1.5 shadow-xs">
                    <div className="font-bold text-[#092347] border-b border-slate-100 pb-1.5 flex items-center justify-between">
                      <span>Transmitted Proposal Brief</span>
                      <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Dispatched
                      </span>
                    </div>
                    <div className="text-slate-600">
                      <span className="text-slate-400">Client Name:</span> <span className="font-semibold text-slate-800">{formData.name}</span>
                    </div>
                    <div className="text-slate-600">
                      <span className="text-slate-400">Phone:</span> <span className="font-semibold text-slate-800">{formData.phone}</span>
                    </div>
                    {formData.email && (
                      <div className="text-slate-600">
                        <span className="text-slate-400">Email:</span> <span className="font-medium text-slate-800">{formData.email}</span>
                      </div>
                    )}
                    <div className="text-slate-600">
                      <span className="text-slate-400">Service:</span> <span className="font-medium text-slate-800">{formData.service}</span>
                    </div>
                    {formData.area && (
                      <div className="text-slate-600">
                        <span className="text-slate-400">Footprint:</span> <span className="font-medium text-slate-800">{formData.area} sq.ft.</span>
                      </div>
                    )}
                    {formData.location && (
                      <div className="text-slate-600">
                        <span className="text-slate-400">Location:</span> <span className="font-medium text-slate-800">{formData.location}</span>
                      </div>
                    )}
                    {formData.message && (
                      <div className="text-slate-600">
                        <span className="text-slate-400">Requirements:</span> <span className="font-medium text-slate-800">{formData.message}</span>
                      </div>
                    )}
                    <div className="text-slate-600 pt-1 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-slate-400">Recipient Desk:</span>
                      <span className="font-bold text-[#092347]">+91 97900 82198</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: 'Residential',
                        area: '',
                        location: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 rounded-md transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 pb-4 mb-6">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold rounded-full mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                      Direct WhatsApp Forwarding to +91 97900 82198
                    </div>
                    <h3 className="text-xl font-black font-['Outfit'] text-[#092347]">
                      Request Engineering Feasibility & Proposal
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out your requirements below to automatically forward your project brief to our senior desk at <span className="font-bold text-[#092347]">+91 97900 82198</span>.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-md">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Sundaram"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#092347]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Direct Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#092347]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#092347]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Category *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#092347]"
                      >
                        <option value="Residential">Residential (Luxury Villa & Private Estate)</option>
                        <option value="Commercial">Commercial (Corporate Tower & Complex)</option>
                        <option value="Renovation">Renovation (Structural Retrofit & Modern Expansion)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Approximate Footprint (Sq.Ft)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 8,500 sq.ft."
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#092347]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Site Location / City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chennai, ECR, Bengaluru"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#092347]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Specific Architectural Requirements or Site Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention any specific cantilever requirements, basement levels, architectural style, or scheduled start date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#092347]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-[#092347] hover:bg-[#061830] text-white font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      <span>Submit & Send to WhatsApp (+91 97900 82198)</span>
                      <ArrowRight className="w-4 h-4 text-[#C5A059] transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2 flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block"></span>
                      Dispatches formatted proposal to <strong>+91 97900 82198</strong>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
