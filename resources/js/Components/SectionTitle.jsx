export default function SectionTitle({title,subtitle,more,link_more}){
    return <>
       <div className="d-flex justify-content-between">
                    <div className="section_title">
                        <span>{title ?? ''}</span>
                        <p>
                            {subtitle ?? ''}
                        </p>
                    </div>
                    {
                        more ?  <div className="more d-flex align-items-center">
                        <a href={link_more} className="btn btn-sm btn-outline-primary">{more ?? 'Lainya'}</a>
                        </div> : ''
                    }
                </div>
    </>
}