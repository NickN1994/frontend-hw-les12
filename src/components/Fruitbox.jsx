function Fruitbox (props) {

    return (
        <>
            <div className='box'>
                <img src={props.image} alt={props.alt}/>
                <h2>{props.title}</h2>
                <button
                    type='button'
                    onClick={() => props.setCounter(props.counter - 1)}
                >-</button>
                <p>{props.counter <= 0 ? 0 : props.counter}</p>
                <button
                    type='button'
                    onClick={() => props.setCounter(props.counter + 1)}
                >+</button>
            </div>
        </>
    )
}

export default Fruitbox;