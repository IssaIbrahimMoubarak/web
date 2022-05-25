import React, { useState } from "react";
import axios from "axios";

const Create = (props) => {
  const [customers, setCustomers] = useState({
    name: "test",
    ville: "test",
  });

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCustomers({ ...customers, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://apista2.herokuapp.com/api/customers",
        customers
      );
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }

    // const response = await axios.post(
    //   "http://apista2.herokuapp.com/api/customers",
    //   customers
    // );
    //   .then((response) => response.data["attributes"]);
    // const { name, adress } = response;
    // setCustomers({ name, adress });

    // ("http://apista2.herokuapp.com/api/customers", customers);

    // //console.log(customers.name);

    // // POST request using fetch inside useEffect React hook
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title: "React POST" }),
    // };
    // fetch("http://apista2.herokuapp.com/api/customers", requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => setCustomers(data.id));

    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // // fetch("http://apista2.herokuapp.com/api/customers", {
    // //   method: "POST",
    // //   headers: { "Content-type": "application/json" },
    // //   body: JSON.stringify({ setCustomers }),
    // // });
  };
  return (
    <>
      <h1>Add new</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={customers.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="ville"
          value={customers.ville}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Enregistrer</button>
        </div>
      </form>
    </>
  );
};

export default Create;
