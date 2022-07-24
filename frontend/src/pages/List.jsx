import { Button } from "react-bootstrap"

export const List = ({ movePage, list }) => {
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