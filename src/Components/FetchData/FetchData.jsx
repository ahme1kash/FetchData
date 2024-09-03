import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchData = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/posts")
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // },
    const getposts = async () => {
      try {
        // const response = await fetch(
        //   "https://jsonplaceholder.typicode.com/posts"
        // );

        // const posts = await response.json();
        // console.log(posts);

        const posts = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const post_data = posts.data;
        setUserData(post_data);
        console.log(post_data);
      } catch (err) {
        console.log(err);
      }
    };
    getposts();
  }, []);

  return (
    <>
      <div className="continer">
        <div className="mt-3">
          <h3>
            Fetch Data from API with the help of axios library and display on
            the screen.
            {userData?.[0]?.id}
          </h3>
          <table style={{ fontFamily: "arial", width: "100%" }}>
            <thead>
              <tr>
                <th>USER-ID</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((user, idx) => {
                return (
                  <tr>
                    <td>{user.userId}</td>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.body}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Complete</td>
                <td>Complete</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default FetchData;
