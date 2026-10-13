import { projects } from "../data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="demos" className="relative py-12">
      <div className="relative z-15">
        {" "}
        <h2 className="text-2xl text-black font-bold">Demo Websites</h2>
        <p className="text-stone-900">
          Kisi par bhi click karke live demo dekho.
        </p>
        <div className="grid gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              type={item.type}
              image={item.image}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
