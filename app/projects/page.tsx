import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js and Tailwind.",
      link: "#",
      image: "/images/portfolio.png",
    },
    {
      title: "To-Do App",
      description: "A simple to-do application built with React.",
      link: "#",
      image: "/images/todo.png",
    },
    {
      title: "Weather App",
      description: "Shows weather information using API integration.",
      link: "#",
      image: "/images/weather.png",
    },
  ];

  return (
    <section className="min-h-screen p-10 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
