import { useState } from 'react';
import "../styles/GeneralInfo.css";
import Input from './Input.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import FieldItem from './FieldItem';

export default function GeneralInfo(){

    const [generalInfo,setGeneralInfo] = useState({name:'',phone:"",email:""});
    const [readOnly,setReadOnly] = useState(false);

    function changeGeneralInformation(type,value){
        console.log({type,value})
        const changedObject = {...generalInfo};
        changedObject[type] = value;
        setGeneralInfo(changedObject)
    }

    function onSubmit(){
        setReadOnly(true)
    }

    function onEdit(){
        setReadOnly(false);
    }



    return (<>
        <div>
            <fieldset className='container'>
            <legend>General Information</legend>
                <FieldItem htmlFor="name" type="text" name="name" id="name" value={generalInfo.name} onChange={changeGeneralInformation} readOnly={readOnly} label="Name"/>
                <FieldItem htmlFor="email" type="email" name="email" id="email" value={generalInfo.email} onChange={changeGeneralInformation} readOnly={readOnly} label="Email"/>
                <FieldItem htmlFor="phone" type="phone" name="phone" id="phone" value={generalInfo.phone} onChange={changeGeneralInformation} readOnly={readOnly} label="Phone"/>
                <ButtonGroup readOnly={readOnly} onEdit={onEdit} onSubmit={onSubmit}/>
            </fieldset>
        </div>
    </>)
}
