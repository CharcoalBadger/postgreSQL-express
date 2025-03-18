const pool = require("./pool");

// Get all usernames, with optional search functionality
async function getAllUsernames(searchQuery) {
  let query = "SELECT * FROM usernames";
  let values = [];

  // If searchQuery exists, modify the SQL query to filter results
  if (searchQuery) {
    query += " WHERE username ILIKE $1"; // ILIKE makes the search case-insensitive
    values.push(`%${searchQuery}%`);
  }

  const { rows } = await pool.query(query, values);
  return rows;
}

// Function to delete all usernames from the database
async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  deleteAllUsernames, // <-- Export the new delete function
};
