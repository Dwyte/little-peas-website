const Header = () => {
    return <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">

            <img className="bi me-2 rounded" src="/little-peas-logo.png" width={32} alt="Logo" />

            <b className="fs-4">Little Peas</b>
        </a>

        <ul className="nav nav-pills">
            <li className="nav-item"><a href="#home" className="nav-link active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#features" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#pricing" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#faqs" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
        </ul>
    </header>;
}

export default Header;