import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './AppRouter';

export function App() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href='.'>Restaurant Reviews</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href='/list-restaurants'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/create-restaurant'>Create Restaurant</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <AppRouter/>
        </div>
    )
}