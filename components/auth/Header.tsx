import { FC } from 'react'
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
interface HeaderProps {
  label:string;
}

const font = Poppins({
    subsets:['latin'],
    weight:'600'
})
const Header: FC<HeaderProps> = ({label}) => {
  return <div className='flex w-full flex-col gap-y-7 justify-center items-center'>
  <h1 className={cn('text-3xl font-semibold', font.className)}>
    🔒Auth
  </h1>
  <p className='text-muted-foreground text-sm'>
    {label}
  </p>
  </div>
}

export default Header