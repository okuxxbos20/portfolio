import React, { FC } from 'react'

export const MoonIcon: FC<{ size?: string; color?: string }> = ({ size, color }) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        className="bi bi-moon"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
        />
      </svg>
    </>
  )
}
