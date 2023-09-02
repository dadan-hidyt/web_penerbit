export default function ModalButton({children,target = null,className = null}){
return <>
    <a type="button" className={className} data-bs-toggle="modal" data-bs-target={`#${target}`} href="javascript:void(0)">{children}</a>
</>
}