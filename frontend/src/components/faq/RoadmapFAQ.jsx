import FAQAccordion from "./FAQAccordion";
import { roadmapFaqs } from "../../data/faqs/roadmap";

export default function RoadmapFAQ() {
  return (
    <section
      aria-labelledby="roadmap-title"
      className="py-20 px-6 bg-white text-black border-b-4 border-black"
    >

      <h2
        id="roadmap-title"
        className="text-4xl font-black uppercase mb-8"
      >
        ROADMAP & FUTURE FEATURES
      </h2>

      <FAQAccordion faqs={roadmapFaqs} />

    </section>
  );
}