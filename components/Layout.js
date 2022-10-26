import Link from 'next/link'
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />

            <div className="page-content">
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout;