import './Homepage.css'
import imageMe from '../assets/images/home-main.svg' 
import { useState } from 'react'
import { Divider } from '@chakra-ui/react'

function Homepage() {

    const initialState = {
        work: "I'm a Front-End Developer in Eightroom",
        button: "More Data"
    }

    const [mydata, setMyData] = useState(initialState) 

    const ShowMore = () => {
        setMyData((prevState) => ({
            work:
              prevState.work === "I'm a Front-End Developer in Eightroom"
                ? "I am studying to become a Bachelor in Computer Science at UDE"
                : "I'm a Front-End Developer in Eightroom",
            button: prevState.button === "More Data" ? "Back" : "More Data",
          }));
    }


    return (
        <div className="homepage-container">
            <div className="homepage-text">
                    <h2>Hi There</h2>
                <p>I'm <b>Matias Alzugaray</b></p>
                <h3>{mydata.work}</h3>
                <Divider />
                <button onClick={ShowMore} type="button" className="btn btn-lg btn-outline-light" style={{ marginTop: "20px" }}>{mydata.button}</button>
            </div>
            <div className="homepage-image">
                <img src={imageMe} alt="just a developer" />
            </div>
        </div>
    )
}

export default Homepage;
