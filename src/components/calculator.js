import { useRef, useState } from "react";
import './Calculator.css'

function Calculator() {

    const [resultado, setResultado] = useState(0);
    const inputRef = useRef(null);

    const Sumar = (e) => {
        e.preventDefault();
        setResultado(suma => suma + Number(inputRef.current.value));
    }

    const Multiplicar = (e) => {
        e.preventDefault();
        setResultado(suma => suma * Number(inputRef.current.value));
    }

    const Restar = (e) => {
        e.preventDefault();
        setResultado(suma => suma - Number(inputRef.current.value));
    }

    const Dividir = (e) => {
        e.preventDefault();
        setResultado(suma => suma / Number(inputRef.current.value));
    }

    const ResetearInput = (e) => {
        e.preventDefault();
        inputRef.current.value = 0
    }

    const ResetearResultado = (e) => {
        e.preventDefault();
        setResultado(suma => suma = 0);
    }


    return (

        <div className="calculator">
            <div>
            <h5>Resultado: {resultado}</h5>

                <input className="calculator-input" ref={inputRef} placeholder="Ingrese un numero" />
                <div className="calculatorGrid">
                    <button onClick={Sumar} className="button-calculator">Sumar</button>
                    <button onClick={Multiplicar} className="button-calculator">Multiplicar</button>
                    <button onClick={Restar} className="button-calculator">Restar</button>
                    <button onClick={Dividir} className="button-calculator">Dividir</button>
                    <button onClick={ResetearInput} className="button-calculator">ResetearInput</button>
                    <button onClick={ResetearResultado} className="button-calculator">ResetearResultado</button>
                </div>
                </div>
        </div>
    )
}

export default Calculator;