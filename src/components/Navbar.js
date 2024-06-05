import { Link } from "react-router-dom";

const Navbar = ({ handleSearch }) => {
  return (
    <div className="grid grid-cols-2 p-3">
      <div className="flex ml-20">
        <div>
          <h1 className="text-blue-600 text-lg font-bold italic">Flipkart</h1>
          <h4 className="text-gray-500 text-sm italic">Explore</h4>
        </div>

        <div className="bg-blue-50 flex items center p-2 w-full ml-7">
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
        <Link to="/signin">
          <div className="flex ml-6">
            🧑
            <h1>Sign in</h1>
          </div>
        </Link>
        <div className="flex ml-6">
          🛒
          <h1>Cart</h1>
        </div>
        <div
          // onClick={logout}
          className="flex ml-6"
        >
          📤
          <h1>Log out</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
