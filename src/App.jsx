import React from "react";
import "./App.css";
import Card from "../Components/Card/Card";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-8">Welcome To My Card</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mt-4">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
