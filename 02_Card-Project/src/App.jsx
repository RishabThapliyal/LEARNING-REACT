import React from "react";
import Card from "./components/Card";

export default function App() {

  const users = [
    { id: 1, name: "Tyrell Wellick", role: "Senior Web Developer", followers: "1.5M", following: 92 },
    { id: 2, name: "Elliot Alderson", role: "Cyber Security Engineer", followers: "980K", following: 120 },
    { id: 3, name: "Angela Moss", role: "UI/UX Designer", followers: "430K", following: 210 },
    { id: 4, name: "Darlene Alderson", role: "Frontend Developer", followers: "650K", following: 180 },
    { id: 5, name: "Mr. Robot", role: "System Architect", followers: "2.1M", following: 50 },
  ];

  return (
    <div className="parent">
      {users.map((elem) => (
        <Card
          key={elem.id}
          Name={elem.name}
          Role={elem.role}
          NoOfFollowers={elem.followers}
          NoOfFollowing={elem.following}
        />
      ))}
    </div>
  );
}
