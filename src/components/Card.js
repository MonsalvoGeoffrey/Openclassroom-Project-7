import '../styles/Card.css';
import { Link } from 'react-router-dom';



function Card({ name, cover, hostId }) {
    return (
        <Link to={'/host/' + hostId} className="card">
            <img src={cover} alt="" className='card-image' />
            <div className="card-body">
                <p className="card-title">{name}</p>
            </div>
        </Link>
    );
}

export default Card;