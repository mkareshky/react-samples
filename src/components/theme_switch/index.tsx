import { useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import './style.css'

const ThemeSwitch = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    const handleTogle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        handleTogle();
    }, []);

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="theme-container">
                <p>Hello World!</p>
                <button onClick={handleTogle}> Change Theme </button>
            </div>
        </div>
    );
}

export default ThemeSwitch;