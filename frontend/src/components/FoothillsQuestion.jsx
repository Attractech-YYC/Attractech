import { Button } from "react-bootstrap"

export const FoothillsQuestion = ({ title = "Foothills Question", name = "question", options = ["UAAAA", "UAAAAAJHHHH"], submit = false, formik = undefined, cycle = () => {}, imgSrc=""}) => {

    return (
        <div className="card" style={{ width: 70 + "vw", paddingBottom: 1.5 + "%"}}>
            <h5 className="card-title center mx-auto my-2">{title}</h5>
            <div className="flex">
                {options.map((option) => {
                    if(submit == true){
                        return (
                            <Button type="submit" className="tri-button" onClick={()=>{formik.values[name] = option;}}>{option}</Button>
                        )
                    }
                    else{       
                        return (
                            <Button className="tri-button" onClick={()=>{formik.values[name] = option; cycle()}}>{option}</Button>
                        )
                    }
                })}
            </div>
            <img src={imgSrc} style={{marginLeft: 30 + "%", marginRight: 30 + "%"}}></img>
        </div>
    )
}