import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import '/src/app/styles/nav.css';
import '/src/app/styles/page.css';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container px-4">
                <a className="navbar-brand" href="/">
                    <Image src="/zesty-io-logo.png" className="logo" width={100} height={70} alt="zesty_logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link text-light" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link text-light" href="/about">About Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;