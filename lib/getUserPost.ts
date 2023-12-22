import { Post } from "@/types";

const getUserPost = async (userID: string): Promise<Post[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userID}`,
  );
  if (!response.ok) throw new Error("Failed to fetch the user's post data");
  return response.json() as Promise<Post[]>;
};

export default getUserPost;
