import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {

    const pin = <FontAwesomeIcon icon={faLocationPin} />
    const edit = <FontAwesomeIcon icon={faPencil} />
    const trash = <FontAwesomeIcon icon={faTrash} />

    return (
        <div className="container">
            <div>
                <img alt="poster" src={props.item.image} className="img" />
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
                    <span>Start date:{props.item.startDate} </span>
                    <span>- End date: {props.item.endDate}</span>
                </div>
                <p className="description"> {props.item.description}  </p>
            </div>
            <div className="cardButtons">


                <button className="edit-pushable button-pushable" role="button">
                    <span className="edit-shadow button-shadow"></span>
                    <span className="edit-edge button-edge"></span>
                    <span className="edit-front button-front text">
                        {edit}
                    </span>
                </button>

                <button className="trash-pushable button-pushable" role="button">
                    <span className="trash-shadow button-shadow"></span>
                    <span className="trash-edge button-edge"></span>
                    <span className="trash-front button-front text">
                        {trash}
                    </span>
                </button>

            </div>
        </div>
    )
}