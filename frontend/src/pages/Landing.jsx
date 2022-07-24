import skyline from "../assets/images/skyline.png"
import status1 from "../assets/images/Status-1.png"
import status2 from "../assets/images/Status-2.png"
import { useState } from "react";
import { FoothillsQuestion } from "../components/FoothillsQuestion";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Navigation from "../components/Navigation.jsx";
import { Footer } from "../components/Footer";
import { Tinder } from "./Tinder"

export const Landing = ({ movePage: setPage = () => { }, setData = () => { } }) => {

    const [show, setShow] = useState([true, false]);

    const formik = useFormik({
        initialValues: {
            cost: "",
            timeInvestment: "",
        },
        validationSchema: Yup.object().shape({
            cost: Yup.string().required("Required"),
            timeInvestment: Yup.string().required("Required"),
        }),
        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            setData(values);
            setPage("Dashboard")
        }
    });

    const cycleQuestion = () => {
        let inital = [false, false]
        for (let i = 0; i != inital.length - 1; i++) {
            if (show[i]) {
                if (i < show.length) {
                    inital[i + 1] = true;
                    setShow(inital);
                    console.log(inital);
                    break;
                }
            }
        }
    }

    return (
        <div className="bg-landing">
            <Navigation movePage={setPage} />
            <div className="row mx-0 justify-content-center align-items-center">

                <div className="text-center col-10 col-lg-5 me-lg-2 mb-4">
                    <div className="p-5 bg-light rounded-3 footer-space">
                        <div className="row">
                            <div>
                                <h2 className="fw-bold fs-1">Explore Calgary like never before</h2>
                                <p className="fs-6 me-5">Calgary's downtown is burgeoning with possibilities. Are you hungry? Do you want to experience art or history? Maybe socialize and dance? You can find the classics and discover hidden gems, right here, right now.</p>
                                {/* <Link to="/app"><button className="mt-5 btn btn-landing btn-lg btn-danger" type="button">Let's Start</button></Link> */}
                            </div>
                            <div>
                                <img src={skyline} className="img-fluid img-circle" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-10 col-lg-5 ms-lg-2 mb-6">
                    <div className="p-5 bg-light rounded-3 text-center">
                        <form onSubmit={formik.handleSubmit}>
                            {show[0] &&
                                <>
                                    <FoothillsQuestion
                                        title="How much do you want to spend?"
                                        name="cost"
                                        options={["Free", "$25", "$50", "$100", "$150", "$200"]}
                                        formik={formik}
                                        imgSrc={status1}
                                        cycle={() => cycleQuestion()} />

                                </>
                            }
                            {show[1] &&
                                <>
                                    <FoothillsQuestion
                                        title="How long do you want to spend?"
                                        options={["15 mins", "30 mins", "1 hour", "2 hours", "3 hours", "4+ hours"]}
                                        name="timeInvestment"
                                        formik={formik}
                                        submit={true}
                                        imgSrc={status2}
                                        cycle={() => cycleQuestion()} />
                                </>
                            }
                        </form>
                    </div>

                </div>


            </div>







            <Footer />
        </div >
    )
}
