import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer footer-center bg-neutral text-neutral-content rounded p-10">
            <div class="footer-section contact-info">
                <h2 className="font-bold">Contact Us</h2>
                <p><i class="fas fa-phone"></i> 01818186676</p>
                <p><i class="fas fa-envelope"></i> jh18186676@gmail.com </p>
                <p><i class="fas fa-map-marker-alt"></i> 123 Street, Dhaka, Bangladesh</p>
            </div>

            <nav>
                <div className="grid grid-flow-col gap-4 text-xl">
                    <Link href="#"><i class="fab fa-facebook"></i></Link>
                    <Link href="#"><i class="fab fa-twitter"></i></Link>
                    <Link href="#"><i class="fab fa-instagram"></i></Link>
                    <Link href="#"><i class="fab fa-linkedin"></i></Link>
                </div>
            </nav>
            <aside>
                <p className="text-xs">Copyright © {new Date().getFullYear()} - All right reserved by Vocabulary Online Platform</p>
            </aside>
        </footer>
    );
};

export default Footer;