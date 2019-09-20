import React from 'react'

const BlogPost = props => {
    const {posts} = props

    const mappedPosts = posts.map(post => {
        return (
            <div className='posts'>
                <h2 className='postTitle'>{post.title}</h2>
                <h3 className='postSubTitle'>{post.subTitle}</h3>
                <p className="postAuthorDate">Posted by <a href='/author' className='author'>{post.author}</a> on {post.date}</p>
            </div>
            
        )
    })
    return (
        <div>
            {mappedPosts}
        </div>
    )
}

export default BlogPost