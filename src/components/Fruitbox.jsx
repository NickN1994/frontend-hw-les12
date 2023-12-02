function Fruitbox(props) {

    return (
        <>
            <div className='inner-box'>
                <div className="img-box">
                    <img src={props.image} alt={props.alt}/>
                </div>
                <h2>{props.title}</h2>
                <button
                    type='button'
                    onClick={() => props.setCounter(props.counter - 1)}
                    disabled={props.counter === 0}
                >-
                </button>
                <p>{props.counter}</p>
                <button
                    type='button'
                    onClick={() => props.setCounter(props.counter + 1)}
                >+
                </button>
            </div>
        </>
    )
}

export default Fruitbox;