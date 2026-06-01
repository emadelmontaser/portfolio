import React, { ButtonHTMLAttributes } from 'react'

export default function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={`px-4 py-2 bg-transparent border border-gray-700 text-sm rounded hover:border-accent transition ${props.className || ''}`}>
      {children}
    </button>
  )
}
