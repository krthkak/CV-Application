import { useState } from "react";
import FieldItem from "./FieldItem";
import ButtonGroup from "./ButtonGroup";
import '../styles/Info.css'


export default function EducationInforamtion(){
    const [educationalExp,setEducationalExp] = useState({schoolName:'',graduationDate:"",studyTitle:""});
    const [readOnly,setReadOnly] = useState(false);

    function changeEducationalExperience(type,value){
        console.log({type,value})
        const changedObject = {...educationalExp};
        changedObject[type] = value;
        setEducationalExp(changedObject)
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
            <legend>Educational Experience</legend>
                <FieldItem htmlFor="schoolName" type="text" name="schoolName" id="schoolName" value={educationalExp.name} onChange={changeEducationalExperience} readOnly={readOnly} label="School Name"/>
                <FieldItem htmlFor="studyTitle" type="text" name="studyTitle" id="studyTitle" value={educationalExp.studyTitle} onChange={changeEducationalExperience} readOnly={readOnly} label="Title of Study"/>
                <FieldItem htmlFor="graduationDate" type="date" name="graduationDate" id="graduationDate" value={educationalExp.graduationDate} onChange={changeEducationalExperience} readOnly={readOnly} label="Graduation Date"/>
                <ButtonGroup readOnly={readOnly} onEdit={onEdit} onSubmit={onSubmit}/>
            </fieldset>
        </div>
    </>)
}