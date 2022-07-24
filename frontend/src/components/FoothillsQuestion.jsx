import { Button } from "react-bootstrap"

export const FoothillsQuestion = ({ title = "Foothills Question", name = "question", options = ["UAAAA", "UAAAAAJHHHH"], submit = false, formik = undefined, cycle = () => { }, imgSrc = "" }) => {

    return (
        <div>
            <h3 className="center mx-auto my-2 fw-bold fs-2 mb-3">{title}</h3>
            <div>
                {options.map((option) => {
                    if (submit == true) {
                        return (
                            <Button key={option} type="submit" className="tri-button" onClick={() => { formik.values[name] = option; }}>{option}</Button>
                        )
                    }
                    else {
                        return (
                            <Button key={option}  className="tri-button" onClick={() => { formik.values[name] = option; cycle() }}>{option}</Button>
                        )
                    }
                })}
            </div>
            <img src={imgSrc} className="img-fluid w-25 mt-5"></img>
        </div>
    )
}