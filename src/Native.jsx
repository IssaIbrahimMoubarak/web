import React, { useEffect, useState } from "react";

function Native() {
  const [customers, setCustomers] = useState([]);

  const Customerslist = async () => {
    {
      try {
        const response = await fetch(
          "https://apista2.herokuapp.com/api/customers/"
        ).then((res) => res.json());

        console.log(response.data["4"].id); // pour id
        console.log(response.data["4"].attributes); // pour l'attribute
        const { id, name, adress, contact, ville } =
          response.data["4"].attributes; // C'est pas bon !!!
        setCustomers({ name, adress, contact, ville, id });
      } catch (error) {
        console.log("results.data", error.res);
      }
    }
  };

  useEffect(() => {
    Customerslist();
  }, []);
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nom</th>
            <th>Contact</th>
            <th>Adresse</th>
          </tr>
        </thead>
        <tbody>
          <tr key={customers.id}>
            <td>{customers.id}</td>
            <td>{customers.name}</td>
            <td>{customers.contact}</td>
            <td>{customers.ville}</td>
            <td>
              <img width="40px" src={customers.adress} alt="img RAS" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Native;
