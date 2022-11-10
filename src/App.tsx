import './App.css';
import Button from './components/Button';
import Card from './components/Card';

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

function App() {
  return (
    <div className="App">
      {projects.map((project) => (
        <Card title={project.title} description={project.description} tasks={project.tasks} picURL={project.picURL} techstack={project.techstack} />
      ))}
    </div>
  );
}

export default App;
