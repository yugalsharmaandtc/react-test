export default function Cards({img, title, description}){
return (
<>
<div className="bg-gray-100 p-2">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
        <img 
          className="h-48 w-full object-cover"
          src={img}
          alt="Meal"
        />
        <div className="p-6 flex-grow">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3">
           {description}
          </p>
        </div>
      </div>
    </div>
    </>
)

}