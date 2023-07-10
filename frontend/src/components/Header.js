import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='h-14 gap-10 flex flex-row align-middle bg-white pl-8 p-2 text-lg font-medium text-fuchsia-800'>
            <Link to="/">
                <h1>news</h1>
            </Link>
            <Link to="/">
                <h1>Categorias</h1>
            </Link>
        </div>
    );
}