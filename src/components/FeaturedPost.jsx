"use client"

import PostCard from "./PostCard";

const FeaturedPost = ({ data }) => {
    return (
        <div>
            <h1 className="text-center">Home Page</h1>
            <div>
                {
                    data.slice(0, 20).map((post) => (
                        <PostCard key={post.id} id={post.id} title={post.title}></PostCard>
                    ))
                }

            </div>
        </div>
    );
};

export default FeaturedPost;