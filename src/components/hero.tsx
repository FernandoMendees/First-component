import "../styles/hero.css"
import logoReact from "../assets/reactLogo.png"

const Hero = () => {
    return <section className="section-hero">
                <img className="imageHero" src={logoReact} alt="Logo react"/>
                <h1>Minha primeira página usando React</h1>
                <p>
                    Ela marca o início do meu aprendizado usando esse novo framework.
                </p>
            </section>
}

export default Hero;