import React from "react";
import { useState, useEffect } from 'react';
import Header from "./Header";
import Card from "./Card";
import Data from '../Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'


export default function Journal() {
  const globe = <FontAwesomeIcon icon={faGlobeAmericas} />


  const [data, setData] = useState("")

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("data"))
    setData(d)
    console.log(d)
  }, [])


  console.log(data)

  return (
    <div className="journal">
      <Header icon={globe} title={"My Travel Journal"} />
      {data.length > 0 ?
        data.map(item => <Card key={item.location} item={item} />)
        :
        <div className="empty">
          Your journal is empty!!! <br /> Start writting about the magical moments you have experienced.
        </div>
      }
    </div>
  )
}