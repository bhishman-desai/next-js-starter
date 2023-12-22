import React, { Suspense } from "react";
import getUser from "@/lib/getUser";
import { Post, User } from "@/types";
import getUserPost from "@/lib/getUserPost";
import UserPost from "@/app/users/[userID]/components/UserPost";
import { Metadata } from "next";

type Params = {
  params: {
    userID: string;
  };
};

export const generateMetadata = async ({
  params: { userID },
}: Params): Promise<Metadata> => {
  const userData: Promise<User> = getUser(userID);
  const user = await userData;
  return {
    title: user.name,
    description:
      user.id +
      " " +
      user.name +
      " " +
      user.email +
      " " +
      user.address +
      " " +
      user.website +
      " " +
      user.company +
      " " +
      user.phone +
      " " +
      user.username,
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
