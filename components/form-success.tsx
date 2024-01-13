import { CheckCircledIcon } from '@radix-ui/react-icons';
import { FC } from 'react'

interface FormSuccessProps {
  message?: string
}

const FormSuccess: FC<FormSuccessProps> = ({message}) => {
  if(!message) return null;

  return (
    <div className='bg-emerald-500/15 flex items-center p-3 gap-x-4  rounded-md text-emerald-500'>
        <CheckCircledIcon className='w-4 h-4'/>
        <p className='text-emerald-500 text-sm font-medium'>{message}</p>
    </div>
  )
}

export default FormSuccess