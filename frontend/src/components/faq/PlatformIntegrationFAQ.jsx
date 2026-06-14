import { platformIntegrationFaqs } from "../../data/faqs/platformIntegration";
import FAQAccordion from "./FAQAccordion";

export default function PlatformIntegrationFAQ() {
  return (
    <section
      id="platform-integration"
      aria-labelledby="platform-title"
      className="py-20 px-6 bg-white text-black border-b-4 border-black"
    >
      <h2
        id="platform-title"
        className="text-4xl font-black uppercase mb-8"
      >
        PLATFORM INTEGRATIONS
      </h2>

      <FAQAccordion faqs={platformIntegrationFaqs} />
    </section>
  );
}