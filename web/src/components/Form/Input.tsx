import { InputHTMLAttributes } from "react"


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) =>{
    return(
        <>
            <input 
                {...props}
                placeholder='Selecione o game que deseja jogar' 
                className='bg-zinc-900 px-3 py-4 rounded text-sm placeholder:text-zinc-500'
            />
        </>
    )
}