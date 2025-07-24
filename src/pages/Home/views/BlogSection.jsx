'use client';

import React from 'react';

import useFetchData from '../../../hooks/useFetchData';
import AsyncWrapper from '../../../components/ui/AsyncWrapper';
import Button from '../../../components/ui/Button';
import BlogPostCard from '../../../components/cards/BlogPostCard';

export default function BlogSection() {
  const { data, loading, error, refetch } = useFetchData('/home');
  const blog = data?.blogs || {};
  const blogPosts = blog.items || [];

  return (
    <AsyncWrapper loading={loading} error={error} retry={refetch}>
      <section
        className="relative bg-cream py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-teacher"
        style={{
          '--leaf-bg-tl-url': `url("${blog.leafTopLeft}")`,
          '--leaf-bg-br-url': `url("${blog.leafBottomRight}")`,
        }}
      >
        {/* Decorative Background Images */}
        <div
          className="absolute top-10 left-0 rotate-250 scale-y-[-1] w-64 h-64 bg-no-repeat bg-contain opacity-100 -translate-x-1/4 -translate-y-1/4"
          style={{ backgroundImage: 'var(--leaf-bg-tl-url)' }}
        ></div>
        <div
          className="absolute bottom-[-80px] md:bottom-0 right-0 w-[80px] md:w-40 h-40 bg-no-repeat bg-contain opacity-10"
          style={{ backgroundImage: 'var(--leaf-bg-br-url)' }}
        ></div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-3">
              <img
                src={blog.icon}
                alt="Blog Icon"
                className="w-8 h-8 opacity-70"
              />
            </div>
            <p className="text-sm uppercase tracking-widest text-dark font-medium mb-3">
              {blog.subtitle}
            </p>
            <h2 className="text-5xl md:text-6xl font-medium text-dark tracking-tight">
              {blog.title}
            </h2>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button buttonText="Browse the Journal" />
          </div>
        </div>
      </section>
    </AsyncWrapper>
  );
}
