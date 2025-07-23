const BlogPostCard = ({ post }) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative">
                <div
                    className="
                    absolute -top-2 -left-2 -bottom-2 right-2
                    border-3 border-dark-brown
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    z-10"
                ></div>

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
                <p className="text-xs font-medium font-teacher uppercase text-dark-brown tracking-wider mb-2">
                    {post.category}
                </p>
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

export default BlogPostCard;