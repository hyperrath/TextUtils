import { useState, useEffect } from "react";
import TextBox from "./components/TextBox";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import './App.css';

function App() {
    const [alert, setAlert] = useState(null);
    function showAlert(message, type) {
        setAlert({
            "message": message,
            "type": type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const [mode, setMode] = useState("light");

    useEffect(() => {
        document.body.className = mode === "dark" ? "bg-dark text-light" : "bg-light text-dark";
    }, [mode]);

    function toggleMode() {
        setMode(prevMode => prevMode === "dark" ? "light" : "dark");
    }

    return (
        <div className="App">
            <NavBar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container">
                <TextBox title="Type here" showAlert={showAlert} mode={mode}/>
            </div>
        </div>
    );
}

export default App;
