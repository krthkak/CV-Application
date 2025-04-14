

export default function ButtonGroup({readOnly,onEdit,onSubmit}){
    return (<>
    <div className='button-group'>
        {readOnly ? <button type='button' onClick={onEdit}>Edit</button>
        :<button type='button' onClick={onSubmit}>Submit</button>
        }
    </div>
    </>)
}