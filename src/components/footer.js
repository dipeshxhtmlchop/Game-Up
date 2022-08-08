import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div className='footer-outer py-4'>
            <Container>
                <div className="d-flex justify-content-between align-items-center flex-md-row flex-column">
                    <p className="m-0">© 2022 GameUp. All rights reserved.</p>
                    <span className="pt-3 pt-md-0">
                        <Link to="#">Terms & Conditions</Link>
                        <Link to="#" className="ms-2">Privacy Policy</Link>
                    </span>
                </div>
            </Container>
        </div>
    )
}