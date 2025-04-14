import { useState } from 'react';
import "../styles/Info.css";
import Input from './Input.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import FieldItem from './FieldItem.jsx';

export default function PracticalInformation(){

    const [generalInfo,setGeneralInfo] = useState({name:'',responsibilities:"",position:"",startDate:null,endDate:null});
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
            <legend>Practical Information</legend>
                <FieldItem htmlFor="name" type="text" name="name" id="name" value={generalInfo.name} onChange={changeGeneralInformation} readOnly={readOnly} label="Company Name"/>
                <FieldItem htmlFor="position" type="text" name="position" id="position" value={generalInfo.position} onChange={changeGeneralInformation} readOnly={readOnly} label="position"/>
                <FieldItem htmlFor="responsibilities" type="text" name="responsibilities" id="responsibilities" value={generalInfo.responsibilities} onChange={changeGeneralInformation} readOnly={readOnly} label="Responsibilities"/>
                <FieldItem htmlFor="stratDate" type="date" name="stratDate" id="stratDate" value={generalInfo.stratDate} onChange={changeGeneralInformation} readOnly={readOnly} label="Start Date"/>
                <FieldItem htmlFor="endDate" type="date" name="endDate" id="endDate" value={generalInfo.endDate} onChange={changeGeneralInformation} readOnly={readOnly} label="End Date"/>
                <ButtonGroup readOnly={readOnly} onEdit={onEdit} onSubmit={onSubmit}/>
            </fieldset>
        </div>
    </>)
}
