import Layout from "../sections/Layout";
import IndexContent from "../sections/IndexContent";
import About from "../sections/About";
import Skills from "../sections/Skills";
import SpeedDial from "../components/SpeedDial";
// import SectionBreak from "../components/SectionBreak";
import Proyects from "../sections/Proyects";

const colors = [
  "bg-yellow-300",
  "bg-red-600",
  "bg-blue-600",
  "bg-blue-300",
  "bg-slate-400",
  "bg-green-600",
];
const temas = [
  "Desktop y Web",
  "Probabilidad y Estadistica",
  "Bases de datos",
  "Simulacion dinamica",
  "Metodologias Agiles",
  "Algoritmos Geneticos",
];

export default function Home() {
  return (
    <Layout>
      {/* First section  */}
      <IndexContent colors={colors} temas={temas} />
      <About />
      <Skills />
      <Proyects />
      <SpeedDial />
    </Layout>
  );
}
