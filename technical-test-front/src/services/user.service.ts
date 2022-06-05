export async function getDataForAllUsers() {
  try {
    const response = await fetch("http://localhost:3001/users");
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getDataByUserId(id: number) {
  try {
    const response = await fetch(`http://localhost:3001/user/${id}`);
    return await response.json();
  } catch (error) {
    return [];
  }
}
