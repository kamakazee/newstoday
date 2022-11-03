const ConfirmBox = ({setConfirmHidden, handleConfirmClick})=>{


    return <div className="confirmbox">Do you really want to delete this?
        <button onClick={handleConfirmClick}>Yes</button>


    </div>
}

export default ConfirmBox