import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/cards'
import MainLayout from './layouts/MainLayout'
import Search from './components/Search'
  

function App() {
    const [search, setSearch] = useState('')
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchRandomMeals = async () => {
        setLoading(true)
        try {
            // Create array of 5 promises for random meals
            const promises = Array(10).fill().map(() =>
                fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                    .then(res => res.json())
            )
            
            // Wait for all promises to resolve and promises.all creates an array contailing the results of all promises (fetches)
            const results = await Promise.all(promises)
            console.log(results)
            
            // Extract meals from each response and combine
            //The .map() Processing:Takes each response object Accesses .meals[0] to get meal object Creates new array of just meal objects
            const randomMeals = results.map(result => result.meals[0])
            setMeals(randomMeals)
        } catch (err) {
            console.error('Error fetching random meals:', err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRandomMeals()
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res) => res.json())
            .then((data) => {
                setMeals(data.meals || [])
            })
            .catch((err) => {
                console.error('Search error:', err)
            })
            .finally(() => {
                setLoading(false)
            })
    }
  return (
    <MainLayout>
    <Search search={search} handleSearch={handleSearch} handleSubmit={handleSubmit} />

    {loading && (
      <div className="flex justify-center my-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )}
    
    {!loading && meals.length === 0 && <p className='text-center text-gray-600'>No meals found</p>}
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {meals.map((meal)=>(
        <Cards key={meal.idMeal} img={meal.strMealThumb} title={meal.strMeal} description={meal.strInstructions?.slice(0,100)} />))
      }
    </div>

  </MainLayout>
  )
}

export default App
