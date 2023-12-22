import React from "react";
import { Post } from "@/types";

type Props = {
  promise: Promise<Post[]>;
};

const UserPost = async ({ promise }: Props) => {
  const response = await promise;
  return (
    <>
      {response.map((post) => {
        return (
          <article key={post.userId}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br />
          </article>
        );
      })}
    </>
  );
};

export default UserPost;
