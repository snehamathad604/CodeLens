import FAQAccordion from "./FAQAccordion";
import { troubleshootingFaqs } from "../../data/faqs/troubleshooting";

export default function TroubleshootingFAQ() {
  return (
    <section
      id="troubleshooting"
      aria-labelledby="troubleshooting-title"
      className="py-20 px-6 bg-white text-black border-b-4 border-black"
    >
      <div className="lg:px-10">

        <h2
          id="troubleshooting-title"
          className="text-4xl font-black uppercase mb-8"
        >
          Troubleshooting
        </h2>

        <FAQAccordion faqs={troubleshootingFaqs} />

      </div>
    </section>
  );
}