import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `Soy un desarrollador Frontend con formación académica en programación. Completé la Diplomatura en Programación por la Universidad Tecnológica Nacional de Mar del Plata y actualmente curso la Tecnicatura Universitaria en Programación. Me apasiona el diseño y desarrollo de interfaces web limpias, accesibles y funcionales. Tengo conocimientos en tecnologías como HTML, CSS, JavaScript, React y consumo de APIs. Me considero una persona autodidacta, con ganas de seguir creciendo en el mundo del desarrollo web. Actualmente busco mi primera experiencia laboral para insertarme en el sector IT y seguir aprendiendo.`;

export const ABOUT_TEXT = `Soy un desarrollador Frontend con formación académica en programación. Completé la Diplomatura en Programación y actualmente curso la Tecnicatura Universitaria en Programación. Me apasiona el diseño y desarrollo de interfaces web limpias, accesibles y funcionales. Tengo conocimientos en tecnologías como HTML, CSS, JavaScript, React y consumo de APIs. Me considero una persona autodidacta, con ganas de seguir creciendo en el mundo del desarrollo web. Fuera del código, me interesa aprender constantemente y mantenerme al tanto de las últimas tendencias tecnológicas.`;

export const STUDIES = [
  {
    year: "En curso",
    title: "Tecnicatura Universitaria en Programación",
    institution: "Universidad Tecnológica Nacional - Facultad Regional Mar del Plata",
  },
  {
    year: "2023 - 2024",
    title: "Diplomatura en Programación",
    institution: "Universidad Tecnológica Nacional - Facultad Regional Mar del Plata",
  },
  {
    year: "2020 - 2023",
    title: "Tecnicatura Universitaria en Comunicación Audiovisual",
    institution: "Universidad Nacional de Mar del Plata",
  },
];
export const PROJECTS = [
  {
    title: "Sitio Web de Películas",
    image: project1,
    description:
      "Sitio web de películas que usa la API de The Movie Database (TMDb), que muestra las películas más nuevas y populares de la actualidad.",
    technologies: ["React", "Tailwind CSS", "React Router", "APIs REST"],
    demo: "https://adrianzappala.github.io/peliculas-react/",  // <-- aquí
  },
  
  {
    title: "Reproductor Musical",
    image: project2,
    description:
      "Mini reproductor musical que permite reproducir, pausar y cambiar canciones en una interfaz sencilla y funcional.",
    technologies: ["HTML", "CSS", "Javacript"],
    demo: "https://adrianzappala.github.io/musicplayer/"
  },

  {
    title: "Sitio Web Personal",
    image: project3,
    description:
      "Sitio web personal donde presento mis proyectos, habilidades, formación académica y formas de contacto.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "https://adrianzappala.github.io/dev-portfolio/",  // <-- aquí
  },

  {
    title: "Primer Portfolio",
    image: project4,
    description:
      "Mi primer portfolio personal con proyectos, habilidades y datos de contacto.",
    technologies: ["HTML", "CSS", "JavaScript"],
      demo: "https://adrianzappala.github.io/portfolio/",

  },
];


export const CONTACT = {
  address: "Mar del Plata, Buenos Aires, Argentina",
  email: "avz_f@hotmail.com",
  linkedin: "https://www.linkedin.com/in/adrian-zappala/",
  github: "https://github.com/adrianzappala",
};
