import React from "react";
import { useLocation } from 'react-router-dom';

export default function Profile(props) {
    const location = useLocation();
    const data = location.state;
    console.log(data);

    return (
        <div>
          <h1>User Profile</h1>
          <p>User ID: {data}</p>
        </div>
      );
}