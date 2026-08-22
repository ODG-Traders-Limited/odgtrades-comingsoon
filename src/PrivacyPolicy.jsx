import React from 'react';
import { ArrowLeft } from 'lucide-react';
import logo from './assets/logo.png';

export default function PrivacyPolicy({ onBack }) {
  const sections = [
    {
      title: "1. WHO WE ARE",
      content: "ODG Traders is a forex education, mentorship, trading signals and financial-market information platform. For purposes of applicable data-protection laws, ODG TRADERS LIMITED is the entity responsible for processing personal information through the Services, unless otherwise stated.",
      bullets: [
        "Forex education",
        "Trading courses",
        "Mentorship",
        "Trading signals",
        "Market analysis",
        "Webinars and live classes",
        "Educational videos",
        "Trading communities",
        "Market news and information",
        "User accounts",
        "Subscription services; and",
        "Other related services."
      ],
      footer: "Contact Email: support@odgtraders.com"
    },
    {
      title: "2. INFORMATION WE COLLECT",
      content: "Depending on how you use ODG Traders, we may collect the following categories of information.",
      subsections: [
        {
          subtitle: "2.1 Information You Provide",
          content: "When you create an account, purchase a subscription, contact us or use certain Services, we may collect:",
          bullets: [
            "Full name;",
            "Email address;",
            "Telephone number;",
            "Username;",
            "Password or authentication credentials;",
            "Country of residence;",
            "Date of birth where required;",
            "Profile information;",
            "Subscription information;",
            "Payment and transaction information;",
            "Communications with ODG Traders;",
            "Customer-support information; and",
            "Other information you voluntarily provide."
          ]
        }
      ]
    },
    {
      title: "3. PAYMENT INFORMATION",
      content: "When you purchase a subscription, course, mentorship programme or other paid Service, payments may be processed by third-party payment providers. Depending on the payment method used, payment providers may process information such as:",
      bullets: [
        "Name",
        "Billing information",
        "Transaction amount",
        "Payment status",
        "Payment reference",
        "Card or bank information; and",
        "Other information necessary to process the transaction."
      ],
      footer: "Where payments are processed by a third-party payment provider, ODG Traders does not ordinarily receive or store your complete card number, CVV or other full payment credentials. Payment providers process your information according to their own privacy policies and terms."
    },
    {
      title: "4. INFORMATION COLLECTED AUTOMATICALLY",
      content: "When you access our website or mobile application, certain technical information may be collected automatically. This may include:",
      bullets: [
        "IP address",
        "Device type",
        "Operating system",
        "App version",
        "Browser type",
        "Language",
        "Time zone",
        "General location information",
        "Device identifiers",
        "Crash information",
        "Usage information",
        "Pages or screens viewed",
        "Features used",
        "Session information; and",
        "Other diagnostic information."
      ]
    },
    {
      title: "5. INFORMATION COLLECTED THROUGH THE MOBILE APP",
      content: "The ODG Traders mobile application may collect information associated with your device and your use of the application. Depending on the features enabled in the application, this may include:",
      bullets: [
        "Device information",
        "App usage information",
        "Crash reports",
        "Push-notification identifiers",
        "Account information",
        "Subscription information; and",
        "Technical diagnostic information."
      ],
      footer: "We will not access information stored on your device unless the relevant feature requires such access and you provide the necessary permission."
    },
    {
      title: "6. PUSH NOTIFICATIONS",
      content: "If you enable push notifications, ODG Traders may send notifications relating to:",
      bullets: [
        "Trading signals",
        "Educational content",
        "Account activity",
        "Subscription information",
        "Announcements",
        "Webinars",
        "Important service updates; and",
        "Other relevant Platform notifications."
      ],
      footer: "You may disable push notifications through your device settings."
    },
    {
      title: "7. HOW WE USE YOUR INFORMATION",
      content: "We may use personal information to:",
      bullets: [
        "Create and maintain your account",
        "Provide requested Services;",
        "Process payments and subscriptions",
        "Deliver trading signals and educational content",
        "Provide mentorship and customer support",
        "Communicate with you",
        "Send service-related notifications",
        "Send marketing communications where permitted",
        "Improve our website and applications;",
        "Analyse Platform usage",
        "Detect and prevent fraud",
        "Protect the security of our Services",
        "Enforce our Terms & Conditions",
        "Comply with legal and regulatory obligations",
        "Resolve disputes",
        "Investigate suspected abuse or violations",
        "Maintain business records; and",
        "Develop and improve our products and Services."
      ]
    },
    {
      title: "8. LEGAL BASES FOR PROCESSING",
      content: "Where applicable data-protection law requires a lawful basis for processing personal information, we may rely on one or more of the following:",
      subsections: [
        {
          subtitle: "Consent",
          content: "Where you have provided consent for a specific processing activity."
        },
        {
          subtitle: "Contract",
          content: "Where processing is necessary to provide a Service you have requested or to perform a contract with you."
        },
        {
          subtitle: "Legal Obligation",
          content: "Where processing is required to comply with applicable law, regulation, court order or other legal obligation."
        },
        {
          subtitle: "Legitimate Interests",
          content: "Where processing is reasonably necessary for legitimate business interests, such as security, fraud prevention, service improvement and administration, provided those interests do not override your applicable rights."
        }
      ]
    },
    {
      title: "9. MARKETING COMMUNICATIONS",
      content: "ODG Traders may send you information about new courses, mentorship programmes, trading services, promotions, webinars, events, and other ODG Traders products or services.",
      footer: "You may unsubscribe from marketing communications by using the unsubscribe option included in the relevant communication or by contacting us. You may continue to receive essential service communications even after opting out of marketing communications."
    },
    {
      title: "10. COOKIES AND SIMILAR TECHNOLOGIES",
      content: "Our website may use cookies and similar technologies to keep users logged in, remember preferences, improve website performance, understand how users interact with the website, maintain security, measure traffic, and support marketing or analytics where permitted.",
      footer: "You may be able to control cookies through your browser settings. Disabling certain cookies may affect website functionality."
    },
    {
      title: "11. ANALYTICS",
      content: "We may use analytics and diagnostic technologies to understand how users interact with our Services and identify technical problems. These technologies may collect information such as device type, operating system, app version, feature usage, session information, crash information, and general usage statistics.",
      footer: "Where third-party analytics providers are used, their processing may also be governed by their respective privacy policies."
    },
    {
      title: "12. THIRD-PARTY SERVICE PROVIDERS",
      content: "ODG Traders may use trusted third-party service providers to operate and improve the Services. These providers may include cloud hosting, payment processors, authentication, analytics, communication, email, support, notification, and security providers.",
      footer: "We may disclose information to such providers only to the extent reasonably necessary for them to perform services on our behalf or as otherwise permitted by law."
    },
    {
      title: "13. APPLE AND APP STORE",
      content: "If you download or use the ODG Traders application through Apple’s App Store, Apple may collect and process certain information in accordance with Apple’s own terms and privacy practices. ODG Traders does not control Apple’s processing of information.",
      footer: "Your use of Apple’s services is also subject to Apple’s applicable terms and policies. Where Apple provides payment or subscription-processing functionality, the relevant transaction information may be processed by Apple."
    },
    {
      title: "14. SHARING OF PERSONAL INFORMATION",
      content: "ODG Traders does not sell your personal information as a commodity. We may disclose personal information where reasonably necessary to provide our Services, process payments, operate our technology infrastructure, provide customer support, maintain security, prevent fraud, comply with legal obligations, respond to lawful requests, protect our rights, or facilitate business transactions."
    },
    {
      title: "15. BUSINESS TRANSFERS",
      content: "If ODG Traders is involved in a merger, acquisition, restructuring, financing, sale of assets or similar transaction, personal information may be transferred as part of that transaction, subject to applicable law.",
      footer: "Where legally required, affected users will receive appropriate notice."
    },
    {
      title: "16. INTERNATIONAL DATA TRANSFERS",
      content: "Some service providers used by ODG Traders may process information in countries outside your country of residence.",
      footer: "Where personal information is transferred internationally, we will take reasonable steps to ensure that the transfer and processing comply with applicable data-protection requirements."
    },
    {
      title: "17. DATA RETENTION",
      content: "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including to provide Services, maintain accounts, complete transactions, resolve disputes, maintain business records, prevent fraud, comply with legal obligations, and enforce agreements.",
      footer: "When information is no longer reasonably required, we may delete, anonymise or securely dispose of it."
    },
    {
      title: "18. DATA SECURITY",
      content: "ODG Traders takes reasonable technical and organisational measures designed to protect personal information against unauthorised access, disclosure, loss, misuse, alteration, destruction, and other unlawful processing.",
      footer: "However, no internet transmission or electronic storage system can be guaranteed to be completely secure. You acknowledge that you use internet-based Services at your own risk."
    },
    {
      title: "19. ACCOUNT SECURITY",
      content: "You are responsible for maintaining the confidentiality of your account credentials. You should use a strong password, avoid sharing your password, log out of shared devices, keep your device secure, and notify us if you believe your account has been compromised.",
      footer: "ODG Traders will not normally ask you to disclose your password through unsolicited communications."
    },
    {
      title: "20. CHILDREN’S PRIVACY",
      content: "Our Services are not directed at children who are below the minimum age permitted to use the Services under applicable law. We do not knowingly collect personal information from children in violation of applicable law.",
      footer: "If you believe a child has provided personal information to ODG Traders without appropriate consent, please contact us. Where required, we will take reasonable steps to delete such information."
    },
    {
      title: "21. YOUR DATA-PROTECTION RIGHTS",
      content: "Depending on your location and applicable law, you may have rights relating to your personal information, including the right to request access, correction, deletion, restriction of processing, object to certain processing, withdraw consent, request portability, or lodge a complaint with a regulatory authority.",
      footer: "These rights are subject to applicable legal limitations and exceptions."
    },
    {
      title: "22. NIGERIAN DATA-PROTECTION RIGHTS",
      content: "Where applicable, ODG Traders will process personal data in accordance with the Nigeria Data Protection Act 2023 and applicable regulations and guidance.",
      footer: "Users located in Nigeria may exercise applicable rights by contacting ODG Traders through the contact details provided in this Privacy Policy. We may request reasonable information to verify the identity of the person making a data request."
    },
    {
      title: "23. DATA REQUESTS",
      content: "To submit a privacy or data-protection request, contact support@odgtraders.com. Please include your name, email address associated with your account, description of your request, and any information reasonably necessary for us to identify your account.",
      footer: "We may request additional information to verify your identity before processing a request."
    },
    {
      title: "24. THIRD-PARTY WEBSITES AND SERVICES",
      content: "Our Services may contain links to third-party websites, brokers, payment providers, social-media platforms or other services. ODG Traders is not responsible for the privacy practices of third parties.",
      footer: "You should review the privacy policies of third-party services before providing them with personal information."
    },
    {
      title: "25. SOCIAL MEDIA",
      content: "ODG Traders may operate or maintain accounts on third-party social-media platforms. If you interact with us through social media, the relevant platform may collect information about your interaction according to its own privacy policy.",
      footer: "ODG Traders does not control the privacy practices of those platforms."
    },
    {
      title: "26. TRADING AND FINANCIAL INFORMATION",
      content: "Where you voluntarily provide information relating to your trading activity, such as trading experience, trading preferences, account information or trading results, ODG Traders may process that information to provide relevant Services.",
      footer: "We will not treat such information as a guarantee of trading results or as an instruction to execute trades. You should not provide passwords, private keys, seed phrases, or other highly sensitive credentials."
    },
    {
      title: "27. INVESTMENT SERVICES",
      content: "If ODG Traders provides investment-related or managed-trading services, additional information may be collected for purposes including identity verification, know-your-customer procedures, anti-money-laundering requirements, transaction monitoring, and risk management.",
      footer: "Such information will be processed in accordance with applicable law and any separate agreement governing the relevant service."
    },
    {
      title: "28. LEGAL AND REGULATORY DISCLOSURES",
      content: "ODG Traders may disclose personal information where we reasonably believe disclosure is necessary to comply with applicable law, respond to a government request, comply with a court order, prevent fraud, protect users, protect ODG Traders, or protect the rights and safety of any person."
    },
    {
      title: "29. DATA BREACHES",
      content: "If ODG Traders becomes aware of a personal-data breach that requires notification under applicable law, we will take reasonable steps to investigate, contain and address the breach and provide notifications where legally required."
    },
    {
      title: "30. CHANGES TO THIS PRIVACY POLICY",
      content: "We may update this Privacy Policy from time to time. When we make changes, we will update the “Last Updated” date at the beginning of this Privacy Policy.",
      footer: "Where required by law, we will provide additional notice of material changes. Your continued use of the Services after the updated Privacy Policy becomes effective constitutes acknowledgement of the updated policy."
    },
    {
      title: "31. CONTACT US",
      content: "If you have questions, concerns or requests regarding this Privacy Policy or the way ODG Traders handles personal information, contact us at:",
      bullets: [
        "Legal Entity: ODG TRADERS LIMITED",
        "Privacy Email: support@odgtraders.com",
        "General Email: support@odgtraders.com",
        "Telephone: +2349138799997",
        "Website: www.odgtraders.com"
      ]
    },
    {
      title: "32. ACKNOWLEDGEMENT",
      content: "By using the ODG Traders website or mobile application, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with the practices described in this Privacy Policy, you should discontinue use of the Services."
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
            PRIVACY <span className="font-semibold text-[#F3A92C]">POLICY</span>
          </h1>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-500 justify-center md:justify-start">
            <span>Effective Date: 1st August, 2026</span>
            <span className="text-gray-800">•</span>
            <span>Last Updated: 1st August, 2026</span>
          </div>
        </div>

        <div className="space-y-12 font-sans font-light text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-8">
          <p className="text-base text-gray-300">
            This Privacy Policy explains how ODG TRADERS LIMITED, trading as ODG Traders (“ODG Traders”, “ODG”, “we”, “us”, or “our”), collects, uses, stores, protects and discloses personal information when you use the ODG Traders website, mobile applications, trading education platform, mentorship services, trading signals, courses, community features and related services (collectively, the “Services”).
          </p>
          
          <p>
            This Privacy Policy applies to our website, iOS application, Android application and other Services operated by ODG Traders. By using our Services, you acknowledge that you have read and understood this Privacy Policy.
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

              {section.subsections && section.subsections.map((sub, sIdx) => (
                <div key={sIdx} className="space-y-3 mt-4 pl-4 border-l border-white/10">
                  <h3 className="text-white font-mono text-xs uppercase tracking-wider">{sub.subtitle}</h3>
                  {sub.content && <p>{sub.content}</p>}
                  {sub.bullets && (
                    <ul className="list-none space-y-2 pl-4">
                      {sub.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-gray-600 mt-1 shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {section.footer && (
                <p className="text-xs italic bg-white/[0.02] border border-white/5 p-4 rounded-xl text-gray-500 mt-4">
                  {section.footer}
                </p>
              )}
            </div>
          ))}
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
