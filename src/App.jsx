import axios from 'axios';
import {useState ,useEffect } from 'react';
import './App.css';
import { useFormik } from 'formik';
import ProductCard from './component/Productcard'


function App() {

  const [allProducts, setAllProducts] = useState([])


  const getallproducts= async()=>{
try {
  const getapi = await axios.get("http://localhost:5000/get-product")
      console.log("apiRes", getapi.data)

setAllProducts(getapi.data.products)
  
} catch (error) {
  console.log(error)
}

  }

  useEffect(()=>{
    getallproducts();
  },[])

  const formik = useFormik({
    initialValues : {
image : "",
title:"",
description:"",
price:0
    },
    onSubmit: async(values)=>{
try {
  const getapi = await axios.post("http://localhost:5000/add-products"  ,{
    image : values.image,
    title:values.title,
    description:values.description,
    price:values.price
  })

  getallproducts();
} catch (error) {
  console.log(error)
}
    }
  })
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <form onSubmit={formik.handleSubmit}
        
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Add Product
        </h1>

        {/* Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>

          <input
            type="text"
            name="image"
    onChange={formik.handleChange}
    value={formik.values.image}
            placeholder="Enter image URL"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>

          <input
            type="text"
            name="title"
      onChange={formik.handleChange}
    value={formik.values.title}
            placeholder="Enter product title"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>

          <textarea
            name="description"
            onChange={formik.handleChange}
    value={formik.values.description}
            placeholder="Enter product description"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>

          <input
            type="number"
            name="price"
            onChange={formik.handleChange}
    value={formik.values.price}         
            placeholder="Enter price"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

      {allProducts.map((eachproduct) => (
        <ProductCard
          key={eachproduct.id}
          product={eachproduct}
        />
      ))}

    </div>
    </div>
  );
}

export default App;
