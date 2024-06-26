import './App.css';
import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import Textbox from "./Components/Textbox";
import Alert from "./Components/Alert";
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
    return (
        <>
            <Navbar title="Text Utils"/>
            <Alert alert={alert}/>
            <Textbox showAlert={showAlert}/>
        </>
    );
}

export default App;
