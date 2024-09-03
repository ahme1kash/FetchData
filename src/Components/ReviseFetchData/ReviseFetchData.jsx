import React, { useEffect, useState } from "react";
import axios from "axios";

const ReviseFetchData = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const users = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const user_data = await response.json();
        setUserData(user_data);
      } catch (err) {
        console.log(err);
      }
    };
    users();
  }, []);
  const tdth = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  };
  return (
    <>
      <div className="container">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={tdth}>Name</th>
              <th style={tdth}>User-Name</th>
              <th style={tdth}>City</th>
              <th style={tdth}>Email</th>
              <th style={tdth}>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td style={tdth}>{user.name}</td>
                  <td style={tdth}>{user.username}</td>
                  <td style={tdth}>{user.address.city}</td>
                  <td style={tdth}>{user.email}</td>
                  <td style={tdth}>{user.address.zipcode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      ;
    </>
  );
};

export default ReviseFetchData;
