import React from "react";
import Profile from "./Profile";

export default {
    path: "profile",
    children: [
      {
        index: true,
        element: <Profile />,
      },
    
    ],
  };
