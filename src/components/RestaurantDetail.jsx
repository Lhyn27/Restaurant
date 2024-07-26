import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";


export function RestaurantDetail() {
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

    if (!restaurant) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-4">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <img src={restaurant.image} alt="restaurant" className="img-fluid"/>
            <h3 className="mt-4">5</h3>
            <CommentList/>
            <CommentForm/>
            <Link className="btn btn-primary mt-4" to={`/edit-restaurant/${restaurant.id}`}>Edit Restaurant</Link>
        </div>
    )
}
