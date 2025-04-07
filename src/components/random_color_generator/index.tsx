import { useState } from "react";

const RandomColorGenerator: React.FC = () => {
    const [color, setColor] = useState('#ffffff');

    const randomNumber = (size: number) => {
        return parseInt((Math.random() * size).toFixed());
    }

    const colorGen = (state: number) => {
        if (state) {
            setColor(`rgb(${randomNumber(256)},${randomNumber(256)},${randomNumber(256)})`);
        } else {
            const hArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            let out = '#';
            for (let i = 0; i < 6; i++) out += hArray[randomNumber(hArray.length - 1)];
            setColor(out)
        }
    }

    return (
        <div style={{
            backgroundColor: color,
            width: 1000,
            height: 600,
            display: "flex",
            flexDirection: "column"
        }}>
            <button onClick={() => colorGen(1)}>
                RGB
            </button>
            <button onClick={() => colorGen(0)}>
                Hex
            </button>
            <strong>{color}</strong>
        </div>
    );
}

export default RandomColorGenerator;