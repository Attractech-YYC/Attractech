import { Button } from "react-bootstrap"
import Navigation from "../components/Navigation"
import { Footer } from "../components/Footer"

export const Dashboard = ({ movePage, setData }) => {

    const activities = ["Eat", "Artisans", "Culture", "Exercise", "Adventures"]

    return (
        <div className="bg-landing">
            <Navigation />
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

            <Footer />

        </div>
    )
}