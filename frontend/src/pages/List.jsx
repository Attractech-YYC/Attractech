import { Button } from "react-bootstrap"
import { useEffect } from "react"

export const List = ({ movePage, list }) => {

    useEffect(() => {
        if(list.length == 0) {
            movePage("Dashboard")
        }
    })

    return (
        <div>
            <h2>LIST</h2>
            {
                list.map((item) => {
                 return(
                    <div>
                        <h3>{item.name}</h3>
                    </div>
                 )
                })
            }
            <Button onClick={() => {movePage("Dashboard")}}>Dashboard</Button>
        </div>


    )
} 