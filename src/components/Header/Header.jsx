import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()

  const navItems=[
    {
      name:'Home',
      slug:"/",
      active:true
    },
    {
      name:'Login',
      slug:"/login",
      active:!authStatus,
    },
    {
      name:'Signup',
      slug:"/signup",
      active:!authStatus,
    },
    {
      name:'All Posts',
      slug:"/all-posts",
      active: authStatus,
    },
    {
      name:'Add Post',
      slug: "/add-post",
      active: authStatus,
    },

  ]


  // return (
  //   <header className='py-3 shadow bg-gray-800  sticky z-50 top-0 '>
  //     <Container>
  //       <nav className='flex'>
  //         <div className='mr-4'>
  //           <Link to='/'>
  //              <Logo/>
  //           </Link>
  //         </div>
  //         <ul className='flex ml-auto'>
  //           {navItems.map((item)=>
  //           item.active? (
  //             <li key={item.name}>
  //               <button 
  //               onClick={()=> navigate(item.slug)}
  //               className='inline-block px-6 py-2 text-white
  //               duration-200 hover:bg-blue-400 rounded-full hover:cursor-pointer'
  //               >{item.name}</button>
  //             </li>
  //           ) : null
  //           )}
  //           {authStatus && (
  //             <li>
  //               <LogoutBtn/>
  //             </li>
  //           )}
  //         </ul>
  //       </nav>
  //     </Container>
  //   </header>
  // )


  
    return (
      <header className='py-3 shadow bg-gray-900 sticky z-50 top-0'>
        <Container>
          <nav className='flex items-center'>
            {/* Logo */}
            {/* <div className='mr-4'>
              <Link to='/'>
                <Logo/>
              </Link>
            </div> */}

            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-transparent bg-clip-text">
              <Link to='/'>
                Inkspire
              </Link>
            </div>
  
            {/* Search Bar */}
            <div className="flex-grow flex justify-center">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full max-w-md px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
  
            {/* Navigation */}
            <ul className='flex ml-auto'>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-block px-6 py-2 text-white duration-200 hover:bg-blue-400 rounded-full hover:cursor-pointer'
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </nav>
        </Container>
      </header>
    );
  }
  
  


export default Header




