"use client"
import Link from "next/link";

const PostCard = ({ title, id }) => {
    return (
        <div className="my-2 w-80 mx-auto text-center border">
            <Link href={`/blog/${id}`}>
                <p className="text-blue-500 hover:underline">{title}</p>
            </Link>
        </div>
    );
};

export default PostCard;