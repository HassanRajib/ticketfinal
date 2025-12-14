"use client"

const MainCard = () => {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] py-10 px-5 text-black dark:text-white">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Avoid Rafa</h2>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="w-full px-5">
        <div className="rounded-2xl overflow-hidden border-b-4 border-red-600">
          <img
            src="../image/tha1.png" // Adjust path if needed
            alt="Nijer Moto"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default MainCard