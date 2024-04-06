async function getPosts() {
  const response = await fetch(
    "https://dev.to/api/articles?username=anddreluis2"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export { getPosts };
