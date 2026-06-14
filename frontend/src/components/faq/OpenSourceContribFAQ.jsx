import { openSourceContribFaqs } from "../../data/faqs/openSourceContrib";
import FAQAccordion from "./FAQAccordion";

export default function OpenSourceContribFAQ() {
  return (
    <section
      aria-labelledby="opensource-title"
      className="py-20 px-6 bg-white text-black border-b-4 border-black"
    >

      <h2
        id="opensource-title"
        className="text-4xl font-black uppercase mb-8"
      >
        OPEN SOURCE CONTRIBUTION
      </h2>

      <FAQAccordion faqs={openSourceContribFaqs} />

    </section>
  );
}