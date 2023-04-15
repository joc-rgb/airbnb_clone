'use client'

import React from 'react'
import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form'
import { BiDollar } from 'react-icons/bi'

interface InputProps{
    id: string
    label: string
    type?: string
    disabled?: boolean
    required?: boolean
    formatPrice?: boolean
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
}
const Input: React.FC<InputProps> = ({errors, id, label, register, disabled, formatPrice, required, type='text'}) => {
  return (
    <div className='w-full relative'>
        {formatPrice && <BiDollar 
        className='absolute top-5 left-2 text-neutral-500'
        />}
        <input
        id={id} 
        type={type}
        disabled={disabled}
        placeholder=''
        {...register(id,{required})}
        className={`peer w-full font-light p-2 pt-6 bg-white disabled:opacity-70 rounded-md outline-none border focus:outline-none transition disabled:cursor-not-allowed 
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-rose-500 focus:border-rose-500': 'border-neutral-300 focus:border-neutral-500'}
          `}
        />
        <label htmlFor={label} className={`absolute text-base duration-150 transform -translate-y-3 z-10 top-5 origin-[0] ${formatPrice ? 'left-9' : 'left-3'} peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}>{label}</label>
    </div>
  )
}

export default Input