import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Author from "@/components/Author";

function About() {
  return (
    <main>
      <Menu/>
      <h2>Sobre a página</h2>
      <Author name={"Autor"} courses = {{price: 123, workload: "20 horas"}}/>
      <Footer/>
    </main>
    
  )
}

export default About;