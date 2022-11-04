const Footer = () => {
    return <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <a href="#home" className="col-md-4 mb-0">
            <img className="bi me-2 rounded" src="/little-peas-logo.png" width={32} alt="Logo" />
        </a>

        <p className="col-md-4  text-muted d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            2022.11.04
        </p>

        <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#home" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#features" className="nav-link px-2 text-muted">Features</a></li>
            <li className="nav-item"><a href="#pricing" className="nav-link px-2 text-muted">Pricing</a></li>
        </ul>
    </footer>;
}

export default Footer;