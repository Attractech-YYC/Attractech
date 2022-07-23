import { Button } from "react-bootstrap"
import { useState } from "react";

export const FoothillsQuestion = ({title="Foothills Question",name="question",options=["UAAAA","UAAAAAJHHHH"],submit=false, formik=undefined, cycle=()=>{}} ) => {
    
    const [answered, setAnswered] = useState(false);

    return(
        <div className="card" style={{width: 18 + "rem"}}>
            <h5 className="card-title center mx-auto my-2">{title}</h5>
            <select 
            className="m-2 p-1"
            id={name}
            name={name}
            onChange={(event)=>{formik.handleChange(event); setAnswered(true);}}
            value={formik.values[name]}
            >
                <option value=""></option>
                {options.map((option, index) =>{
                    return(
                        <option key={index}>{option}</option>
                    )
                })}
            </select>
            {submit && <Button className="m-2" disabled={!answered} type="submit">Submit</Button>}
            {!submit && <Button className="m-2" disabled={!answered} onClick={() => cycle()}>Next</Button>}
        </div>
    )
}