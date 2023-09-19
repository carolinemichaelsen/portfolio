import React from "react"
import { BiLogoReact, BiLogoJavascript, BiLogoFigma } from 'react-icons/bi';

export default function About() {
    return (
        <div className='flex flex-row bg-gray-300 shadow-lg shadow-gray-500 py-4 px-6 w-full columns-2'>
            <div className='text-xl leading-loose text-center'>
                <p className='p-20 text-center text-sm'>
                    Migrando da comunicação para o desenvolvimento Front end.
                </p>
                <div className='flex flex-row p-2 gap-2'>
                    <BiLogoReact />
                    <BiLogoJavascript />
                    < BiLogoFigma />
                </div>
            </div>
            <div>
                <p>oiii</p>
            </div>
        </div>
    )
}