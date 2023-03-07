import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://express-t4.onrender.com/api/users"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data !== null ? (
        <ul>
          {data.map((user) => (
            <React.Fragment key={user.id}>
              <li>
                <Link
                  to={{
                    pathname: "/profile",
                    state: { userId: user.id },
                  }}
                >
                  {user.name}
                </Link>
                <img src={user.picture} />
              </li>
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Users;
