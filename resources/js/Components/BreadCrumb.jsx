export default function BreadCrumb({children,links}){
    return <>
     <div className="container">
       <div className="mt-3">
       <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
           <li className="breadcrumb-item"><a href="/">Home</a></li>
            {children}
         </ol>
        </nav>
       </div>
     </div>
    </>
}