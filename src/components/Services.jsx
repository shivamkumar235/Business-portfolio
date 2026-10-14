import { services } from "../data";

function Services() {
  return (
    <section className="relative py-12">
      <div className="  relative z-15">
        {" "}
        <h2 className="text-2xl text-black font-bold">My Services</h2>
        <div className="grid gap-4 mt-5 md:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-amber-200 hover:scale-105 hover:border-green-500 rounded-2xl p-5"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-stone-600 mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
