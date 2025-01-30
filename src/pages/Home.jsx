import { useEffect } from 'react'
import React, {useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { Search, Moon, Sun, ChevronRight, Star, Facebook, Twitter, Instagram, Github, TrendingUp, Bookmark,
    ChevronLeft, } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const [posts, setPosts] = useState([])
    const navigate= useNavigate()
    // const [isDarkMode, setIsDarkMode] = useState(false);
    

    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts) {
                setPosts(posts.documents)
            }
        })
    },[])

     
    const [currentSlide, setCurrentSlide] = useState(0);
     const slides = [
    {
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      title: 'Essential Writing Tools for 2024',
      category: 'Productivity'
    },
    {
      image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      title: 'The Art of Storytelling',
      category: 'Writing'
    },
    {
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      title: 'Building Your Writing Habit',
      category: 'Lifestyle'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };






    
    if(posts.length === 0){
        return(
            // <div className="w-full py-8 mt-4 text-center">
            //     <Container>
            //         <div className="flex flex-wrap">
            //             <div className="p-2 w-full">
            //                 <h1 className="text-2xl font-bold hover:text-gray-500">
            //                     Login to read posts
            //                 </h1>
            //             </div>
            //         </div>
            //     </Container>
            // </div>

    <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-teal-900/20"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 
            text-transparent bg-clip-text animate-gradient">
            Unleash Your Creativity with Inkspire
          </h1>
          <p className={`text-xl md:text-2xl mb-8 text-white`}>
            The ultimate hub for writers, creators, and thinkers
          </p>
          <div className="flex justify-center mb-12">
            <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 
              to-teal-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 
              transform hover:scale-105 " onClick={()=> navigate('/login')}>
              Get Started
            </button>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className={`relative backdrop-blur-md
              p-2 rounded-full shadow-lg border border-amber-200`}>
              <input type="text" placeholder="Search articles..."
                className={`w-full px-6 py-3 rounded-full outline-none  placeholder-gray-400 text-white`} />
              <button className={`absolute right-4 top-1/2 transform -translate-y-1/2 `}>
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
    </section>


        )
    }

    return(
        // <div className='w-full py-8'>
        //     <Container>
        //         <div className='flex flex-wrap'>
        //             {posts.map((post)=>(
        //                 <div key={post.$id} className='p-2 w-1/4'>
        //                   <PostCard {...post}/>
        //                 </div>
        //             ))}
        //         </div>
        //     </Container>
        // </div>



    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Most Upper part of Home page*/}
          <div className="mb-12 bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden border border-gray-700 hover:border-amber-400/50 transition group">
            <div className="flex">
              <div className="flex-1 p-8">
              <h1 className="text-3xl font-bold text-white mb-4">Welcome , Writer!</h1>
              <p className="text-gray-300 mb-6">Continue your creative journey.</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition hover:cursor-pointer" onClick={()=> navigate('/add-post')}>
                Start Writing
              </button>
            </div>
            <div className="w-1/3">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Writing"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
          </div>
          </div>

          
          {/* Experiment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
              <TrendingUp className="h-6 w-6 text-amber-400" />
            </div>

            {/* Article Cards */}
            {posts.slice(0,2).map((post) => (
              <div key={post.$id} className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl border border-slate-700 hover:border-amber-400/50 transition group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="relative h-48 md:h-full rounded-lg overflow-hidden">
                      <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt="Article"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center space-x-4 mb-3">
                      {/* <span className="text-amber-400 text-sm">{['Technology', 'Productivity', 'Creativity', 'Design'][post-1]}</span> */}
                      <span className="text-slate-400 text-sm">5 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition">
                      {post.title}
                    </h3>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition hover:cursor-pointer" onClick={()=> navigate('/all-posts')}>
                       Read Article
                    </button>
                    {/* <p className="text-slate-300 mb-4 line-clamp-2">
                    {[
                          "Explore the latest trends shaping the future of web development and stay ahead of the curve...",
                          "Mobile app development is a dynamic and constantly evolving field with significant potential. By understanding the key concepts and technologies...",
                          "Discover unique ways to find creative inspiration in your everyday surroundings..."]};
                                <div className="grid grid-cols-3 gap-4 p-5">
                                   {contentArray.map((content, index) => (
                                        <div key={index} className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
                                                   {content}
                                        </div>
                                    ))}
                                </div>

                      
                    </p> */}
                    {/* <Bookmark className="h-5 w-5 text-slate-400 hover:text-amber-400 cursor-pointer transition mb-0" /> */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="space-y-8">
            {/* Popular Topics */}
            <div className="bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl border border-slate-700 hover:border-amber-400/50 transition group">
              <h2 className="text-xl font-bold text-white mb-4">Popular Topics</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Technology', 'Writing', 'Design', 'Business',
                  'Health', 'Travel', 'Food', 'Art', 'Cricket','Spiritual','Bollywood'
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-amber-400/20 hover:text-amber-300 cursor-pointer transition"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
             
            {/* Slider portion */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 overflow-hidden hover:border-amber-400/50 transition group hover: cursor-pointer">
              <div className="relative h-[300px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"></div>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover hover:cursor-pointer"
                      
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <span className="px-2 py-1 bg-amber-400 text-slate-900 rounded-full text-xs font-medium mb-2 inline-block">
                        {slide.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-2">{slide.title}</h3>
                    </div>
                  </div>
                ))}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-1 rounded-full bg-black/30 hover:bg-black/50 text-white transition"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-1 rounded-full bg-black/30 hover:bg-black/50 text-white transition"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 right-4 z-30 flex space-x-2">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-amber-400' : 'bg-white/50'
                      }`}
                    ></div>
                  ))}
                </div>
            </div>
          </div>


        </div>
          
      </div>
    </main>
    )
}

export default Home
