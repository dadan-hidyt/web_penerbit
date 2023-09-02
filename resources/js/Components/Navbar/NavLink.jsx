import { Link } from "@inertiajs/react";

export default function NavLink({props,children,active,link = ''}) {
    return <>
        <li className="nav-item">
            <Link href={link} className={`nav-link text-white ${active ? 'active' : ''}`}> {children}</Link>
        </li>
    </>
}