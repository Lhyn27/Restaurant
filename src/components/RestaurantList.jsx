import { useEffect, useState } from "react";
import api from "../api";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.json';
import { Link } from "react-router-dom";


export function RestaurantList(){
    const [listRestaurants, setlistRestaurants] = useState([]);

    const fetchRestaurants = async () => {
        try {
            const response = await api.get('/restaurants/');
            setlistRestaurants(response.data);
        } catch (error) {
            console.log(error, error.message);
        }
    }
    
    useEffect(() =>{
        fetchRestaurants()
    }, [])

    async function deleteRestaurant(id) {
        console.log(`Eliminando restaurante ${id}`);
        try {
            const response = await api.delete(`/restaurants/${id}`);
            console.log(response);
            alert('Restaurante eliminado');
            fetchRestaurants()
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Restaurants</h1>
            <ul className="list-group">
                {
                    listRestaurants.map(r => <li className="list-group-item d-flex justify-content-between align-items-center" key={r.id}>
                        <Link to={`/detail-restaurant/${r.id}`}>{r.name}</Link>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteRestaurant(r.id)}>
                            Delete
                        </button>
                    </li>)
                }
            </ul>
        </div>
    )
}