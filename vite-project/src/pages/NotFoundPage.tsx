import { Link } from 'react-router';

function NotFound() {
    return (
        <div>
        <h1>404 Not Found</h1>
        <Link to={'/'}> Volver al inicio </Link>
        </div>
    );
}

export default NotFound;