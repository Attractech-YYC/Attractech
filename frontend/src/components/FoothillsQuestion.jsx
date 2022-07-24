import { Button } from "react-bootstrap"

export const FoothillsQuestion = ({ title = "Foothills Question", name = "question", options = ["UAAAA", "UAAAAAJHHHH"], submit = false, formik = undefined, cycle = () => { }, imgSrc = "" }) => {

    return (
        <div className="p-5 mb-4 bg-light rounded-3 text-center w-100">
            <h3 className="card-title center mx-auto my-2 fw-bold fs-2 mb-3">{title}</h3>
            <div className="flex">
                {options.map((option) => {
                    if (submit == true) {
                        return (
                            <Button type="submit" className="tri-button" onClick={() => { formik.values[name] = option; }}>{option}</Button>
                        )
                    }
                    else {
                        return (
                            <Button className="tri-button" onClick={() => { formik.values[name] = option; cycle() }}>{option}</Button>
                        )
                    }
                })}
            </div>
            <img src={imgSrc} class="img-fluid w-25 mt-5"></img>
        </div>
    )
}