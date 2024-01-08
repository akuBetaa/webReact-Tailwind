import React from 'react'
import CardBlog from '../components/fragments/CardBlog'

const BlogPage = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:px-[100px] gap-8'>
            <CardBlog>
                <CardBlog.Header />
                <CardBlog.Body title="Lorem ipsum">
                    Lorem ipsum dolor sit amet, consectetur ad suscipit iste, praesentium accusamus, molestiae magnam eius!
                </CardBlog.Body>
                <CardBlog.Footer />
            </CardBlog>

            <CardBlog>
                <CardBlog.Header />
                <CardBlog.Body title="Lorem ipsum">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nemo quia provident officiis eaque eos recusandae incidunt, maxime rerum natus aliquam repudiandae aut suscipit iste, praesentium accusamus, molestiae magnam eius!
                </CardBlog.Body>
                <CardBlog.Footer />
            </CardBlog>

            <CardBlog>
                <CardBlog.Header />
                <CardBlog.Body title="Lorem ipsum">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nemo quia provident officiis eaque eos recusandae incidunt, maxime rerum natus aliquam repudiandae aut suscipit iste, praesentium accusamus, molestiae magnam eius!
                </CardBlog.Body>
                <CardBlog.Footer />
            </CardBlog>
        </div>
    )
}

export default BlogPage