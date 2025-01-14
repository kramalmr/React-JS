import { useEffect, useState } from 'react';
import './App.css';


// SOAL 1
const ToggleSwitch = () => {
    const theme = useTheme();
    
    return (
        <div className="toggle-switch-container">
            <label className="toggle-switch">
                <input type="checkbox" id='toggle'/>
                <span className="toggle-switch-label"></span>
            </label>
            <h1>{theme}</h1>
        </div>
    );
};

const useTheme = () => {
    const [theme, setTheme] = useState('light');

    const handleChange = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        console.log("Theme berubah menjadi : " + newTheme);
    }
    
    useEffect(() => {
        const toggleSwitch = document.getElementById('toggle');
        
        toggleSwitch.addEventListener("change", handleChange);
        
        return () => {
            toggleSwitch.removeEventListener("change", handleChange);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    return theme;
}


// SOAL 2

const ToggleTask = () => {
    const toggleTaskStatus = useToggleTask();

    return (
        <div>
            <h1>{toggleTaskStatus ? '✅ Task Completed' : '❌ Task Not Completed'}</h1>
            <button id='buttonToggle'>Toggle Task</button>
        </div>
    )
}

const useToggleTask = () => {
    const [isTaskCompleted, setIsTaskCompleted] = useState(false);
    const handleClick = () => {
        setIsTaskCompleted(!isTaskCompleted);
        // console.log(isTaskCompleted);
    }

    useEffect(() => {
        const buttonToggle = document.getElementById('buttonToggle');
        buttonToggle.addEventListener('click', handleClick);

        return () => {
            buttonToggle.removeEventListener('click', handleClick);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isTaskCompleted]);

    return isTaskCompleted;
}

function App() {
    return (
        <div>
            <h1>SOAL 1</h1>
            <ToggleSwitch />

            <h1>SOAL 2</h1>
            <ToggleTask />
        </div>
    )
}

export default App