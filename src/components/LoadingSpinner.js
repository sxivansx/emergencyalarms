function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading data...</p>
        <p className="text-sm text-gray-500">Connecting to Firebase</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
