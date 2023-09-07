import { Link } from "@inertiajs/react";

export default function NavLink({
    props,
    children,
    active,
    link = "",
    className = null,
}) {
    return (
        <>
            <li className="nav-item">
                <Link
                    href={link}
                    className={className+` nav-link text-white ${active ? "active" : ""}`}
                >
                    {" "}
                    {children}
                </Link>
            </li>
        </>
    );
}
