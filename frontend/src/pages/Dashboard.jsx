import { Button } from "react-bootstrap"
import Navigation from "../components/Navigation"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"

export const Dashboard = ({ movePage, setData }) => {

    const activities = ["Eat", "Artisans", "Culture", "Exercise", "Adventures"]

    const [savedLists, setSavedLists] = useState([])

    useEffect(() => {
        let stringData = localStorage.getItem("savedLists")
        if (stringData != null) {
            let data = JSON.parse(stringData)
            setSavedLists(data)
        }
    }, [])

    return (
        <div className="bg-landing">
            <Navigation movePage={movePage} />
            <div className="row justify-content-center align-items-center">
                <div className="text-center col-10 col-md-8">
                    <div className="p-5 bg-light rounded-3">
                        <h2 className="fw-bold fs-1">What do you want to explore today?</h2>
                        {
                            activities.map((activity) => {
                                return (
                                    <Button key={activity} onClick={() => { setData(activity); movePage("Tinder") }}>{activity}</Button>
                                )
                            })
                        }
                        <Button onClick={() => { movePage("Landing") }}>Take the test again!</Button>
                    </div>

                </div>
            </div>
            <div>
                <h2>Your previous lists!</h2>
                <div className="list-container">
                    {
                        savedLists.length != 0 &&
                        <>

                            {
                                savedLists.map((item) => {
                                    return (
                                        <div className="list">
                                            {
                                                item.map((item) => {
                                                    return (
                                                        <div className="list-item">
                                                            <h3>{item.name}</h3>
                                                            <p>{item.description}</p>
                                                            {/* <Button>{item.name}</Button> */}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </>
                    }
                    {
                        savedLists.length == 0 &&
                        <p>You don't have any saved lists!</p>
                    }
                </div>
            </div>
            <Footer />

        </div>
    )
}