import { useState, useEffect } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import Welcome from "./Welcome";
import Footer from "./Footer";

const Main = () => {
    const [filteredData, setFilteredData] = useState([])
      const [products, setProducts] = useState([]);

      useEffect(() => {
        fetchData();
      }, []);

      const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data)
        setFilteredData(data)
      };


    const handleSearch = (searchWord) => {
        const result = products.filter((item) => item.title.trim().toLowerCase().includes(searchWord.toLowerCase()))
        setFilteredData(result)
    }

    const handleFilter = (criteria) => {
        const result = products.filter((item) => item.category.toLowerCase().includes(criteria.toLowerCase()))
        setFilteredData(result)
    }

  return (
    <div className="">

    <Navbar handleSearch={handleSearch} />
    <Menubar handleFilter={handleFilter} />
    <Welcome />
    <Home products={products} filteredData={filteredData}/>
    <Footer />
    </div>
  );
};

export default Main;
