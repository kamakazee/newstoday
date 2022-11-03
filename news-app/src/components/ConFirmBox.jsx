const ConfirmBox = ({setConfirmHidden, handleConfirmClick})=>{


    return <div className="confirmbox">Do you really want to delete this?
        <button onClick={()=>{handleConfirmClick(true)}}>Yes</button>
        <button onClick={()=>{handleConfirmClick(false)}}>No</button>


    </div>
}

export default ConfirmBox