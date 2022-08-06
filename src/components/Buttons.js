import React from "react"
import { Link } from "gatsby"

export const PrimaryButton = ({ children, className, ...rest }) => {
  return (
    <Link
      {...rest}
      className={`inline-flex items-center justify-center px-5 py-3 text-base font-medium transition-colors duration-100 rounded-md text-grey-900 bg-grey-200 hover:bg-grey-50 ${className}`}
    >
      {children}
    </Link>
  )
}

export const SecondaryButton = ({ children, className, ...rest }) => {
  return (
    <Link
      {...rest}
      className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs font-medium transition-colors duration-100 text-grey-700 bg-white rounded-md shadow lg:text-sm group hover:bg-grey-50 ${className}`}
    >
      {children}
    </Link>
  )
}
