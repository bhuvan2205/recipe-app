import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <Link href="/">
                <a>
                    <h1>
                        <span>Add the</span>
                        <span>Recipe</span>
                    </h1>
                    <h2>Spread The Taste</h2>
                </a>
            </Link>
        </header>
    );
}

export default Navbar;