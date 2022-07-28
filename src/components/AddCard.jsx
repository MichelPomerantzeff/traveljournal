import React from 'react';
import { useState, useEffect } from 'react';
import Header from "./Header";

function AddCard(props) {


    const [data, setData] = useState(() => JSON.parse(localStorage.getItem("travelData")) || [])

    // Save data to localStorage everytime data is updated
    useEffect(() => {
        localStorage.setItem("travelData", JSON.stringify(data))
        console.log(image)
    }, [data])

    const [location, setLocation] = useState(null)
    const [name, setName] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [description, setDescription] = useState(null)
    const [image, setImage] = useState(null)


    function handleLocation(e) { setLocation(e.target.value) }
    function handlename(e) { setName(e.target.value) }
    function handleStartDate(e) { setStartDate(e.target.value) }
    function handleEndDate(e) { setEndDate(e.target.value) }
    function handleDescription(e) { setDescription(e.target.value) }

    function handleImage(e) {
        // setImage(e.target.files[0])

        const reader = new FileReader()

        reader.addEventListener("load", () => {
            setImage(reader.result)
        })

        reader.readAsDataURL(e.target.files[0])
    }

    const generateID = () => Math.round(Math.random() * 10000)

    function handleSubmit(e) {
        // prevent button to submit data
        // e.preventDefault()

        let newData = JSON.parse(localStorage.getItem("travelData"))


        // set data with info from input field
        if (location && name && startDate && endDate && description) {
            setData([...newData, { id: generateID(), location, name, startDate, endDate, description, image }])
        }
    }


    return (
        <div className='addCard'>
            <Header icon={"Add Trip"} />
            <form className='form'>
                <div className='input-wrapper'>

                    <div className='input-section'>
                        <div className='label'>Location:</div>
                        <input onChange={handleLocation} type="text" placeholder='Location' required />
                    </div>

                    <div className='input-section'>
                        <div className='label'>Destination:</div>
                        <input onChange={handlename} type="text" placeholder='Destination' required />
                    </div>

                </div>

                <div className='input-wrapper'>

                    <div className='input-section'>
                        <div className='label'>Start date:</div>
                        <input onChange={handleStartDate} className='inputDate' type="date" placeholder='dd/mm/yyyy' required />
                    </div>
                    <div className='input-section'>
                        <div className='label'>End date:</div>
                        <input onChange={handleEndDate} className='inputDate' type="date" required />
                    </div>

                </div>

                <div className='input-section'>
                    <div className='label'>Image:</div>
                    <input className='file' onChange={handleImage} type="file" accept='image.jpg, image/png' />
                </div>

                <div className='input-section'>
                    <div className='label'>Description:</div>
                    <textarea onChange={handleDescription} name="message" placeholder="Description"
                        required></textarea>
                </div>

                <div className='buttons'>
                    <button onClick={handleSubmit} className='save' type="submit">Save</button>
                    <button className='cancel' type="reset">Cancel</button>
                </div>
            </form>

        </div>
    );
}

export default AddCard;