import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

export const CarShop = () => {
    const navigate = useNavigate();

    const[formData,setFormData] = useState({
        company_name:"",
        model_no:"",
        color:"",
        quantity:"",
        price:""

    })
    const[loader,setLoader] = useState(false);

    const API_URL = "https://6741ec5be4647499008f405b.mockapi.io/api/carshop";

    const handleInputChange = (e) => {
       const value = e.target.value;
       const name = e.target.name;

       setFormData({
        ...formData,
        [name]:value
       })
    }
    
    const handleSubmit = async (e) => {
       setLoader(true);
       e.preventDefault();
       try {
           const response = await axios.post(API_URL,formData);
           const{status} = response;
           if (status == 201) {
            setLoader(false);
            navigate('/carlist');
           }
              
           }catch (error) {
            setLoader(false);
            console.log(error);
       }
    }
           
    return (
        <>
            <div className="container">
            <Link to="/carlist" className="back-btn">Back</Link>
            <h1>CARSHOP</h1>
                <div className="form-data">
                    <form className="car-form" onSubmit={handleSubmit}>
                        <label>Company-Name</label>
                        <input type="text" className="form-input" name="company_name" onChange={handleInputChange}/>
                        <label>Model</label>
                        <input type="text" className="form-input" name="model_no" onChange={handleInputChange}/>
                        <label>Color</label>
                        <input type="text" className="form-input" name="color" onChange={handleInputChange}/>
                        <label>Quantity</label>
                        <input type="number" className="form-input" name="quantity" onChange={handleInputChange}/>
                        <label>Price</label>
                        <input type="number" className="form-input" name="price" onChange={handleInputChange}/>
                        <input type="submit" className="form-btn" value={loader ? "submiting...." : "Add"} disabled={loader ? "disabled" : ""}/>
                    </form>
                </div>
            </div>
        </>
    )
}