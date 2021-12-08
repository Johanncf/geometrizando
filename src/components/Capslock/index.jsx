function CapsLock(prop) {
    const texto = prop.texto
    return (
        <h1>{texto.toUpperCase()}</h1>
    );
}

export default CapsLock;