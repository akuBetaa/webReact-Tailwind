import React from 'react'
import CardBlog from '../components/fragments/CardBlog'
import { DataBlog } from '../dist/data'
import PageLayouts from '../components/layouts/PageLayouts'

const BlogPage = () => {
    return (
        <PageLayouts >
            <div className='flex flex-col items-center my-8'>
                <p className='text-sm text-primary'>Edukasi Tuberkolosis</p>
                <h1 className='text-3xl font-bold my-2'>Artikel Seputar Tuberkolosis</h1>
            </div>
            <div className='container my-4 mx-auto grid grid-cols-2 px-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 lg:px-[100px] gap-8'>
                {/* RENDERING LIST  */}
                {DataBlog.map((blog) => (
                    <CardBlog key={blog.id}>
                        <CardBlog.Header image={blog.image} />
                        <CardBlog.Body title={blog.title}>
                            {window.innerWidth > 600 ? (
                                blog.description
                            ) : (
                                blog.description.split(' ').slice(0, 7).join(' ')
                            )
                            }
                        </CardBlog.Body>
                        <CardBlog.Footer />
                    </CardBlog>
                ))}
            </div>
        </PageLayouts>
    )
}

export default BlogPage