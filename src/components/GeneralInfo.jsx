import { useState } from 'react';
import "../styles/GeneralInfo.css";

export default function GeneralInfo(){
    return (<>
        <div>
            <fieldset className='container'>
                <legend>General Information</legend>
                <div className='field'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name'/>
                </div>
                <div className='field'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className='field'>
                    <label htmlFor="phone">Phone</label>
                    <input type="phone" name='phone'/>
                </div>
                <div className='button-group'>
                    <button type='button'>Edit</button>
                    <button type='button'>Submit</button>
                </div>
            </fieldset>
            
        </div>
    
    </>)
}

