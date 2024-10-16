import { useState, useRef } from "react";
export default function TextBox(props) {
	const [text, setText] = useState("");
	const [wordCount, setWordCount] = useState(0);
	const textAreaRef = useRef(null);
	const alphabeticRegExp = /[a-zA-Z]/;
	const wordRegex = /\b\w+\b/g;
	function handleChange(event) {
		setText(event.target.value);
	    const matches = event.target.value.trim().match(wordRegex);
	    setWordCount(matches ? matches.length : 0);
	}
	function handleCapCase() {
		let currentText = textAreaRef.current.value;
		if (alphabeticRegExp.test(currentText)) {
			let capitalize = currentText.toUpperCase();
			setText(capitalize);
		}
		else {
			props.showAlert("Enter alphabets to capitalize!", "warning");
		}
	}
	function handleLowCase() {
		let currentText = textAreaRef.current.value;
		if (alphabeticRegExp.test(currentText)) {
			let lowerCase = currentText.toLowerCase();
			setText(lowerCase);
		}
		else {
			props.showAlert("Enter alphabets to lower case!", "warning");
		}
	}
	function handleClear() {
		setText("");
		setWordCount(0);
	}
	function copyText() {
		let text = textAreaRef.current.value;
		if (text === "") {
			props.showAlert("No text to copy!", "warning");
		}
		else {
			navigator.clipboard.writeText(text);
			props.showAlert("Text copied to clipboard!", "success");
		}

	}
	return (
		<>
			<div className="container mb-3 my-4">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text here</label>
				<textarea className="form-control" id="exampleFormControlTextarea1"  ref={textAreaRef} rows="10"
				style={{
                    backgroundColor: props.mode === "dark" ? "#343a40" : "#ffffff",
                    color: props.mode === "dark" ? "#ffffff" : "#000000"
				}}
				value={text} onChange={handleChange}></textarea>
				<button type="button" className="btn btn-primary m-1" onClick={handleCapCase}>Capitalize</button>
				<button type="button" className="btn btn-primary m-1" onClick={handleLowCase}>Lower Case</button>
				<button type="button" className="btn btn-primary m-1" onClick={handleClear}>Clear</button>
				<button type="button" className="btn btn-primary m-1" onClick={copyText}>Copy</button>
				<div className="info">
					<h3>Summary</h3>
					<div className="row">
						<p className="col-9">Characters:</p><p className="col-3">{text.length}</p>
						<p className="col-9">Words:</p><p className="col-3">{wordCount}</p>
					</div>
				</div>
			</div>
			
		</>
	)
}