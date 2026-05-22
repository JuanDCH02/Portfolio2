
import img1 from '../../../public/app-rectas-1.png'
import img2 from '../../../public/app-recetas-2.png'
import img3 from '../../../public/app-recetas-3.png'

export const ProjectsSection = () => {
    return (
        <div className='container mx-auto py-20 px-5'>
            <h3 className='text-3xl font-bold text-white text-center mb-10'>Mis Proyectos</h3>
            <div className='max-w-5/6 mx-auto'>
                <div className='flex gap-5 mx-auto justify-center'>
                    <img src={img1} className='w-120 rounded-2xl shadow-lg/10' alt="Receta" />
                    <img src={img2} className='w-90 rounded-2xl shadow-lg/10' alt="Receta" />
                    <img src={img3} className='w-120 rounded-2xl shadow-lg/10' alt="Receta" />
                
                </div>
                <p className=' text-center text-white text-lg mt-5'>
                    Stack: MERN (MongoDB, Express, React, Node)
                    Aplicacion de recetas en la que se pueden crear, editar, eliminar y buscar recetas. 
                    Las recetas estan visibles para todo el público, pero solo el creador de la receta puede editarla o eliminarla.
                    Tiene sistema de Likes y comentarios, y un sistema de autenticacion con JWT.
                </p>
            </div>
            
            <div className='max-w-5/6 mx-auto'>
                <div className='flex gap-5 mx-auto justify-center'>
                    <img src={img1} className='w-120 rounded-2xl shadow-lg/10' alt="Receta" />
                    <img src={img2} className='w-90 rounded-2xl shadow-lg/10' alt="Receta" />
                    <img src={img3} className='w-120 rounded-2xl shadow-lg/10' alt="Receta" />
                
                </div>
                <p className=' text-center text-white text-lg mt-5'>
                    Stack: MERN (MongoDB, Express, React, Node)
                    Aplicacion de recetas en la que se pueden crear, editar, eliminar y buscar recetas. 
                    Las recetas estan visibles para todo el público, pero solo el creador de la receta puede editarla o eliminarla.
                    Tiene sistema de Likes y comentarios, y un sistema de autenticacion con JWT.
                </p>
            </div>
            <div className='max-w-5/6 mx-auto'>
                <div className='flex gap-5 mx-auto justify-center'>
                    <img src={img1} className='w-120 rounded-2xl shadow-lg/10' alt="Receta" />
                    <img src={img2} className='w-90 rounded-2xl shadow-lg/10' alt="Receta" />
                    <img src={img3} className='w-120 rounded-2xl shadow-lg/10' alt="Receta" />
                
                </div>
                <p className=' text-center text-white text-lg mt-5'>
                    Stack: MERN (MongoDB, Express, React, Node)
                    Aplicacion de recetas en la que se pueden crear, editar, eliminar y buscar recetas. 
                    Las recetas estan visibles para todo el público, pero solo el creador de la receta puede editarla o eliminarla.
                    Tiene sistema de Likes y comentarios, y un sistema de autenticacion con JWT.
                </p>
            </div>
        
        </div>
    )
}
