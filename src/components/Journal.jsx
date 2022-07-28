import React from "react";
import { useState, useEffect } from 'react';
import Header from "./Header";
import Card from "./Card";
import Data from '../Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'



export default function Journal() {
  const globe = <FontAwesomeIcon icon={faGlobeAmericas} />
  const edit = <FontAwesomeIcon icon={faPencil} />
  const trash = <FontAwesomeIcon icon={faTrash} />


  const [data, setData] = useState(() => JSON.parse(localStorage.getItem("travelData")) || [])

  const [dataLength, setDataLength] = useState(0)

  useEffect(() => {
    const travelData = JSON.parse(localStorage.getItem("travelData"))
    setData(travelData)
  }, [dataLength])




  function deleteCard(id) {
    const travelData = JSON.parse(localStorage.getItem("travelData"))
    const deleteItem = travelData.filter(data => data.id !== id)
    localStorage.setItem('travelData', JSON.stringify(deleteItem))
    setDataLength(travelData.length)

}







  return (
    <div className="journal">
      <Header icon={globe} title={"My Travel Journal"} />
      {data.length > 0 ?
        data.map(item => {
          return (

            <div key={item.id} className="container">
              <Card  item={item} data={data} />

              <div className="cardButtons">
                
                {/* <button className="edit-pushable button-pushable" role="button">
                  <span className="edit-shadow button-shadow"></span>
                  <span className="edit-edge button-edge"></span>
                  <span className="edit-front button-front text"> {edit} </span>
                </button> */}

                <button onClick={() => deleteCard(item.id)} className="trash-pushable button-pushable" role="button">
                  <span className="trash-shadow button-shadow"></span>
                  <span className="trash-edge button-edge"></span>
                  <span className="trash-front button-front text"> {trash} </span>
                </button>

              </div>
            </div>

          )
        })
        :
        <div className="empty">
          Your journal is empty!!! <br /> Start writting about the magical moments you have experienced.
        </div>
      }
    </div>
  )
}
