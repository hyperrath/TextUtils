function Navbar(props) {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
	            <div className="container-fluid">
		            <a className="navbar-brand" href="/">
			            <strong>{props.title}</strong>
		            </a>
	            </div>
			</nav>
		</>
	)
}
export default Navbar;