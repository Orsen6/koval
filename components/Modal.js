import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function Modal({enableModal, disableModal, children}) {

  const dispatch = useDispatch()
  const modalState = useSelector(state => state.modal)

  return (
    <div className={modalState ? 'modal active' : 'modal'} onClick={() => disableModal()}>
        <div className="modal_body" onClick={(e) => e.stopPropagation()}>
               {children}
        </div>
    </div>
  )
}

export default Modal