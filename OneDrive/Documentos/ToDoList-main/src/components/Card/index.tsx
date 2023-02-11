import './card.css';

interface CardProps {
    task: string;
}

export default function Card({task} : CardProps) {
    return (
        <div className='container'>
            <p>{task}</p>
        </div>
    )
}