import { profile } from "../data";

function Contact() {
  const whatsappLink =
    "https://wa.me/" +
    profile.phone +
    "?text=" +
    encodeURIComponent("Namaste, mujhe website banwani hai");
  const callLink = "tel:+" + profile.phone;

  return (
    <section className="py-12">
      <h2 className="text-2xl text-black font-bold">
        Make Your Business Look Professional
      </h2>
      <p className="text-stone-900">Free consultation – Need of one message.</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={callLink}
          className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Contect Us
        </a>
        <a
          href={whatsappLink}
          className="border-2 border-orange-600 text-orange-600 font-semibold px-6 py-3 rounded-xl"
        >
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}

export default Contact;
