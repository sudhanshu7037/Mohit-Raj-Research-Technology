import React from 'react'

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Blog Page</h1>
      <div className="max-w-4xl mx-auto px-4">
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Blog Post Title</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </article>
        <article className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Another Blog Post Title</h2>
          <p className="text-gray-700 mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </article>
      </div>


    </div>
  )
}

export default Blog