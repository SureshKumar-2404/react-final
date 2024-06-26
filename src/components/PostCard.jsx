import React from 'react'
import appwriteService from '../appwrite/dataConfig'
import { Link } from 'react-router-dom'
function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.filePreview(featuredImage)} alt={title} className='rounded-xl '></img>
                </div>
                <h2 className='text-xl font-bold'></h2>
            </div>
        </Link>
    )
}

export default PostCard