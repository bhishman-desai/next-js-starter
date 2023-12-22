import { User } from "@/types";

const getUser = async (userID: string): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userID}`,
  );
  if (!response.ok) throw new Error("Failed to fetch the user data");
  return response.json() as Promise<User>;
};

export default getUser;
