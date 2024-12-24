import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`} className="w-full">
      <div className='w-full p-4 bg-white bg-opacity-10 shadow-xl'>
        <div className='w-full justify-center mb-4'>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className='rounded-xl w-full h-auto'
          />
        </div>
        <h2 className='text-xl font-bold bg-white opacity-80 p-2 rounded-lg'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
