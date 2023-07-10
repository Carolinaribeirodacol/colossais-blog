import React from 'react'
import useFetch from '../hooks/useFetch';
import PageError from './PageError';
import PageLoading from './PageLoading';
import { getStrapiAPIURL } from '../api';

export default function Post() {
    // const { loading, error, data } = useFetch('http://localhost:1337/api/posts?populate=*')
    const { loading, error, data } = useFetch(getStrapiAPIURL(`api/posts?populate=*`))


    if (loading) return <PageLoading />

    if (error) return <PageError />

    return (
        <div className='bg-gradient-to-t from-fuchsia-700 via-fuchsia-900 to-current flex justify-center h-screen'>
            {data.map(post => {
                // console.log(`http://localhost:1337${post.attributes.image?.data.attributes.url}`);
                return (
                    <div className='bg-gray-950 w-1/2 h-max p-10 m-10' key={post.id}>
                        <h1 className='text-3xl text-fuchsia-400 leading-loose'>{post.attributes.title}</h1>
                        <p className='text-base text-white leading-loose'>{post.attributes.description}</p>
                        {/* <img src={`http://localhost:1337${post.attributes.image?.data.attributes.url}`} alt='' /> */}
                    </div>
                )
            })}
        </div>
    );
}