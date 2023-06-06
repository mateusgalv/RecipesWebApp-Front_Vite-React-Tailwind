import { ReactNode } from "react";

export default function Background({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='background-image-container' />
      <div className='relative z-10 h-whole'>
        <div className='flex justify-center'>
          {children}
        </div>
      </div>
    </>
  )
}
