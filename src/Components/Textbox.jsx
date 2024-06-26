import React, {useState, useRef} from "react";
function Textbox(props) {
	const [text, setText] = useState("");
	const [wordCount, setWordCount] = useState(0);
	const textAreaRef = useRef(null);
	const alphabeticRegExp = /[a-zA-Z]/;
	function changeHandle(event) {
		setText(event.target.value);
		const wordRegex = /\b\w+\b/g;
	    const matches = event.target.value.trim().match(wordRegex);
	    setWordCount(matches ? matches.length : 0);
	}
	function capCaseHandle() {
		let text = textAreaRef.current.value;
		if (alphabeticRegExp.test(text)) {
			let capitalize = text.toUpperCase();
			setText(capitalize);
		}
		else {
			props.showAlert("Enter alphabets to capitalize!", "warning");
		}
	}
	function lowCaseHandle() {
		let text = textAreaRef.current.value;
		if (alphabeticRegExp.test(text)) {
			let lowerCase = text.toLowerCase();
			setText(lowerCase);
		}
		else {
			props.showAlert("Enter alphabets to lower case!", "warning");
		}
	}
	function clearHandle() {
		setText("");
		setWordCount(0);
	}
	function CopyText() {
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
				<textarea className="form-control" id="exampleFormControlTextarea1" ref={textAreaRef} rows="3" value={text} onChange={changeHandle}></textarea>
				<button type="button" className="btn btn-primary mx-1" onClick={capCaseHandle}>Capitalize</button>
				<button type="button" className="btn btn-primary mx-1" onClick={lowCaseHandle}>Lower Case</button>
				<button type="button" className="btn btn-primary mx-1" onClick={clearHandle}>Clear</button>
				<button type="button" className="btn btn-primary mx-1" onClick={CopyText}>Copy</button>
				<div className="info">
					<h3>Summary</h3>
					<div className="row">
						<p className="col-8">Characters:</p><p className="col-4">{text.length}</p>
						<p className="col-8">Words:</p><p className="col-4">{wordCount}</p>
					</div>
				</div>

			</div>
		</>
	)
}
export default Textbox;