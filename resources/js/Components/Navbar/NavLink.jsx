export default function NavLink({props,children,active}) {
    return <>
        <li className="nav-item">
            <a className={`nav-link text-white ${active ? 'active' : ''}`} aria-current="page" href="#">
                {children}
            </a>
        </li>
    </>
}