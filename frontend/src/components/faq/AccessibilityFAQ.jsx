import { accessibilityFaqs } from "../../data/faqs/accessibility";

export default function AccessibilityFAQ() {
  return (
    <section
      aria-labelledby="accessibility-title"
      className="py-20 px-6 bg-white text-black border-b-4 border-black"
    >

      <h2
        id="accessibility-title"
        className="text-4xl font-black uppercase mb-8"
      >
        Accessibility
      </h2>

      <div className="space-y-0">

        {accessibilityFaqs.map((faq) => (

          <div
            key={faq.id}
            className="border-t-4 border-black py-8"
          >

            <h3 className="text-2xl font-black uppercase">
              {faq.q}
            </h3>

            <p className="mt-4 text-base font-bold leading-relaxed normal-case max-w-4xl">
              {faq.a}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}