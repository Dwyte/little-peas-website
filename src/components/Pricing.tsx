const Pricing = () => {
    return <div id="pricing">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-bold">Pricing</h1>
            <p className="fs-5 text-muted">Only pay for the runes and charms you need to keep track. </p>
        </div>
        <div className="row row-cols-1 row-cols-md-4 mb-3">
            <div className="col invisible"></div>

            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Runes</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$1<small className="text-muted fw-light">/rune</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Transferable to another server</li>
                            <li>Customizable notification channels</li>
                            <li>Customizable notification triggers</li>
                            <li>Lasts untill end of season</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Charms</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">$0.5<small className="text-muted fw-light">/charm</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Transferable to another server</li>
                            <li>Customizable notification channels</li>
                            <li>Customizable notification triggers</li>
                            <li>Lasts untill end of season</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Pricing;