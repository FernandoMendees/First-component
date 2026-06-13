import "../styles/cards.css"

interface CardProps {
    title: string,
    description: string
}

const Card = (props: CardProps) => {
    return <div className="card">
                <h3 className="title-card">{props.title}</h3>
                <hr/>
                <p>
                    {props.description}
                </p>

            </div>
}
export default Card;