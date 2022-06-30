import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Data from './Data'


export default function App() {
  const trips = Data.map(item => {
    return (
      <Card
        item={item}
      />
    )
  })
  return (
    <div>
      <Header/>
      {trips}
    </div>
  )
}