import React from 'react';
// import { useState } from 'react';
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const query = e.target.elements.search.value;
//     if (!query.trim()) {
//       alert('Please enter a search query');
//       return;
//     }
//     console.log('Search query:', query);
//   };

function Search({search,handleSearch, handleSubmit}) {


  return (
    <div className="flex justify-center items-center bg-black-100 py-2 w-full">
      <form
        // onSubmit={handleSubmit}
        onSubmit={handleSubmit}
        className="flex justify-center items-center space-x-2 w-full max-w-full sm:max-w-md"
        aria-label="Search form"
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleSearch}
          placeholder="What do you want to eat..."
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
  );
}

export default Search;


// Its better to use handle submit function along with the form instead of the button because it is the standard and good way although on button it will work but on form its good.


/*
 * Example Note: Common Mistake in React Form Handling
 *
 * Original Issue (from Conversation):
 * - User had a React Search component where submitting the form didn't log the search query.
 * - Code snippet: The input lacked a 'name' attribute, but handleSubmit tried to access e.target.elements.search.value.
 * - Symptom: console.log('Search query:', query) showed undefined or nothing, no errors visible sometimes.
 *
 * What Was the Mistake:
 * - The <input> element was missing the 'name="search"' attribute.
 * - In HTML forms (and React), e.target.elements is an object that indexes form controls by their 'name' attributes.
 *   Without it, e.target.elements.search is undefined, so .value fails silently or throws an error.
 *
 * What Could Have Been Done to Avoid/Debug It:
 * - Always add 'name' attributes to form inputs when using uncontrolled forms and accessing via e.target.elements.
 * - Use browser dev tools: Inspect the form submission event and log e.target.elements to see what's available.
 * - Alternative approach: Switch to controlled inputs with useState (e.g., const [query, setQuery] = useState(''); and onChange handler).
 *   This avoids relying on DOM names and gives more React-like control.
 * - Add error handling: Wrap the value access in a try-catch or check if (e.target.elements.search) exists before accessing .value.
 *
 * What Was Changed:
 * - Added 'name="search"' to the <input> element (also added 'id="search"' for accessibility pairing with label).
 * - No changes to handleSubmit function itself, as the logic was correct—it just needed the proper form structure.
 * - Bonus enhancements: Added basic validation (if (!query.trim())), accessibility (sr-only label), and responsive max-width.
 *
 * Why the Change Fixed It:
 * - With 'name="search"', e.target.elements now has a 'search' key pointing to the input element.
 * - This allows e.target.elements.search.value to correctly retrieve the user's input, making the console.log work.
 * - Why not change handleSubmit? The function's code was fine; the bug was in the JSX markup (form structure), not the handler logic.
 *
 * Lesson: In React forms, ensure markup aligns with how you're accessing data. Uncontrolled forms rely on native HTML behaviors like 'name' attributes.
 */

/*
 * Note: Why handleSubmit Works When Defined Outside the Search Component
 *
 * Context:
 * - The Search component logs the form input value correctly, even with handleSubmit defined outside the component.
 * - Question: Why does it work when handleSubmit is moved outside the Search function and export statement?
 *
 * Why It Works:
 * - handleSubmit is a simple function that only uses the event object (e) passed by React during form submission.
 * - It accesses e.target.elements.search.value, which depends on the <input> having name="search", not on where handleSubmit is defined.
 * - When defined outside, handleSubmit is a module-scoped function, created once when the file is loaded, and accessible to the Search component's onSubmit prop.
 * - JavaScript's module scope allows Search to reference handleSubmit, just like any variable or function in the same file.
 *
 * Why It Didn't Break:
 * - handleSubmit doesn't rely on Search's state, props, or hooks (e.g., useState), so it works the same inside or outside.
 * - The event object (e) is passed by React’s event system, and e.target.elements.search.value works as long as the <input> has name="search".
 *
 * Inside vs. Outside:
 * - Inside Search: handleSubmit is recreated on every render, which is fine for simple components but could impact performance if passed to memoized children.
 * - Outside Search: handleSubmit is created once, slightly more performant, but can’t access Search’s state or props directly (e.g., for controlled inputs).
 * - Example limitation: If using useState for a controlled input (const [query, setQuery] = useState('')), handleSubmit needs to be inside to access query, or state must be passed explicitly.
 *
 * Lesson:
 * - Function placement (inside vs. outside) doesn’t affect form submission logic if the function only uses the event object.
 * - Ensure <input> has a name attribute for uncontrolled forms when using e.target.elements.
 * - Use outside placement for static, reusable functions; keep inside for functions needing component state or props.
 */

// In react/htl the onsubmit function is attached to the form element not the button element. So when we click on the button it will trigger the onsubmit function.



// imp note:

// 📝 Why we use search and not setSearch in the query

// search → holds the current state value (what you typed).

// setSearch → function to update the state, not the value itself.

// In the fetch call, we need the value of the input, so we use search.

// setSearch is only used inside onChange to update search.

// 👉 Rule of thumb:

// Use setSearch → when updating.

// Use search → when reading.


// When props coming from app.jsx the search,handleSearch, and handleSubmit are passed as props to the Search component.but not setSearch becuase we are not updating the state. and setSearch is just used to update the state of the input value.