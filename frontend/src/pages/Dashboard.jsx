import { Button } from "react-bootstrap"
import Navigation from "../components/Navigation"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"

export const Dashboard = ({ movePage, setData }) => {

    const activities = ["Food", "Creativity", "Culture", "Exercise", "Entertainment"]

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
            <div className="row justify-content-center">
                <div className="text-center col-10 col-md-8">
                    <div className="p-5 bg-light rounded-3 mb-4">
                        <h2 className="fw-bold fs-1 mb-4">What do you want to explore today?</h2>
                        {
                            activities.map((activity) => {
                                return (
                                    <Button className="mx-2 mb-4 dashboard-button" key={activity} onClick={() => { setData(activity); movePage("Tinder") }}>{activity}</Button>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
            <div className="row justify-content-center">
                <div className="text-center col-10 col-md-8">
                    <div className="p-5 bg-light rounded-3 footer-space">
                        <h2 className="fw-bold fs-1 mb-4">Your previous lists</h2>
                        <div className="list-container">
                            {
                                savedLists.length != 0 &&
                                <>

                                    {
                                        savedLists.map((item, index) => {
                                            return (
                                                <div className="card mb-4">
                                                    <h3 className="mb-3 mt-3">List {index + 1}</h3>
                                                    <div className="row justify-content-center align-items-stretch">
                                                        {
                                                            item.map((item) => {
                                                                return (
                                                                    <div className="card col-lg-3 col-10 mx-2 mb-4">
                                                                        <h3 className="fs-5 mt-2 mb-2">{item.name}</h3>
                                                                        <p>{item.desc}</p>
                                                                        {/* <Button>{item.name}</Button> */}
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
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
                </div>


            </div>
            <div className="back-button col-8">
                <div className="p-2 bg-light rounded-3 mt-5 w-25 mx-auto">
                    <Button size="lg w-100" onClick={() => { movePage("Landing") }}>Back</Button>
                </div>

            </div>
            <Footer />

        </div>
    )
}