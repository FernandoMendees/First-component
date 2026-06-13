import Header from "../components/header";
import Hero from "../components/hero";
import Card from "../components/cards";
import Footer from "../components/footer";

const Home = () => {
    return (
        <main>
            <section className="content">
                <Header />
                <Hero />
                <div className="div-cards">
                    <Card title="Por quê?" description="Estou estudando React para construir interfaces mais modernas, organizadas e eficientes, melhorando a forma como desenvolvo aplicações web." />
                    <Card title="Objetivo" description="Evoluir no front-end, consolidar meus conhecimentos em JavaScript e me preparar melhor para oportunidades no mercado de trabalho." />
                    <Card title="Foco" description="Praticar com projetos reais, criar componentes reutilizáveis e escrever código mais limpo e bem estruturado." />
                </div>
            </section>
            <Footer></Footer>
        </main>
        
    );
}

export default Home;