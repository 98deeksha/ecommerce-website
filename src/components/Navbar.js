import { Link } from "react-router-dom";

const Navbar = ({ handleSearch, handleAuth, userLoggedIn }) => {

  return (
    <div className="grid sm:grid-cols-2 p-3 ">
      <div className="flex lg:ml-20 sm:ml-3">
        <div>
          <h1 className="text-blue-600 text-lg font-bold italic">Shopkart</h1>
          <h4 className="text-gray-500 text-sm italic">Explore</h4>
        </div>

        <div className="bg-blue-50 flex items center p-2 w-full ml-7 h-10 rounded">
          🔍
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full bg-blue-50 rounded pl-3 outline-none"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="flex mt-3">
        <div className="flex ml-4">
          🛍
          <h1>Become a seller</h1>
        </div>
        {userLoggedIn ? (
          <div className="flex ml-6">
            🧑
            <h1>
              <Link
                to="/"
                onClick={() => {
                  localStorage.removeItem("token");
                  alert("Successfully logged out");
                  handleAuth();
                }}
              >
                Sign out
              </Link>
            </h1>
          </div>
        ) : (
          <Link to="/signin">
            <div className="flex ml-6">
              🧑
              <h1>Sign in</h1>
            </div>
          </Link>
        )}
        <div className="flex ml-6">
          🛒
          <h1>Cart</h1>
        </div>
        <div
          // onClick={logout}
          className="flex ml-6"
        >
          📤
          <h1>User</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
