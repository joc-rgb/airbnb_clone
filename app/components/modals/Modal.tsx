'use client'

import React, { useCallback, useEffect, useState } from 'react'
import {IoCloseOutline} from 'react-icons/io5'
import Button from '../Button'

interface ModalProps{
    isOpen: boolean
    onClose: ()=>void
    onSubmit:()=>void
    title?: string
    body?: React.ReactElement
    footer?: React.ReactElement
    actionLabel: string
    disabled?:boolean
    secondaryActionLabel?: string
    secondaryAction?: ()=>void
}

const Modal:React.FC<ModalProps> = ({isOpen, onClose, onSubmit, title, body, actionLabel, disabled,secondaryAction,secondaryActionLabel, footer}) => {

    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
        setShowModal(isOpen)
    },[isOpen])

    const handleClose = useCallback(()=>{
        if(disabled){
            return;
        }
        setShowModal(false)
        setTimeout(()=>{
            onClose()
        },300)

    }, [disabled, onClose])

    const handleSubmit = useCallback(()=>{
        if(disabled) return
        onSubmit()
    },[disabled, onSubmit])

    const handleSecondaryAction = useCallback(()=>{
        if(disabled || !secondaryAction) return
        secondaryAction()
    },[])

    if (!isOpen) return null
  return (
    <>
    <div className="flex justify-center items-center overflow-x-hidden  fixed inset-0 outline-none z-50 focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-4/12 my-6 mt-64 mx-auto h-full lg:h-auto md:h-auto ">
            {/** CONTENT */}
            <div className={`translate duration-300 h-full ${showModal?'translate-y-0 opacity-100':'translate-y-full opacity-0' } bg-white rounded-md`}>
            <div className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
                {/** HEADER */}
                <div className="flex items-center p-3 rounded-t justify-center relative border-b-[1px]">
                    <button onClick={handleClose} className='absolute left-9 border-0 p-1 transition hover:opacity-70'><IoCloseOutline /></button>
                    <p className="text-md font-semibold">{title}</p>
                </div>
                {/** BODY */}
                <div className='relative p-6 flex-auto'>
                    {body}
                </div>
                {/** FOOTER */}
                <div className="flex flex-col items-center gap-2 p-6">
                    <div className="flex gap-4 w-full items-center flex-row">
                    {secondaryAction && secondaryActionLabel && <Button label={secondaryActionLabel} outline onClick={handleSecondaryAction} disabled={disabled}/>}
                    <Button label={actionLabel} onClick={handleSubmit} disabled={disabled}/>
                    </div>
                    {footer}
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal