import React from "react";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { User } from "@/types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  return (
    <section>
      <h2>Users</h2>
      {users.map((user, index) => {
        return (
          <>
            <p key={index}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
              <br />
            </p>
          </>
        );
      })}
    </section>
  );
};

export default UsersPage;
