import React from 'react'
import CardBlog from '../components/fragments/CardBlog'
import { DataBlog } from '../dist/data'

const BlogPage = () => {
    return (
        <div className='container my-4 mx-auto grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:px-[100px] gap-8'>
            {/* RENDERING LIST  */}
            {DataBlog.map((blog) => (
                <CardBlog>
                    <CardBlog.Header image={blog.image}/>
                    <CardBlog.Body title={blog.title}>
                        {blog.description}
                    </CardBlog.Body>
                    <CardBlog.Footer />
                </CardBlog>
            ))}
        </div>
    )
}

export default BlogPage