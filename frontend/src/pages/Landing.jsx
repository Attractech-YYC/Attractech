import Navigation from '../components/Navigation'

export const Landing = () => {

    return (
        <div className="conatiner py-4">
            <Navigation />
            <div className="container py-4">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <h2 className="fw-bold">Explore Calgary like never before</h2>
                    <p className="col-md-8 fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="btn btn-primary btn-lg" type="button">Let's Start</button>
                </div>
            </div>
        </div>
    )
}