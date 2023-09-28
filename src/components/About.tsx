import React from "react"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function About() {

    return (
        <div className='flex flex-row bg-gray-300 shadow-lg shadow-gray-500 justify-center w-full columns-2'>
            <div className='text-xl leading-loose text-center'>
                <p className='p-20 text-sm max-w-md text-left'>
                Migrando da comunicação para o desenvolvimento front-end. 
                <br></br>
                <br></br>
                Há pouco mais de <RoughNotation type='circle' show={true} color='blue'>um ano</RoughNotation> estudando em plataformas como Alura, Coursera, Scrimba e freeCodeCamp.
                </p>
            </div>
            <div className='p-20 leading-loose text-left'>
                <p className=' text-sm max-w-md'>
                Formação <RoughNotation type='circle' show={true} color='red'>React</RoughNotation> na Alura.</p>
                <p className="text-xs mt-2">Tempo total: <RoughNotation type="highlight" show={true} color="#ffd54f">80 horas.</RoughNotation></p>
                <p className='p-2 text-sm max-w-md'>
                Formação <RoughNotation type='underline' show={true} color='purple'>JavaScript</RoughNotation> na Alura.</p>
                <p className="text-xs mt-2">Tempo total: <RoughNotation type="highlight" show={true} color="#ffd54f">80 horas.</RoughNotation></p>
                <p className='p-2 text-sm max-w-md'>
                Formação <RoughNotation type='underline' show={true} color='purple'>React Native</RoughNotation> na Alura.<br></br>
                Em andamento.
                </p>    
            </div>
        </div>
    )
}