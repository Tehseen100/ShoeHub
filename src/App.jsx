import React, { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  return (
    <div className='bg-[#0c1720] text-white w-full min-h-screen h-auto'>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
      <Products
        selectedBrand={selectedBrand}
        searchQuery={searchQuery}
      />
    </div>
  )
}

export default App