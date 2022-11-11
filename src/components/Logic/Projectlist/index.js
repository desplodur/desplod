import Card from '../..//UI/Card';
import styles from './Projectlist.module.css';

export default function Propjectlist(){

    const projects = [{
        title: 'Capstone Project',
        description: 'none',
        tasks: ["Entwicklung einer Web Applikation zum Stellen und Beantworten von Fragen",
          "Entwerfen der UI/UX mit Figma",
          "Entwicklung und Implementierung von UI/UX mit React und Styled Components",
          "Entwicklung und Implementierung des Backends und dessen Datenbank mit Hilfe von Node.js  und MongoDB",
          "Realisierung von Real-Time Aktualisierung mithilfe von Optimistic Updates. ",
          "Agile Entwicklung mittels der Scrum-Methode"
      ],
        picURL: '',
        techstack: ["JavaScript", "React", "Node.js", "UI/UX", "Figma", "HTML", "CSS", "Storybook", "React Testing Library", "MongoDB", "Mongoose", "Styled Components", "React Query", "Pforte", "VSC"]
      }, {
        title: 'Capstone Project',
        description: 'none',
        tasks: ["Entwicklung einer Web Applikation zum Stellen und Beantworten von Fragen",
          "Entwerfen der UI/UX mit Figma",
          "Entwicklung und Implementierung von UI/UX mit React und Styled Components",
          "Entwicklung und Implementierung des Backends und dessen Datenbank mit Hilfe von Node.js  und MongoDB",
          "Realisierung von Real-Time Aktualisierung mithilfe von Optimistic Updates. ",
          "Agile Entwicklung mittels der Scrum-Methode"
      ],
        picURL: '',
        techstack: ["JavaScript", "React", "Node.js", "UI/UX", "Figma", "HTML", "CSS", "Storybook", "React Testing Library", "MongoDB", "Mongoose", "Styled Components", "React Query", "Pforte", "VSC"]
      }];

      return <div className={styles.list}>      {projects.map((project) => (
        <Card title={project.title} description={project.description} tasks={project.tasks} picURL={project.picURL} techstack={project.techstack} />
      ))}</div>
      
}