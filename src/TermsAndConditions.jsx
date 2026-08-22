import React from 'react';
import { ArrowLeft } from 'lucide-react';
import logo from './assets/logo.png';

export default function TermsAndConditions({ onBack }) {
  const sections = [
    {
      title: "1. ABOUT ODG TRADERS",
      content: "ODG Traders is a forex education, mentorship, market-analysis and trading-signals platform designed to provide users with educational resources and tools intended to improve their understanding of financial markets and trading.",
      bullets: [
        "Forex education and training",
        "Structured mentorship programmes",
        "Trading courses",
        "Market analysis",
        "Trading signals",
        "Webinars and live classes",
        "Educational videos",
        "Trading-related news and commentary",
        "Trading communities and discussion groups",
        "Educational resources and materials",
        "Free educational content and selected free signals",
        "Premium subscription services and",
        "Other trading-related services that we may introduce from time to time."
      ],
      footer: "ODG Traders does not guarantee that any user will make a profit from trading."
    },
    {
      title: "2. ACCEPTANCE OF THESE TERMS",
      content: "By creating an account, accessing the Platform, purchasing a subscription, enrolling in a programme, joining our community, or otherwise using any of our Services, you confirm that:",
      bullets: [
        "You have read and understood these Terms;",
        "You agree to comply with these Terms;",
        "You are legally capable of entering into a binding agreement;",
        "The information you provide to us is accurate and complete;",
        "You will comply with all applicable laws and regulations;",
        "You understand the risks associated with leveraged financial markets; and",
        "You accept responsibility for your own trading and financial decisions."
      ],
      footer: "If you are using the Platform on behalf of a company, organisation or other legal entity, you represent that you have authority to bind that entity to these Terms."
    },
    {
      title: "3. ELIGIBILITY",
      content: "You must meet any minimum age requirement applicable in your country of residence in order to use the Services. Where required by applicable law, certain Services may be unavailable to persons in particular jurisdictions. ODG Traders reserves the right to refuse access to any Service where providing such Service would violate applicable law, regulation, sanctions, court orders or regulatory requirements."
    },
    {
      title: "4. ACCOUNT REGISTRATION",
      content: "Certain features require you to create an ODG Traders account from the website. When registering, you agree to provide accurate, current and complete information. You are responsible for maintaining the confidentiality of your login credentials, preventing unauthorised access, and notifying us of any breach.",
      bullets: [
        "You must not create an account using another person's identity;",
        "You must not share your account credentials with another person;",
        "You must not sell, transfer or assign your account without our written permission."
      ]
    },
    {
      title: "5. GUEST USERS",
      content: "ODG Traders may offer a guest or free-access mode. Guest users may receive access to selected educational videos, free trading signals, webinars, market information or other content determined by ODG Traders. Guest access does not guarantee permanent access to any particular content or feature."
    },
    {
      title: "6. SUBSCRIPTIONS AND PREMIUM SERVICES",
      content: "Certain Services may require payment of a subscription or one-time fee. Before purchasing a paid Service, you will be shown the applicable price and, where applicable, the duration and renewal terms. By purchasing a paid Service, you authorise ODG Traders or its authorised payment provider to process the applicable payment."
    },
    {
      title: "7. PAYMENTS",
      content: "Payments may be processed through third-party payment processors. ODG Traders does not directly store complete payment-card information where payment processing is handled by an authorised third-party payment provider. You agree to provide accurate billing information."
    },
    {
      title: "8. REFUNDS AND CANCELLATIONS",
      content: "Unless otherwise stated for a particular product or subscription, payments for digital products, educational programmes, mentorship access and trading signals are generally non-refundable once access has been provided. ODG Traders may consider refund requests on a case-by-case basis (e.g. duplicate payment, technical errors)."
    },
    {
      title: "9. CANCELLATION OF SUBSCRIPTIONS",
      content: "You may cancel a recurring subscription in accordance with the cancellation process made available through the Platform or applicable payment provider. Cancellation generally prevents future renewal but does not automatically create an entitlement to a refund."
    },
    {
      title: "10. EDUCATIONAL CONTENT",
      content: "All courses, videos, articles, webinars, tutorials, educational materials and other information provided by ODG Traders are provided for general educational and informational purposes. Past performance, examples, demonstrations and historical results do not guarantee future performance."
    },
    {
      title: "11. TRADING SIGNALS",
      content: "ODG Traders may provide trading signals containing entry level, direction, stop-loss, take-profit levels, and commentary. Trading signals are provided for educational and informational purposes. A signal does not constitute a guarantee, promise or assurance that the suggested trade will be profitable.",
      bullets: [
        "ODG Traders does not guarantee that every signal will be profitable",
        "We do not guarantee that losses will not occur",
        "We do not guarantee that signals will always be delivered without delay."
      ]
    },
    {
      title: "12. NO GUARANTEED PROFITS",
      content: "ODG Traders does not guarantee profits, returns or income from trading. Any statements regarding potential results, historical performance, successful trades, percentages, account growth, testimonials or examples are illustrative only unless expressly stated otherwise."
    },
    {
      title: "13. FOREX AND CFD RISK DISCLOSURE",
      content: "Forex, CFDs, commodities, indices and other leveraged financial instruments involve significant risk. Leverage can magnify both profits and losses. You may lose money rapidly and may lose a substantial portion or all of the funds allocated to trading. You should never trade with money you cannot afford to lose."
    },
    {
      title: "14. NO FINANCIAL, INVESTMENT OR TAX ADVICE",
      content: "Unless ODG Traders expressly states otherwise, the information provided through the Platform does not constitute personal financial advice, investment advice, portfolio management, tax advice, legal advice, or a recommendation to trade."
    },
    {
      title: "15. CLIENT FUNDS AND ACCOUNT MANAGEMENT",
      content: "ODG Traders does not take custody of, hold, control or directly manage users' trading funds. Users should maintain their trading accounts with appropriately selected third-party brokers."
    },
    {
      title: "16. THIRD-PARTY BROKERS",
      content: "ODG Traders may provide links, references, promotions or integrations involving third-party brokers. Such third parties operate independently. You are responsible for reviewing their terms, regulation, fees, and conditions."
    },
    {
      title: "17. AFFILIATE AND PARTNERSHIP DISCLOSURE",
      content: "ODG Traders may maintain commercial relationships, partnerships, affiliate arrangements or referral relationships with third-party brokers or businesses, and may receive commissions or referral fees."
    },
    {
      title: "18. MARKET DATA AND INFORMATION",
      content: "Market prices, charts, news, and economic data displayed through the Platform may be obtained from third-party sources. ODG Traders does not guarantee that all information will be accurate, complete, or error-free."
    },
    {
      title: "19. LIVE CLASSES AND WEBINARS",
      content: "ODG Traders may provide live classes, webinars, seminars, and workshops. Schedules may change due to instructor availability, market conditions, or technical issues."
    },
    {
      title: "20. COMMUNITY RULES",
      content: "Where we provide chat rooms or community features, users must behave respectfully. Users must not: harass, threaten, abuse, promote scams or fraudulent schemes, spam, share malware, or distribute unauthorized paid ODG Traders content."
    },
    {
      title: "21. USER-GENERATED CONTENT",
      content: "If you submit comments, reviews, or testimonials to the Platform, you represent that you own the necessary rights to submit the content and grant ODG Traders a non-exclusive license to host and show it."
    },
    {
      title: "22. TESTIMONIALS AND PERFORMANCE RESULTS",
      content: "Testimonials published by ODG Traders represent the experiences of individuals. Individual results vary. Testimonials are not a guarantee that you will obtain the same result."
    },
    {
      title: "23. INTELLECTUAL PROPERTY",
      content: "All intellectual property associated with ODG Traders belongs to ODG Traders or its respective licensors. This includes names, logos, branding, courses, text, graphics, videos, and signal formats."
    },
    {
      title: "24. RESTRICTIONS ON COPYING AND DISTRIBUTION",
      content: "You must not copy ODG Traders courses, record paid classes, resell educational materials, share account credentials, redistribute premium signals, or repackage our content as your own."
    },
    {
      title: "25. COPYRIGHT INFRINGEMENT",
      content: "If you believe that material available through the Platform infringes your intellectual property rights, please contact support@odgtraders.com for resolution."
    },
    {
      title: "26. PRIVACY AND PERSONAL DATA",
      content: "ODG Traders collects and processes personal information necessary to provide and improve the Services in accordance with its Privacy Policy and applicable data protection laws."
    },
    {
      title: "27. SECURITY",
      content: "We take reasonable measures to protect our systems. However, no internet-based platform can guarantee absolute security. You are responsible for maintaining the security of your login credentials."
    },
    {
      title: "28. PLATFORM AVAILABILITY",
      content: "ODG Traders aims to maintain reliable access to the Platform but does not guarantee uninterrupted availability due to maintenance, updates, or force majeure events."
    },
    {
      title: "29. MODIFICATIONS TO THE SERVICES",
      content: "ODG Traders may modify, update, add or remove features from the Platform at any time."
    },
    {
      title: "30. SUSPENSION AND TERMINATION",
      content: "ODG Traders may suspend or terminate your account if you breach these Terms, engage in fraud, abuse other users, or distribute proprietary content without permission."
    },
    {
      title: "31. EFFECT OF TERMINATION",
      content: "Upon termination, your right to use the Platform ends. Clauses concerning intellectual property, confidentiality, liability, and dispute resolution will continue to apply."
    },
    {
      title: "32. LIMITATION OF LIABILITY",
      content: "To the maximum extent permitted by applicable law, ODG Traders and its affiliates shall not be liable for trading losses, investment losses, loss of profits, broker failures, or delayed signals."
    },
    {
      title: "33. NO WARRANTY",
      content: "To the maximum extent permitted by law, the Services are provided on an 'as available' and 'as is' basis, without warranty of any kind."
    },
    {
      title: "34. INDEMNIFICATION",
      content: "You agree to indemnify and hold harmless ODG Traders and its representatives against any claims, losses, or liabilities arising from your breach of these Terms or your trading activities."
    },
    {
      title: "35. FORCE MAJEURE",
      content: "ODG Traders shall not be responsible for delays or failures caused by natural disasters, war, cyberattacks, government action, power failures, or other events outside our control."
    },
    {
      title: "36. THIRD-PARTY LINKS",
      content: "The Platform may contain links to third-party websites or services. We do not control and are not responsible for their content, privacy policies, or terms."
    },
    {
      title: "37. COMPLIANCE WITH APPLICABLE LAW",
      content: "You agree to use ODG Traders only in accordance with all applicable laws and regulations in your country of residence."
    },
    {
      title: "38. REGULATORY STATUS",
      content: "Unless expressly stated, ODG Traders does not represent itself as a bank, broker, fund manager, or regulated financial adviser in any jurisdiction."
    },
    {
      title: "39. CONFIDENTIALITY",
      content: "You agree not to disclose confidential information obtained through paid ODG Traders Services, including private trading strategies and proprietary mentorship materials."
    },
    {
      title: "40. NO EMPLOYMENT OR PARTNERSHIP",
      content: "Your use of the Platform does not create an employment relationship, partnership, joint venture, or agency relationship between you and ODG Traders."
    },
    {
      title: "41. ASSIGNMENT",
      content: "You may not transfer or assign your rights under these Terms without our written consent. ODG Traders may assign its rights for business restructuring."
    },
    {
      title: "42. SEVERABILITY",
      content: "If any provision of these Terms is found to be invalid or unenforceable, that provision will be limited, and the remaining provisions will continue in effect."
    },
    {
      title: "43. ENTIRE AGREEMENT",
      content: "These Terms and the Privacy Policy constitute the entire agreement between you and ODG Traders regarding your use of the Services."
    },
    {
      title: "44. CHANGES TO THESE TERMS",
      content: "ODG Traders may update these Terms from time to time. The updated version will be published on the Platform with a revised Last Updated date."
    },
    {
      title: "45. GOVERNING LAW",
      content: "These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria, unless applicable mandatory law requires otherwise."
    },
    {
      title: "46. DISPUTE RESOLUTION",
      content: "If you have a complaint or dispute, you should first contact ODG Traders (support@odgtraders.com) to resolve it amicably before seeking legal relief."
    },
    {
      title: "47. CONTACT INFORMATION",
      content: "For questions, complaints, or legal notices, contact:",
      bullets: [
        "Legal Entity: ODG TRADERS LIMITED",
        "Email: support@odgtraders.com",
        "Telephone: +2349124472594",
        "Website: www.odgtraders.com"
      ]
    },
    {
      title: "48. ACKNOWLEDGEMENT",
      content: "By using the Platform, you acknowledge that you have read these Terms, understand the high risk of Forex trading, and agree to be bound by all conditions in this Agreement."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col justify-between items-center px-6 py-12 md:py-16 selection:bg-[#F3A92C]/10 selection:text-[#F3A92C] overflow-x-hidden">
      {/* Drifting Grid Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-85 z-0"></div>

      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] md:w-[450px] h-[350px] md:h-[450px] rounded-full bg-[#F3A92C]/[0.015] blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[500px] h-[400px] md:h-[500px] rounded-full bg-[#F3A92C]/[0.01] blur-[120px] pointer-events-none z-0"></div>

      <header className="relative z-10 w-full max-w-4xl flex items-center justify-between border-b border-white/5 pb-6 mb-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-500 hover:text-[#F3A92C] transition-colors uppercase"
        >
          <ArrowLeft size={14} /> Back
        </button>
        <img src={logo} alt="ODG Traders" className="h-7 w-auto object-contain opacity-80" />
      </header>

      <main className="relative z-10 w-full max-w-3xl flex-grow mb-12">
        <div className="text-center md:text-left mb-12">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#F3A92C] uppercase block mb-3">
            LEGAL DOCUMENT
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6">
            TERMS & <span className="font-semibold text-[#F3A92C]">CONDITIONS</span>
          </h1>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-500 justify-center md:justify-start">
            <span>Effective Date: 1st August, 2026</span>
            <span className="text-gray-800">•</span>
            <span>Last Updated: 20th August, 2026</span>
          </div>
        </div>

        <div className="space-y-12 font-sans font-light text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-8">
          <p className="text-base text-gray-300">
            These Terms & Conditions (“Terms”, “Terms and Conditions”, or “Agreement”) govern your access to and use of the ODG Traders website, mobile application, trading education platform, mentorship programmes, signals, courses, webinars, community features, digital content, and related services (collectively, the “Platform” or “Services”).
          </p>
          
          <p>
            The Services are operated by ODG Traders Limited, trading as ODG Traders. By creating an account, accessing the Platform, purchasing a subscription, enrolling in a programme, joining our community, or otherwise using any of our Services, you acknowledge that you have read, understood and agreed to be legally bound by these Terms.
          </p>

          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-white text-lg font-medium tracking-wide mt-8 border-b border-white/5 pb-2">
                {section.title}
              </h2>
              
              {section.content && <p>{section.content}</p>}

              {section.bullets && (
                <ul className="list-none space-y-2 pl-4 border-l border-[#F3A92C]/20">
                  {section.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[#F3A92C] mt-1.5 shrink-0">▪</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="text-xs italic bg-white/[0.02] border border-white/5 p-4 rounded-xl text-gray-500 mt-4">
                  {section.footer}
                </p>
              )}
            </div>
          ))}
          
          <div className="bg-[#1A0A0A]/40 border border-red-500/10 p-6 rounded-xl space-y-3 mt-12">
            <h4 className="text-red-400 font-bold text-xs uppercase tracking-wider font-mono">IMPORTANT RISK WARNING</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Forex and leveraged financial-market trading carries a high level of risk and may result in the loss of some or all of your trading capital. You should not trade with money you cannot afford to lose. Past performance is not indicative of future results. ODG Traders does not guarantee profits or protection against losses.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Trading signals, market analysis, educational materials and other information provided by ODG Traders are not guarantees of future performance and should not be treated as a promise of profit.
            </p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 w-full max-w-4xl border-t border-white/5 pt-8 flex justify-center">
        <p className="text-[10px] text-gray-600 font-mono tracking-wider select-none text-center">
          &copy; {new Date().getFullYear()} ODG TRADERS. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
