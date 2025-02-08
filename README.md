         {/* Modal */}
          {isOpen && (
            <div className='fixed modo h-full w-full top-0 right-0 bg-opacity-80 bg-black flex flex-col p-5 text-white' >

              <div className='flex justify-between items-center absolute right-[1rem]' >
                <IoClose className='cursor-pointer' onClick={() => setIsOpen(false)} />
              </div>
              <ul className='mt-10 flex flex-col items-center justify-center gap-3 text-lg ' >
                <a href="#"><li>Features</li></a>
                <a href="#"><li>Pricing</li></a>
                <a href="#"><li>Workflow</li></a>
                <a href="#"><li>Testimonals</li></a>
              </ul>
              <div className="mt-10 flex justify-center gap-3  items-center">
                <a className='bg-transparent border py-2 px-3 rounded-md'>Sign In</a>
                <a className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-2 rounded-md'>Create an account</a>

              </div>
            </div>
          )}