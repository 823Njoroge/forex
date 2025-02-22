function Navbar(){

return (
    <nav className="navbar">
        <a href="./" className="navbar-brand">MyFX</a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="./" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
                <a href="./Signup" className="nav-link">Signup</a>
            </li>
            <li className="nav-item">
                <a href="./Login" className="nav-link">Login</a>
            </li>
        </ul>
    </nav>
)
}

export default Navbar;