import { Button } from "react-bootstrap"

export const Dashboard = ({movePage,setData}) => {

    const activities = ["Eat", "Artisans","Culture","Exercise","Adventures"]

    return(
        <div>
            <h1>What do you want to explore today?</h1>
            {
                activities.map((activity) => {
                    return(
                        <Button key={activity} onClick={() => {setData(activity); movePage("Tinder")}}>{activity}</Button>
                    )
                })
            }
            <Button onClick={() =>{movePage("Landing")}}>Take the test again!</Button>
        </div>
    )
}