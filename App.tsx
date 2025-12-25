
import React, { useState } from 'react';

const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const Divider: React.FC<{ double?: boolean }> = ({ double }) => (
  <div className={`w-full h-px bg-gray-900 my-12 sm:my-14 md:my-16 ${double ? 'border-t-2 border-double border-gray-950 bg-transparent' : 'opacity-20'}`} />
);

const Section: React.FC<{ label?: string; children: React.ReactNode }> = ({ label, children }) => (
  <section className="mb-16 sm:mb-20 md:mb-24 relative">
    {label && (
      <div className="marginalia mb-6 sm:mb-8 opacity-90">
        [{label}]
      </div>
    )}
    <div className="w-full">
      {children}
    </div>
  </section>
);

const ServiceAccordion: React.FC<{ 
  num: string; 
  title: string; 
  features: string[] 
}> = ({ num, title, features }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 sm:mb-8 last:mb-0 border-b border-gray-300 border-opacity-30 pb-6 sm:pb-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-baseline gap-4 group"
      >
        <div className="flex flex-col flex-1 min-w-0">
          <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-stone-500 mb-2">{num}</span>
          <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold group-hover:italic transition-all duration-300 break-words">{title}</h4>
        </div>
        <span className="text-lg sm:text-xl font-serif text-stone-500 select-none flex-shrink-0">{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <div className="mt-6 sm:mt-8 animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-6 sm:gap-x-8">
            {features.map((feature, i) => (
              <li key={i} className="text-xs sm:text-sm font-sans font-medium uppercase tracking-tight text-stone-700 flex items-start">
                <span className="mr-2 sm:mr-3 opacity-40 flex-shrink-0">—</span>
                <span className="break-words">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const PersonnelRow: React.FC<{ name: string; linkedin: string; x?: string }> = ({ name, linkedin, x }) => (
  <div className="py-4 sm:py-6 border-b border-stone-300 border-opacity-30 last:border-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
    <p className="text-xl sm:text-2xl font-serif font-bold">{name}</p>
    <div className="flex gap-4">
      {x && (
        <a 
          href={x} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-stone-500 hover:text-black transition-colors"
          aria-label={`${name}'s X`}
        >
          <IconX />
        </a>
      )}
      <a 
        href={linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-stone-500 hover:text-black transition-colors"
        aria-label={`${name}'s LinkedIn`}
      >
        <IconLinkedIn />
      </a>
    </div>
  </div>
);

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <div className="paper-sheet max-w-3xl mx-auto py-12 sm:py-16 px-4 sm:px-6 md:px-12 md:py-32">
      
      {/* Header */}
      <header className="mb-16 sm:mb-24 md:mb-32">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0 mb-12 sm:mb-16 md:mb-20 text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-stone-500">
          <div>Ref: MZ-2025-ARCHIVE</div>
          <div className="text-left sm:text-right">{currentDate}</div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold mb-4 sm:mb-6 tracking-tighter uppercase italic leading-none">
          Mark Z
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-stone-600 font-sans font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-8 sm:mb-12 break-words">
          Agency for Narrative & Systematic Execution
        </p>
        <div className="w-12 sm:w-16 h-1 bg-stone-900" />
      </header>

      {/* Manifesto */}
      <Section label="Manifesto">
        <p className="text-xl sm:text-2xl md:text-3xl leading-snug text-stone-900 font-serif dropcap font-medium">
          Mark Z operates as an end-to-end digital partner for high-stakes projects. We build systems that are silent, precise, and permanent. We prioritize structural integrity over ephemeral trends.
        </p>
      </Section>

      <Divider />

      {/* Services Dropdown Section */}
      <Section label="Services">
        <ServiceAccordion 
          num="01 — Design Systems & UX"
          title="Interface Architecture"
          features={[
            "Interface architecture & product design",
            "UX research & user flow mapping",
            "Wireframing & low-fidelity prototypes",
            "High-fidelity UI design (Figma)",
            "Design systems & component libraries",
            "Accessibility & usability audits",
            "Product redesigns & UX optimization",
            "Conversion-focused layout design"
          ]}
        />
        
        <ServiceAccordion 
          num="02 — Visual Narrative"
          title="Cinematic Content"
          features={[
            "Cinematic video & content editing",
            "Short-form edits (Reels, Shorts, TikTok)",
            "Long-form YouTube & podcast edits",
            "Documentary-style brand films",
            "Motion graphics & animated titles",
            "Color grading & sound design",
            "Social media video assets",
            "Ad creatives & performance edits"
          ]}
        />

        <ServiceAccordion 
          num="03 — Web Infrastructure"
          title="End-to-End Builds"
          features={[
            "End-to-end website builds",
            "One-page & multi-page websites",
            "Landing pages & funnels",
            "Web apps & dashboards",
            "Frontend development (React / Next / Webflow)",
            "Backend integrations & APIs",
            "Performance optimization & SEO",
            "Security, hosting & deployment"
          ]}
        />

        <ServiceAccordion 
          num="04 — Automation"
          title="AI Workflows"
          features={[
            "AI workflows & internal systems",
            "Custom AI agents",
            "Workflow automation (Zapier / Make / custom)",
            "CRM & internal ops automation",
            "AI-powered content pipelines",
            "Data dashboards & reporting systems",
            "Internal tools & admin panels",
            "Process audits & automation strategy"
          ]}
        />
      </Section>

      <Divider />

      {/* Archives / Portfolio */}
      <Section label="Archives">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-8 sm:mb-10 tracking-tight">Portfolio & Case Studies</h3>
        
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Design Portfolio Specific Area */}
          <div className="group">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0 border-b border-stone-300 border-opacity-50 pb-2 group-hover:border-black transition-all duration-300">
              <h4 className="text-xl sm:text-2xl font-serif font-bold italic">Design Portfolio [Archive]</h4>
              <a 
                href="https://www.figma.com/design/OvqW4VEF4Y6brvmXvfXWXZ/Mark-Z?node-id=0-1&p=f&t=LdYcShSvVmQVzHDk-0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-stone-600 hover:text-black font-bold whitespace-nowrap"
              >
                VIEW FIGMA
              </a>
            </div>
            <p className="text-sm sm:text-base text-stone-600 font-serif mt-3 italic leading-relaxed">Our current collection of UI/UX, brand identity, and systematic design work.</p>
          </div>

          {[
            { name: "Nexus-9 System", type: "AI SYSTEMS", desc: "Autonomous workflow architecture for an London-based VC firm." },
            { name: "The Aethelgard Protocol", type: "WEB & IDENTITY", desc: "A rigorous design system for high-stakes information density." },
            { name: "Modern Stoic Films", type: "VIDEO NARRATIVE", desc: "Cinematic documentary series generating 2.5M+ impressions." }
          ].map((project, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0 border-b border-stone-300 border-opacity-50 pb-2">
                <h4 className="text-xl sm:text-2xl font-serif font-bold break-words">{project.name}</h4>
                <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-stone-600 whitespace-nowrap">{project.type}</span>
              </div>
              <p className="text-sm sm:text-base text-stone-600 font-serif mt-3 italic leading-relaxed">{project.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Personnel (About Us) */}
      <Section label="About Us">
        <div className="max-w-xl">
          <p className="text-lg sm:text-xl text-stone-600 font-serif italic mb-8 sm:mb-10 leading-relaxed">
            Mark Z is a specialized partnership of four operators focused on narrative clarity and systematic execution.
          </p>
          <div className="border-t border-stone-300 border-opacity-30">
            <PersonnelRow 
              name="Hriday Kadam" 
              linkedin="https://www.linkedin.com/in/hridaykadam/" 
              x="https://x.com/hridaykadam" 
            />
            <PersonnelRow 
              name="Aryan Kumar" 
              linkedin="https://www.linkedin.com/in/aryankumarr16/" 
              x="https://x.com/aryan1612kumar" 
            />
            <PersonnelRow 
              name="Rachit Thakur" 
              linkedin="https://www.linkedin.com/in/rachit-thakur007/" 
              x="https://x.com/RachitThakur146" 
            />
            <PersonnelRow 
              name="Praveen Kumar" 
              linkedin="https://www.linkedin.com/in/praveen-kumar-5052a3299/" 
              x="https://x.com/Praveenkumarj2x"
            />
          </div>
        </div>
      </Section>

      {/* Inquiry Block */}
      <footer className="mt-20 pb-20 sm:pb-40">
        <div className="bg-stone-200 bg-opacity-30 p-6 sm:p-8 md:p-12 border border-stone-300">
          <div className="marginalia mb-6 sm:mb-8">[Inquiry]</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8 md:mb-10 leading-tight sm:leading-none tracking-tighter">
            Secure the foundation.
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-serif text-stone-700 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            Currently accepting commissions for next quarter. If your project demands this level of precision, we invite you to reach out.
          </p>
          <a 
            href="mailto:markz.agency2025@gmail.com" 
            className="inline-block text-xl sm:text-2xl md:text-3xl font-serif font-bold text-stone-900 border-b-2 border-stone-900 pb-2 hover:opacity-70 transition-opacity break-all sm:break-normal"
          >
            markz.agency2025@gmail.com
          </a>
        </div>
        
        <div className="mt-16 sm:mt-24 md:mt-32 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8 text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-stone-500">
          <div>
            <p>© {currentYear} Mark Z Studio</p>
            <p>India — Remote — Global</p>
          </div>
          <div className="text-left sm:text-right">
            <p>Digital Edition V3.5.0</p>
            <p>Decentered Systematics</p>
          </div>
        </div>
      </footer>

      {/* Watermark (Desktop Only) */}
      <div className="fixed bottom-12 right-12 pointer-events-none opacity-[0.03] select-none hidden lg:block">
        <div className="text-[15rem] font-serif font-bold leading-none">MZ</div>
      </div>

    </div>
  );
};

export default App;
