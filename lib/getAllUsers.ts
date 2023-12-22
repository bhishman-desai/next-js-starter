const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Failed to fetch the user data");
  return response.json();
};

export default getAllUsers;
