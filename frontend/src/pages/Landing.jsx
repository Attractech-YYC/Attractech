import skyline from "../assets/images/skyline.png"
import status1 from "../assets/images/Status-1.png"
import status2 from "../assets/images/Status-2.png"
import { useState } from "react";
import { FoothillsQuestion } from "../components/FoothillsQuestion";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Navigation from "../components/Navigation.jsx";
import { Footer } from "../components/Footer";
import { Swipe } from "../components/Swipe"

export const Landing = () => {

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
            alert(JSON.stringify(values, null, 2));
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
            <Navigation />
            <div className="container py-4">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="row">
                        <div className="col-md-7">
                            <h2 className="fw-bold fs-1">Explore Calgary like never before</h2>
                            <p className="fs-6 me-5">Calgary's downtown is burgeoning with possibilities. Are you hungry? Do you want to experience art or history? Maybe socialize and dance? You can find the classics and discover hidden gems, right here, right now.</p>
                            {/* <Link to="/app"><button className="mt-5 btn btn-landing btn-lg btn-danger" type="button">Let's Start</button></Link> */}
                        </div>
                        <div className="col-md-5">
                            <img src={skyline} className="img-fluid img-circle" />
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="question_container">
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
                </div>
            </form>
            <Footer />
        </div>
    )
}
