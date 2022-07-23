import Navigation from './Navigation'

function Home() {
    return (
        <div>
            <Navigation />
            <div className="conatiner py-4">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <h1 className="display-5 fw-bold">Explore Calgary like never before</h1>
                    <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="btn btn-dark btn-lg" type="button">Let's Start</button>
                </div>
            </div>
        </div>
    )
}

export default Home