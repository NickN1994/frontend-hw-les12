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
    const [textField, setTextField] = React.useState("")


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

            <div className="box-form">
                <form action="">
                    <fieldset>
                        <p>Voornaam:</p>
                        <input type="text"
                               id="name"
                               name="name"
                               value={textField}
                               onChange={(e) => setTextField(e.target.value)}
                        />
                        <p>Achternaam:</p>
                        <input type="text"
                               id="last-name"
                               name="last-name"
                               value={textField}
                               onChange={(e) => setTextField(e.target.value)}
                        />
                        <p>Leeftijd:</p>
                        <input type="number"
                               id="age"
                               name="age"
                               placeholder="0"
                               value={textField}
                               onChange={(e) => setTextField(e.target.value)}
                        />
                        <p>Adres</p>
                        <input type="text"
                               id="adress"
                               name="adress"
                               value={textField}
                               onChange={(e) => setTextField(e.target.value)}
                        />
                        <p>Postcode</p>
                        <input type="text"
                               id="postcode"
                               name="postcode"
                               value={textField}
                               onChange={(e) => setTextField(e.target.value)}
                        />
                        <p>Bezorgfrequentie:</p>
                        <input type="text"
                               id="age"
                               name="age"
                               value={textField}
                               onChange={(e) => setTextField(e.target.value)}
                        />
                    </fieldset>
                </form>
            </div>


        </>
    )
}

export default App
