import { useState } from "react";
import api from "../api";

export function CreateRestaurant() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        console.log('Se previno la accion por defecto');

        console.log(name, address, image);
        const restaurant = new FormData();
        restaurant.append('name', name);
        restaurant.append('address', address);
        restaurant.append('image', image);

        try {
            await api.post('/restaurants/', restaurant, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Restaurante agregado');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="container mt-4 border p-2">
            <h2>Create Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image:</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}