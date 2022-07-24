import { Button } from "react-bootstrap"
import { useEffect } from "react"
import Navigation from "../components/Navigation"
import { Footer } from "../components/Footer"

export const List = ({ movePage, list }) => {

    useEffect(() => {
        if (list.length == 0) {
            movePage("Dashboard")
        }
    })

    return (
        <div className="bg-landing">
            <Navigation movePage={movePage} />
            <div className="row justify-content-center">
                <div className="text-center col-10 col-md-8">
                    <div className="p-5 bg-light rounded-3 footer-space">
                        <h2 className="fw-bold fs-1 mb-3">Your List</h2>
                        <div className="row justify-content-center align-items-stretch">
                            {
                                list.map((item) => {
                                    return (
                                        <div className="card col-lg-3 col-10 mx-2 mb-4">
                                            <h3 className="fs-5 mt-2 mb-2">{item.name}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>



            <div className="back-button col-8">
                <div className="p-2 bg-light rounded-3 mt-5 w-25 mx-auto">
                    <Button size="lg w-100" onClick={() => { movePage("Dashboard") }}>Back to Dashboard</Button>
                </div>

            </div>
            <Footer />
        </div>


    )
}