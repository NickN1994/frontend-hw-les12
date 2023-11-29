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
    const [textField, setTextField] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [adress, setAdress] = React.useState("");
    const [postcode, setPostcode] = React.useState("");
    const [comment, setComment] = React.useState("");



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
                <form onSubmit="Submit">
                    <fieldset>
                        <div>
                        <p>Voornaam:</p>
                        <input type="text"
                               id="name"
                               name="name"
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                        />
                        </div>

                        <div>
                        <p>Achternaam:</p>
                        <input type="text"
                               id="last-name"
                               name="last-name"
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                        />
                        </div>

                        <div>
                        <p>Leeftijd:</p>
                        <input type="number"
                               id="age"
                               name="age"
                               placeholder="0"
                               value={age}
                               onChange={(e) => setAge(e.target.value)}
                        />
                        </div>

                        <div>
                        <p>Adres:</p>
                        <input type="text"
                               id="adress"
                               name="adress"
                               value={adress}
                               onChange={(e) => setAdress(e.target.value)}
                        />
                        </div>

                        <div>
                        <p>Postcode</p>
                        <input type="text"
                               id="postcode"
                               name="postcode"
                               value={postcode}
                               onChange={(e) => setPostcode(e.target.value)}
                        />
                        </div>

                        <div>
                        <p>Bezorgfrequentie:</p>
                        <select name="bezorgfrequentie" id="bezorgfrequentie">
                            <option value="Wekelijks">Wekelijks</option>
                            <option value="om-de-2-weken">Om de 2 weken</option>
                            <option value="maandelijks">Wekelijks</option>
                        </select>
                        </div>

                        <div>
                        <p>Bezorgdag:</p>
                        <select name="bezorgdag" id="bezorgfrequentie">
                            <option value="Maandag">Maandag</option>
                            <option value="Dinsdag">Dinsdag</option>
                            <option value="Woensdag">Woensdag</option>
                            <option value="Donderdag">Donderdag</option>
                            <option value="Vrijdag">Vrijdag</option>
                        </select>
                        </div>

                        <div>
                        <p>Bezorgmoment:</p>
                        <input type="radio" id="overdag" name="overdag" value="Overdag" checked />
                        <label htmlFor="Overdag">Overdag</label>
                        <input type="radio" id="Avond" name="avond" value="Avond"/>
                        <label htmlFor="Avond">Avond</label>
                        </div>

                        <div>
                        <p>Opmerking</p>
                            <textarea
                                id="opmerking"
                                name="opmerking"
                                rows="4"
                                cols="40"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />

                        </div>

                    </fieldset>
                </form>
            </div>


        </>
    )
}

export default App
