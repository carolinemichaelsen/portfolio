import React from "react"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function About() {

    return (
        <div className='flex flex-row bg-gray-300 shadow-lg shadow-gray-500 justify-center w-full columns-2'>
            <div className='text-xl leading-loose text-center'>
                <p className='p-20 text-sm max-w-md text-left'>
                Há um pouco mais de <RoughNotation type='circle' show={true} color='purple'>um ano</RoughNotation> estudando em plataformas como <RoughNotation type="highlight" show={true} color="#ffd54f">Alura, Coursera,</RoughNotation><RoughNotation type='highlight' show={true} color='pink'> Scrimba e freeCodeCamp.</RoughNotation>
                </p>
            </div>
            <div className='text-xl leading-loose text-center'>
                <p className='p-20 text-sm max-w-md text-left'>
                Há um pouco mais de <RoughNotation type='circle' show={true} color='purple'>um ano</RoughNotation> estudando em plataformas como <RoughNotation type="highlight" show={true} color="#ffd54f">Alura, Coursera,</RoughNotation><RoughNotation type='highlight' show={true} color='pink'> Scrimba e freeCodeCamp.</RoughNotation>
                </p>
            </div>
        </div>
    )
}