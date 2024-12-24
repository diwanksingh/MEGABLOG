import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 absolute text-white text-center py-20  w-full opacity-50 left-0">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm mb-2">Developed by <span className="font-semibold">Diwank Singh</span> | All Rights Reserved</p>
        <p className="text-sm">Thank you!</p>
        <div className="mt-4">
          <hr/><br/>
          <a href="#top" className="text-gray-400 hover:text-white transition-colors duration-300">Back to top</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
