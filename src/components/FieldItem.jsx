import Input from "./Input.jsx";

export default function FieldItem({htmlFor,type,name,id,value,onChange,readOnly,label}) {
    return (<>
    <div className='field'>
        <label htmlFor={htmlFor}>{label}</label>
        <Input type={type} name={name} id={id} value={value} onChange={onChange} readOnly={readOnly}/>
    </div>
    </>)
}