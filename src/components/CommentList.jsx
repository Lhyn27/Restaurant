import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";


export function CommentList() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        api.get(`/restaurants/${id}`)
          .then(response => {
            setRestaurant(response.data);
          })
          .catch(error => {
            console.error('Error fetching restaurant details', error.message);
          })
    }, [id]);

    const fetchRestaurant = async () => {
        try {
            const response = await api.get(`/restaurants/${id}`);
            setRestaurant(response.data);
        } catch (error) {
            console.log(error, error.message);
        }
    }

    async function deleteComment(id) {
        console.log(`Eliminando comentario ${id}`);
        try {
            const response = await api.delete(`/comments/${id}`);
            console.log(response);
            alert('Comentario eliminado');
            fetchRestaurant()
        } catch (error) {
            console.log(error.message);
        }
    }

    if (!restaurant) {
        return <p>Loading...</p>;
    }

    return (
        <div> 
            <h3>Comments:</h3>
            <ul className="list-group">
                {restaurant.comments.map(comment => (
                    <li key={comment.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span><strong>{comment.name}</strong>: {comment.description} {comment.rating}</span> 
                        <button onClick={() => deleteComment(comment.id)} 
                        className="btn btn-danger btn-sm">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}