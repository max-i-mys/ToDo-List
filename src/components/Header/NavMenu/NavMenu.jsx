import { Link } from "react-router-dom"

export default function NavMenu() {
	return (
		<>
			<nav className="header__nav">
				<ul className="header__lists">
					<li>
						<Link to="/" className="header__link">
							Home
						</Link>
					</li>
					<li>
						<Link to="/todos" className="header__link">
							All todos
						</Link>
					</li>
					<li>
						<Link to="/add-todo" className="header__link">
							Add todo
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
