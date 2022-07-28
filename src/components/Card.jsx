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
                <div className="locationUrl">
                    <div className="pin">
                        {pin}
                    </div>
                    <a href="">{props.item.location}</a>
                </div>

                <span className="title">{props.item.name}</span>

                <div className="date">
                    <span>Start date: {props.item.startDate} </span>
                    <span>- End date: {props.item.endDate}</span>
                </div>
                <p className="description"> {props.item.description}  </p>
            </div>
        </div>
    )
}