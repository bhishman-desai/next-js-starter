import React, { Suspense } from "react";
import getUser from "@/lib/getUser";
import { Post, User } from "@/types";
import getUserPost from "@/lib/getUserPost";
import UserPost from "@/app/users/[userID]/components/UserPost";

type Params = {
  params: {
    userID: string;
  };
};

const UserDataPage = async ({ params: { userID } }: Params) => {
  const userData: Promise<User> = getUser(userID);
  const userPostData: Promise<Post[]> = getUserPost(userID);

  /*const [user, userPost] = await Promise.all([userData, userPostData]);*/
  const user = await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPost promise={userPostData}></UserPost>
      </Suspense>
    </>
  );
};

export default UserDataPage;
