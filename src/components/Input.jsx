export default function Input({type,name,value,onChange,readOnly}){
    
    if(!readOnly)
            return (<>
                <input type={type} name={name} value={value} onChange={() => onChange(name,event.target.value)}/>
            </>)
    else{
        return (<>
        <span>{value}</span>
        </>)
    }
}