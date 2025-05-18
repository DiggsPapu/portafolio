import React from 'react'

function ProjectCategories({ filter, setFilter }) {
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'data', name: 'Data Projects' },
    { id: 'ai', name: 'AI/ML' },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          type="button"
          key={category.id}
          onClick={() => setFilter(category.id)}
          className={`px-4 py-2 rounded-full capitalize transition ${
            filter === category.id
              ? 'bg-yellow-400 text-black font-bold'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default ProjectCategories
