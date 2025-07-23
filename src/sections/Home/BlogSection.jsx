import React from 'react';


const leafBgTopLeft = './src/assets/images/icons/palmLeafBg.svg';
const leafBgBottomRight = './src/assets/images/icons/logo-vector.svg';
const treeIcon = './src/assets/images/icons/tree.svg';

const blogPosts = [
    {
        image: './src/assets/images/Home/blog/image1.png',
        category: 'Nature & Stillness',
        title: '5 Simple Rituals to Embrace Slow Living on Vacation',
        date: 'July 7, 2025',
        comments: 3,
    },
    {
        image: './src/assets/images/Home/blog/image2.png',
        category: 'Coastal Escapes',
        title: 'Explore top green destinations in the world',
        date: 'June 8, 2025',
        comments: 2,
    },
    {
        image: './src/assets/images/Home/blog/image3.png',
        category: 'Design & Atmosphere',
        title: 'Top 15 best travel blogs to follow in 2025',
        date: 'May 2, 2025',
        comments: 4,
    },
    {
        image: './src/assets/images/Home/blog/image4.png',
        category: 'Wellness & Retreats',
        title: 'Amazing photos of rare and exotic plants in Africa',
        date: 'May 5, 2025',
        comments: 3,
    },
];

const BlogPostCard = ({ post }) => {
    return (
        <div className="group cursor-pointer">

            <div className="relative">
                <div className="
                    absolute -top-2 -left-2 -bottom-2 right-2
                    border-3 border-dark-brown
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    z-10">
                </div>

                {/* The Image */}
                <div className="relative overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover"
                    />
                </div>

            </div>

            {/* Content section below the image */}
            <div className="pt-6 px-2">
                <p className="text-xs font-medium font-teacher uppercase text-dark-brown tracking-wider mb-2">{post.category}</p>
                <h3 className="text-xl font-sans font-light text-dark-blue mb-4 leading-tight">
                    {post.title}
                </h3>
                <div className="flex items-center font-sans text-xs text-cream-dark font-medium">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.comments} Comments</span>
                </div>
            </div>
        </div>
    );
};

const BlogSection = () => {
    return (
        <section
            className="relative bg-cream py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-teacher"
            style={{
                '--leaf-bg-tl-url': `url(${leafBgTopLeft})`,
                '--leaf-bg-br-url': `url(${leafBgBottomRight})`,
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
                        <img src={treeIcon} alt="Blog Icon" className="w-8 h-8 opacity-70" />
                    </div>
                    <p className="text-sm uppercase tracking-widest text-dark font-medium mb-3">
                        From Our Blog
                    </p>
                    <h2 className="text-5xl md:text-6xl font-medium text-dark tracking-tight">
                        The Journal
                    </h2>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogPostCard key={index} post={post} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="font-semibold bg-transparent p-2 border-2 border-brand-accent text-brand-accent hover:bg-stone-700 hover:text-white transition-colors duration-300">
                        Browse the Journal
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;