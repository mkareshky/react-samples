import { useRef } from "react"

const ScrollToSection = () => {

    const ref = useRef<HTMLDivElement>(null);

    const handleMove = () => {
        if (ref.current) {
            let position = ref.current.getBoundingClientRect().top;

            window.scrollTo({
                top: position,
                behavior: 'smooth'
            })

        }
    }

    const data = [
        {
            id: 1,
            name: 'First',
            style: {
                background: '#eee000',
                width: '100%',
                height: '600px'
            }
        },
        {
            id: 2,
            name: 'Second',
            style: {
                background: '#5ee060',
                width: '100%',
                height: '600px'
            }
        },
        {
            id: 3,
            name: 'Third',
            style: {
                background: '#6890f0',
                width: '100%',
                height: '600px'
            }
        },
        {
            id: 4,
            name: 'Forth',
            style: {
                background: '#8eeff0',
                width: '100%',
                height: '600px'
            }
        },
        {
            id: 5,
            name: 'Fifth',
            style: {
                background: '#3200f0',
                width: '100%',
                height: '600px'
            }
        },
    ]

    const num = 5;
    return <div style={{ width: '500px' }}>
        <button onClick={handleMove}>Move to ...</button>
        {
            data.map((item) => <div ref={item.id === num ? ref : null} style={item.style}>
                <p>{item.name}</p>
            </div>)
        }

    </div>
}

export default ScrollToSection;