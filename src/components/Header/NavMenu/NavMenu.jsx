import { NavLink } from "react-router-dom"

export default function NavMenu() {
	return (
		<>
			<nav className="header__nav">
				<ul className="header__lists">
					<li>
						<NavLink exact to="/" className="header__link" activeClassName="active">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/todos" className="header__link" activeClassName="active">
							All todos
						</NavLink>
					</li>
					<li>
						<NavLink to="/add-todo" className="header__link" activeClassName="active">
							Add todo
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	)
}
