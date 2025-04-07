import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserData } from "../../assets/data";
import { NegativeArray } from "../../helpers/NegativeArray";


const UserComponent = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadUser = () => {
    setLoading(true);
    setUser(null);
    setError(null);

    fetchUserData()
      .then((data)=>setUser(data))
      .catch((error)=>setError(error.message))
      .finally(()=>setLoading(false));
  }


  // Example usage:
const arr = NegativeArray([1, 2, 3, 4, 5]);
console.log(arr[-1]); // 5
console.log(arr[-2]); // 4
console.log(arr[0]);  // 1
console.log(arr.length); // 5

  return (
    <div>
      <Link to="/">Go to Home</Link>

      <h2>User Data</h2>
      <button onClick={loadUser} disabled={loading}>
        {loading ? "Loading..." : "Fetch User"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {user && <p>Name: {user.name}</p>}
    </div>
  );
};

export default UserComponent;
