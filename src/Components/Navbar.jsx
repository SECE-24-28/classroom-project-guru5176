
const Navbar = ({user}) => {
  return (

    // states is an object that holds information about the condition in the app at present.
    <nav>
      <ul className="flex justify-around items-center bg-blue-500">
              <div className="text-2xl text-white font-extrabold">
                {user}
            </div>
              <div className="flex justify-center items-center gap-5
        bg-blue-500 text-white font-extrabold text-2xl select-none">
                <li className="hover:bg-blue-700 p-5 transition">Home</li>
                <li className="hover:bg-blue-700 p-5 transition">About</li>
                <li className="hover:bg-blue-700 p-5 transition">Contact Us</li>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar