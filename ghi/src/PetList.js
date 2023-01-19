import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./Auth";
import { useJwt } from "react-jwt";

function PetList() {
  const [pets, setPets] = useState([]);
  const { token } = useAuthContext();
  //   const { decodedToken, isExpired } = useJwt(token);
  //   const [account, setAccount] = useState({})

  //   useEffect(() => {
  //     async function getAccount() {
  //       const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/account/{account_id}`;
  //       const response = await fetch(url, { Authorization: 'Bearer ${token}' });
  //       if (response.ok) {
  //         const data = await response.json();
  //         setAccount(data);
  //       }
  //     }
  //     getAccount();
  //   }, [setAccount]);

  useEffect(() => {
    async function getPets() {
      const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/pets`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setPets(data);
      }
    }
    getPets();
  }, [setPets]);

  console.log(pets);

  return (
    <div>
      <h1>Your Pets</h1>
      {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-right">
                    <Link to="/models/new/" className="btn btn-primary btn-md px-4 gap-3">Add new pet</Link>
                </div> */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Size</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {pets
            .filter((pet) => pet.account_id === token?.account.id)
            .map((pet) => (
              <tr key={pet.id}>
                <td>{pet.name}</td>
                <td>{pet.breed}</td>
                <td>{pet.size}</td>
                <td>{pet.age}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PetList;
