import React from "react"

export default function Card(props) {
    return (
        <div className="container">
            <img alt="item" src={`images/${props.item.img}`} className="img" />
            <div className="info">
                <div className="locationUrl">
                    <img alt="ping" src="images/ping.png" className="ping" />
                    <a href={props.item.googleMapsUrl}>{props.item.location}</a>
                </div>
                <span className="title">{props.item.title}</span>
                <div className="date">
                    <span>{props.item.startDate}</span>
                    <span> - {props.item.endDate}</span>
                </div>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}