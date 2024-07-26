import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RestaurantList } from "./components/RestaurantList";
import { RestaurantDetail } from "./components/RestaurantDetail";
import { CreateRestaurant } from "./components/CreateRestaurant";
import { RestaurantEdit } from "./components/RestaurantEdit";

export function AppRouter() {
    return (
        <Router>
            <Routes>
                    <Route path="/detail-restaurant/:id" element={<RestaurantDetail/>} />
                    <Route path="/list-restaurants/" element={<RestaurantList/>} />
                    <Route path="/create-restaurant/" element={<CreateRestaurant/>}/>
                    <Route path="/edit-restaurant/:id" element={<RestaurantEdit/>}/>
            </Routes>
        </Router>
    )
}