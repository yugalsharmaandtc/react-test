import React from 'react'

function Search() {

    const handleSubmit =(e) => {
        e.preventDefault();
    //   alert('Search submitted!');
    const query = e.target.elements.search.text
    console.log('Search query:', query);
};
  return (
    <>
    <div className="flex justify-center items-center bg-grey-100 py-2 w-full">
      <form onClick={handleSubmit} className="flex justify certre items-center space-x-2 w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
    </div>
  </>
  )
}

export default Search

// Its better to use handle submit function along wit the form nbot the button because it is the standard and ggod way although  on button it will work but on form its good 