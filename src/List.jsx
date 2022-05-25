import axios from "axios";
import React, { useEffect, useState } from "react";

function List() {
  const [customers, setCustomers] = useState([]);

  //Au chargment du composant, on va chercher les customers
  useEffect(() => {
    axios
      .get("http://apista2.herokuapp.com/api/customers?populate=*")
      .then((response) => response.data["data"])
      .then((data) => setCustomers(data))
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id.</th>
            <th>Client</th>
            <th>Contact</th>
            <th>Ville</th>
            <th>Photo</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.attributes.name}</td>
              <td>{customer.attributes.contact}</td>
              <td>{customer.attributes.ville}</td>
              <td>
                <img
                  width="40px"
                  src={customer.attributes.adress}
                  alt="test img"
                />
                {/* <img
                  src={customer.attributes.image.data.map((img) => (
                    <div key={img.id}>{img.attributes.url}</div>
                  ))}
                  alt="img"
                /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
