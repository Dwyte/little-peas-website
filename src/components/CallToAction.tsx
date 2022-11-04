const CallToAction = () => {
    return <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">Hello Lunacian!</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
                Get notified on the floor price changes of your favorite runes and charms this season with the Little Peas discord bot!
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Get Started</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
            </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
            <div className="container px-5">
                <img src="bootstrap-docs.png" className="img-fluid border shadow-lg mb-4" alt="Screenshot" width="700" height="500" loading="lazy" />
            </div>
        </div>
    </div>;
}

export default CallToAction;