import CapsLock from "../Capslock";

function Square({ background }) {
    return (
        <>
            <span>{<CapsLock texto="Sou um quadrado" />}</span>
            <div className="square" style={{ background: background }}></div>
        </>
    );
}

export default Square;