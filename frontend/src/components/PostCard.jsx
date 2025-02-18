import React from 'react'
import { NavLink } from 'react-router-dom'

const PostCard = ({ post }) => {
    return (
        <div className='group relative  border border-teal-500 min-w-[350px] hover:border-2 transition-all h-[350px] lg:w-[300px] overflow-hidden rounded-lg sm:w-[350px]'>
            <NavLink to={`/post/${post.slug}`}>

                <img src={post.image} alt={post.title} className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20 relative' />

            </NavLink>

            <div className='p-3 flex flex-col gap-2'>
                <p className='text-lg font-semibold line-clamp-3'>{post.title}</p>
                <span className='italic text-sm'>{post.category}</span>

                <NavLink to={`/post/${post.slug}`} className='z-10  absolute bottom-[-200px] left-0 right-0 group-hover:bottom-0 group-hover:z-20 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white text-center py-2 rounded-md rounded-tl-none rounded-tr-none m-2'>
                    Read More
                </NavLink>


            </div>

        </div>
    )
}

export default PostCard