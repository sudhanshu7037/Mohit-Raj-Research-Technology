import React, { useState } from 'react';
import image1 from "../assets/homepageimages/blogpageimages/blogbanner.png";



const BlogPage = () => {
  const categories = ['All', 'Cloud', 'AI/ML', 'DevOps', 'Cybersecurity'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogs = [
    {
      id: 1,
      title: 'Top 5 Cloud Trends in 2025',
      description: 'Explore how businesses are adopting cloud-native solutions and hybrid cloud models...',
      image: 'https://images.unsplash.com/photo-1532009877282-3340270e0529?auto=format&fit=crop&w=800&q=80',
      author: 'John Doe',
      date: 'July 10, 2025',
      category: 'Cloud',
      featured: true,
    },
    {
      id: 2,
      title: 'AI Transforming IT Operations',
      description: 'From automation to predictive analytics, AI is reshaping IT operations like never before...',
      image: 'https://images.unsplash.com/photo-1581090700227-1e8e59f82d4a?auto=format&fit=crop&w=800&q=80',
      author: 'Jane Smith',
      date: 'July 9, 2025',
      category: 'AI/ML',
    },
    {
      id: 3,
      title: 'DevOps Best Practices for 2025',
      description: 'Enhance delivery speed, collaboration, and system resilience with these key DevOps tips...',
      image: 'https://images.unsplash.com/photo-1648981434121-c6be1c0c6b8c?auto=format&fit=crop&w=800&q=80',
      author: 'Mark Lee',
      date: 'July 8, 2025',
      category: 'DevOps',
    },
    {
      id: 4,
      title: 'Cybersecurity in the Cloud Era',
      description: 'Discover modern approaches to secure your cloud infrastructure from threats...',
      image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d5?auto=format&fit=crop&w=800&q=80',
      author: 'Emily Clark',
      date: 'July 7, 2025',
      category: 'Cybersecurity',
    },
  ];

  const filteredBlogs = selectedCategory === 'All' ? blogs : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section with Background Image */}
     <section className="relative h-screen w-full flex items-start justify-start bg-black text-white pt-28">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={image1}
                className="w-full h-full object-cover brightness-50"
              />
            </div>
    
            {/* Content */}
            <div className="relative z-10 pl-10 md:pl-20 max-w-2xl w-full">
              <p className="text-sm tracking-widest uppercase text-white/70 mb-4 ml-10 mt-10">
                BLOGS
              </p>
    
              {/* Horizontal Line */}
              <div className="w-[90%] ml-10 border-t border-white/40 mb-6"></div>
    
              <h1 className="text-5xl md:text-6xl font-light leading-tight ml-10 font-houschka">
                Latest   <span className="font-normal text-blue-900">Blogs</span>
              </h1>
            </div>
          </section>
    
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Blog */}
      {blogs.find(b => b.featured) && (
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
            <img
              src={blogs.find(b => b.featured).image}
              alt="Featured"
              className="w-full lg:w-1/2 h-64 object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{blogs.find(b => b.featured).title}</h2>
                <p className="text-gray-600 mb-4">{blogs.find(b => b.featured).description}</p>
              </div>
              <div className="text-sm text-gray-500">
                By {blogs.find(b => b.featured).author} • {blogs.find(b => b.featured).date}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-10">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{blog.description}</p>
              <div className="text-sm text-gray-500 mb-2">By {blog.author} • {blog.date}</div>
              <button className="text-blue-600 font-medium hover:underline">Read More →</button>
            </div>
          </div>
        ))}
      </section>

      {/* Load More */}
      <div className="text-center pb-12">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
          Load More Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
