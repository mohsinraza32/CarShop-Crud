import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";

export const CarList = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);

    const API_URL = "https://6741ec5be4647499008f405b.mockapi.io/api/carshop";

    const getCars = async () => {
        setLoading(true);
        try {
            const response = await axios.get(API_URL);
            const { data, status } = response;

            if (status === 200) {
                setLoading(false)
                setCars(data);
            }
        } catch (error) {
            setLoading(true)
            console.log(error);
        }
    }

 const handleDelete = (id) => {
    console.log(id);
    
   axios.delete(`${API_URL}/${id}`

   ).then(()=>{
     getCars();
   })
 
 }
 useEffect(() => {
    getCars();
}, [])
return (
    <>
        <div className="container">
            <Link to="/" className="addcar-btn">Add Car</Link>
            <div className="car-table">
                <h2>CARLIST</h2>
                {
                    loading ? (<>
                        <div className="loader"></div>
                    </>) :
                        (
                            <>
                                <table className="cardata" border="1px">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Company-Name</th>
                                            <th>Model</th>
                                            <th>Color</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                
                                            cars.map((item, index) => {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td>{item.id}</td>
                                                            <td>{item.company_name}</td>
                                                            <td>{item.model_no}</td>
                                                            <td>{item.color}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>{item.price}</td>
                                                            <td>
                                                            <button type="submit" className="edit-btn">Edit</button>
                                                            </td>
                                                            <td>
                                                            <button type="submit" className="delete-btn" onClick={()=>handleDelete(item.id)}>Delete</button>
                                                            </td>

                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }

                                    </tbody>

                                </table>
                            </>
                        )
                }

            </div>
        </div>
    </>
)
}