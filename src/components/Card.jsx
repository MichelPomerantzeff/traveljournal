import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {

    const pin = <FontAwesomeIcon icon={faLocationPin} />

    return (
        <div className="card" >
            <div>
                <img alt="poster" src={props.item.image ? props.item.image : "images/spare-image.jpg"} className="img" />
            </div>
            <div className="info">

                <div className="title">
                    <span className="pin">{pin}</span>
                    <span>{props.item.name}</span>
                </div>

                <div className="date">
                    <span>Date: {props.item.startDate} </span>
                </div>

                <p className="description"> {props.item.description}  </p>

            </div>
        </div>
    )
}