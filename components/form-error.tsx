import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { FC } from 'react'

interface FormErrorProps {
  message?: string
}

const FormError: FC<FormErrorProps> = ({message}) => {
  if(!message) return null;

  return (
    <div className='bg-destructive/15 flex items-center p-3 gap-x-4  rounded-md text-destructive'>
        <ExclamationTriangleIcon className='w-4 h-4'/>
        <p className='text-destructive  text-sm font-medium'>{message}</p>
    </div>
  )
}

export default FormError