function Hero () {

    const saludar = () => {
        alert('Hola')
    }

    return(
        <>
        <h1 className="tutulo-principal">Bievenidos</h1>
        <p></p>
        <button onClick={saludar}>Saludar</button>
    </>
    )
}

export default Hero;