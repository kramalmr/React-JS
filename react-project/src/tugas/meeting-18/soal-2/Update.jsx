import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./App.css";


const UpdateProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const products = JSON.parse(localStorage.getItem("products"));
    const target = products[id - 1];
    console.log(target);

    const [productName, setProductName] = useState(target.name);
    const [productPrice, setProductPrice] = useState(target.price);
    const [productDescription, setProductDescription] = useState(target.description);
    const handleSubmit = (e) => {
        alert("Product " + target.name + " updated successfully!");
        target.name = productName;
        target.price = productPrice;
        target.description = productDescription;
        products[id - 1] = target;
        localStorage.setItem("products", JSON.stringify(products));
        e.preventDefault();
        navigate("/list");
    }
    
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Product Name" value={productName} required onChange={(e) => setProductName(e.target.value)} />
                <input type="number" placeholder="Product Price" value={productPrice} required onChange={(e) => setProductPrice(e.target.value)}/>
                <input type="text" placeholder="Product Description" value={productDescription} required onChange={(e) => setProductDescription(e.target.value)}/>
                <a href="" id="cancel" onClick={() => navigate("/list")}>Cancel</a>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateProduct