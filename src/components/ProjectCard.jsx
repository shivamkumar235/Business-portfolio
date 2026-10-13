// Ek demo website ka card. Data props se aata hai.
// import zaika from "../assets/zaika.png";
const allImages = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});
function ProjectCard(props) {
  const imageSrc = allImages["../assets/" + props.image];

  return (
    <div className="bg-white border border-amber-200 rounded-2xl p-5">
      {/* <div className="h-24 rounded-xl bg-amber-100 flex items-center justify-center text-4xl"> */}
      {/* <img
        className="h-24 rounded-xl flex items-center justify-center"
        src="/zaika.png"
        alt=""
      /> */}
      <img
        className="h-24 rounded-xl flex items-center justify-center"
        src={imageSrc}
        alt="Mera photo"
      />
      {/* </div> */}
      <h3 className="text-lg font-semibold mt-3">{props.title}</h3>
      <p className="text-stone-600">{props.type}</p>
      <a
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-orange-600 font-semibold"
      >
        View →
      </a>
    </div>
  );
}

export default ProjectCard;
