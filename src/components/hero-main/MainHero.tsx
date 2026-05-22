
export const MainHero = () => {
  return (
    <div className=" m-auto w-[90%] flex flex-col items-center justify-center h-screen gap-5 animate__animated animate__fadeIn">

        <div className="flex gap-5 min-h-screen py-20">
            <img className="rounded-4xl border-4 border-amber-300 " src="/public/foto-main.png" alt="png-me" />
            {/* <img className="absolute w-[500px] h-[500px] bg-slate-400/10 blur-[120px] rounded-full" src="/public/foto-main.png" alt="png-me" /> */}

            <div className="mt-30 space-y-3 text-white">
                <h2 className="text-6xl font-black text-shadow-lg/20 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">Juan Clemente</h2>
                <h4 className="text-xl text-amber-300 italic font-serif">FullStack-Dev</h4>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolore totam. Ipsam, nisi? Saepe, fuga sint ducimus mollitia pariatur 
                    quidem aspernatur explicabo praesentium debitis id et ut dolorum quia odit?
                </p>
            </div>
        </div>
        
    </div>
  )
}
