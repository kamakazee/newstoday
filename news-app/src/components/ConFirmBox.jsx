const ConfirmBox = ({setConfirmHidden, handleConfirmClick})=>{


    return <div className="confirmbox">Do you really want to delete this?
        <button className="confirm" onClick={()=>{handleConfirmClick(true)}}>Yes</button>
        <button className="confirm" onClick={()=>{handleConfirmClick(false)}}>No</button>


    </div>
}

export default ConfirmBox