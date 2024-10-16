export default function NavBar(props) {
    return (
        <>
            <nav className={`navbar bg-${props.mode} border-bottom border-body`} data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><strong>{props.title}</strong></a>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    </div>
                </div>
            </nav>
        </>
    );
}