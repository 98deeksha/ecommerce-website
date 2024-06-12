import { Link, useNavigate } from "react-router-dom";

const Home = ({products, filteredData}) => {

     const navigate = useNavigate();

     const handleProductClick = (product) => {
       navigate("/details", { state: { product } });
     };

 
  return (
    <div className="bg-gray-300 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {filteredData.length > 0 ? (
        filteredData.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => handleProductClick(item)}
              className="mx-auto mt-6 w-64 transform overflow-hidden rounded-lg bg-white dark:bg-gray-50 shadow-md duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="cursor-pointer w-36 h-32 mt-3"
              />
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
                  {item.title}
                </h2>
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-black">
                  {item?.description.substring(
                    0,
                    item?.description.indexOf(" ")
                  ) + "..."}
                </p>
                <p className="mb-2 text-base dark:text-black text-gray-700">
                  $ {item.price}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Home;


//   <div class="flex items-center">
    
//     <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
//       $25.00
//     </p>
//     <p class="ml-auto text-base font-medium text-green-500">20% off</p>
//   </div>;
