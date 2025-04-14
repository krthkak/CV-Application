import '../styles/Input.css'

export default function Input({type,name,value,onChange,readOnly}){
    
    if(!readOnly)
            return (<>
                <input type={type} name={name} value={value} onChange={() => onChange(name,event.target.value)}/>
            </>)
    else{
        return (<>
        <span className="read-only-output">{value}</span>
        </>)
    }
}