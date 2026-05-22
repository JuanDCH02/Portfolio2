

//import ReactLogo from '../../assets/react.svg'
//import GithubLogo from '../../assets/github-svgrepo-com.svg'

export const Navigation = () => {

return (
  <div className="p-5 mt-5 animate__animated animate__fadeInDown fixed top-0 left-0 right-0 z-10">
    <nav className="flex justify-center items-center w-full  " >

        
        <ul className="flex gap-1 text-white font-bold ">
            <li className='text-sm border border-white/20 p-2 rounded-2xl backdrop-blur-md bg-white/25
                hover:bg-slate-300 hover:text-amber-600 hover:cursor-pointer drop-shadow hover:drop-shadow-slate-200/50 transition-colors duration-300'
                >about me
            </li>
            <li className='text-sm border border-white/20 p-2 rounded-2xl backdrop-blur-md bg-white/25
                hover:bg-slate-300 hover:text-amber-600 hover:cursor-pointer drop-shadow hover:drop-shadow-slate-200/50 transition-colors duration-300'
                >projects
            </li>
            <li className='text-sm border border-white/20 p-2 rounded-2xl backdrop-blur-md bg-white/25
                hover:bg-slate-300 hover:text-amber-600 hover:cursor-pointer drop-shadow hover:drop-shadow-slate-200/50 transition-colors duration-300'
                >technologies
            </li>
            <li className='text-sm border border-white/20 p-2 rounded-2xl backdrop-blur-md bg-white/25
                hover:bg-slate-300 hover:text-amber-600 hover:cursor-pointer drop-shadow hover:drop-shadow-slate-200/50 transition-colors duration-300'
                >certificates
            </li>
        </ul>
        

        {/* <div className='flex gap-4 align-baseline'> */}
            {/* <img src={ReactLogo} alt="react" className="h-8" /> */}
            {/* <img src={GithubLogo} alt="github" className="h-8" /> */}
        {/* </div> */}
    </nav>
  </div>
)
}
