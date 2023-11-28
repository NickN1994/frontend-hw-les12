import './App.css'
import Fruitbox from "./components/Fruitbox.jsx";
import React from "react";
import kiwi from "./assets/kiwi.jpeg"
import appels from "./assets/appels.jpg"
import bananen from "./assets/bananen.jpg"
import aardbei from "./assets/aardbei.png"

function App() {

    const [aardbeiCounter, aardbeiSetCounter] = React.useState(0);
    const [banenenCounter, banenenSetCounter] = React.useState(0);
    const [appelCounter, appelSetCounter] = React.useState(0);
    const [kiwiCounter, kiwiSetCounter] = React.useState(0);


    return (
        <>
            <Fruitbox
            image={aardbei}
            alt={"fruit-afbeelding"}
            title="Aardbeien"
            counter={aardbeiCounter}
            setCounter={aardbeiSetCounter}
            />

            <Fruitbox
                image={bananen}
                alt={"fruit-afbeelding"}
                title="Bananen"
                counter={banenenCounter}
                setCounter={banenenSetCounter}
            />

            <Fruitbox
                image={appels}
                alt={"fruit-afbeelding"}
                title="Appels"
                counter={appelCounter}
                setCounter={appelSetCounter}
            />

            <Fruitbox
                image={kiwi}
                alt={"fruit-afbeelding"}
                title="Kiwi's"
                counter={kiwiCounter}
                setCounter={kiwiSetCounter}
            />

            <button
            type='button'
            onClick={() => aardbeiSetCounter(aardbeiCounter - aardbeiCounter) || banenenSetCounter(banenenCounter - banenenCounter) || appelSetCounter(appelCounter - appelCounter) || kiwiSetCounter(kiwiCounter - kiwiCounter)}
            >Reset
            </button>


        </>
    )
}

export default App
