import React from 'react'
import useFetch from '../hooks/useFetch';

export default function Post() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/posts')


    if (loading) return <p>Carregando...</p>

    if (error) return <p>Erro ao carregar a página!</p>

    return (
        <div>
            {data.map(post => {
                return (
                    <div key={post.id} className='post-content'>
                        <h1 className='text-lg text-purple-600 text-center'>{post.attributes.title}</h1>
                        <p>{post.attributes.description}</p>
                    </div>
                )
            })}
        </div>
    );
}