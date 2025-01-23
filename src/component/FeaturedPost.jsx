"use client"

import PostCard from "./PostCard";

const FeaturedPost = ({data}) => {
    return (
        <div className=" ">
            {
                data.slice(0, 20).map((post)=>(
                  <PostCard key={post.id} title={post.title}></PostCard>
                ))
            }
            
        </div>
    );
};

export default FeaturedPost;