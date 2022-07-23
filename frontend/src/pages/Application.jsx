import Navigation from "../components/Navigation"
import { Footer } from "../components/Footer"
import Button from "react-bootstrap/Button"
import { useState } from "react";
import { FoothillsQuestion } from "../components/FoothillsQuestion";
import { useFormik } from "formik";
import * as Yup from 'yup';

export const Application = () => {

    const [show, setShow] = useState([true, false, false, false, false, false]);

    const formik = useFormik({
        initialValues: {
            activity:"",
            spontaneity:"",
            spendTime:"",
            bestTouristDay:"",
            planningFor:"",
            culture:"",
        },
        validationSchema: Yup.object().shape({
            activity: Yup.string().required("Required"),
            spontaneity: Yup.string().required("Required"),
            spendTime: Yup.string().required("Required"),
            bestTouristDay: Yup.string().required("Required"),
            planningFor: Yup.string().required("Required"),
            culture: Yup.string().required("Required"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }

    });

    const cycleQuestion = () => {
        let inital = [false, false, false, false, false, false]
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
        <div>
            <Navigation />
            <form onSubmit={formik.handleSubmit}>
                <h1>Welcome to Attractech!</h1>
                Mitch Note: I think this page will be redesigned alot, but I wanna get some funcitonality down.
                {show[0] &&
                    <FoothillsQuestion
                        title="What activity do you want to do?"
                        name="activity"
                        options={["Food", "Dance", "Sports"]}
                        formik={formik}
                        cycle={() => cycleQuestion()} />
                }
                {show[1] &&
                    <FoothillsQuestion
                        title="How much do you like spontaniety?"
                        options={["A lot", "Some", "Not at all"]}
                        name="spontaneity"
                        formik={formik}
                        cycle={() => cycleQuestion()} />
                }
                {show[2] &&
                    <FoothillsQuestion
                        title="Do you want to spend time:"
                        options={["Outdoors", "Indoors"]}
                        name="spendTime"
                        formik={formik}
                        cycle={() => cycleQuestion()} />
                }
                {show[3] &&
                    <FoothillsQuestion
                        title="The best tourist day you've ever had was full of:"
                        options={["Culture", "Scenery", "Exercise"]}
                        name="bestTouristDay"
                        formik={formik}
                        cycle={() => cycleQuestion()} />
                }
                {show[4] &&
                    <FoothillsQuestion
                        title="You're planning for:"
                        options={["A family", "A group of adults", "Myself"]}
                        name="planningFor"
                        formik={formik}
                        cycle={() => cycleQuestion()} />
                }
                {show[5] &&
                    <FoothillsQuestion
                        title="What culture do you want to explore?"
                        options={["Indigenous", "Latino", "European", "Asian", "American"]}
                        name="culture"
                        formik={formik}
                        submit={true} />
                }
            </form>
            <Footer />
        </div>
    )
}
