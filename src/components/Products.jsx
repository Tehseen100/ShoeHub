import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = ({ searchQuery, selectedBrand }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('products.json');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Filter products based on search query and selected brand
    const filteredProducts = data.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
        return matchesSearch && matchesBrand;
    });

    return (
        <div className="w-full flex items-center justify-center pb-10">
            {isLoading ? (
                // Spinner or loading message
                <div className="flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="grid lg:grid-cols-4 mobile:grid-cols-2 grid-cols-1 gap-7">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, idx) => (
                            <div
                                key={idx}
                                id="product"
                                className="flex flex-col justify-between bg-white text-black w-[270px] rounded-xl"
                            >
                                <div className="bg-[#abababce] w-full h-52 flex items-center justify-center rounded-t-xl">
                                    <img
                                        className="object-cover object-center w-[210px] h-[210px]"
                                        src={product.img}
                                        alt={product.name}
                                    />
                                </div>
                                <div className="px-3 mt-3 h-[80px]">
                                    <h2 className="text-md overflow-hidden leading-5 font-semibold">
                                        {product.name}
                                    </h2>
                                    <h4 className="text-md font-semibold my-2">${product.price.toFixed(2)}</h4>
                                </div>
                                <button className="bg-emerald-700 text-white w-full py-2 font-semibold rounded-b-xl">
                                    Buy Now
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className=" w-full flex items-center">No products found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Products;
