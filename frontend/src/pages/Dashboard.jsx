import { Button } from "react-bootstrap"
import Navigation from "../components/Navigation"
import { Footer } from "../components/Footer"

export const Dashboard = ({ movePage, setData }) => {

    const activities = ["Food", "Creativity", "Culture", "Exercise", "Entertainment"]

    return (
        <div className="bg-landing">
            <Navigation />
            <div className="row justify-content-center align-items-center">
                <div className="text-center col-10 col-md-8">
                    <div className="p-5 bg-light rounded-3">
                        <h2 className="fw-bold fs-1 mb-4">What do you want to explore today?</h2>
                        {
                            activities.map((activity) => {
                                return (
                                    <Button className="mx-2 mb-4 dashboard-button" key={activity} onClick={() => { setData(activity); movePage("Tinder") }}>{activity}</Button>
                                )
                            })
                        }
                        <hr className="mb-4" />
                        <div>
                            <Button className="mt-3 dashboard-button" onClick={() => { movePage("Landing") }}>Start Over</Button>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />

        </div>
    )
}