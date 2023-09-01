export default function BreadCrumbItem({ children, link = null, active = false }) {
    return (
        active ? <>
            <li aria-current='page' className={`breadcrumb-item ${active ? 'active' : ''}`}>{children}</li>
        </> : <>
            <li className={`breadcrumb-item`}><a href={link}>{children}</a></li>
        </>
    )
}