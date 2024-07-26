import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export function RestaurantEdit() {
    const { id } = useParams();

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [image, setImage] = useState(null);

    useEffect(()=>{
        const fetchRestaurant = async () => {
            try {
                const response = await api.get(`/restaurants/${id}}/`);
                setName(response.data.name);
                setAddress(response.data.address);
            } catch (error) {
                console.log(error, error.message);
            }
        };
        fetchRestaurant();
    }, [id])
    
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        console.log('Se previno la accion por defecto');

        console.log(name, address, image);
        const restaurant = new FormData();
        restaurant.append('name',name);
        restaurant.append('address',address);
        restaurant.append('image',image);

        try {
            await api.put(`/restaurants/${id}`, restaurant, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            });
            alert('Restaurante editado')
        } catch (error) {
            console.log(error, error.message);
        }
    };

    const handleImageChange = (evento) => {
        setImage(evento.target.files[0]);
    }

    return (
        <div className="container mt-4 border p-2">
            <h2>Edit Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={name}
                        onChange={(e)=> setName(e.target.value)} 
                        required 
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)} 
                        required 
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image:</label>
                    <input 
                        type="file" 
                        className="form-control"
                        onChange={handleImageChange}
                        
                        />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}