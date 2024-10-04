import Index from "../pages"

const imagen=["1.jpg", , "black-week-2.jpg",  "cerveza1.jpg", "cerveza-2.jpg" ,"cerveza-3.jpg", "cerveza-4.jpg", "dore-halloween.jpg", "propuesta-2.jpg", "propuesta-4.jpg","propuesta-3.jpg", "propuesta-5.jpg", "propuesta-6.jpg", "propuesta-7.jpg", "propuesta-post1.jpg","propuesta-post2.jpg", "propuesta-post3.jpg","dore-cancer.jpg","tres-relojes.jpg"
]
const imagen2=["cafe.jpg","001.jpg","donuts.jpg"]
const imagen3=["gmg-eventos", "tbr.png","caypops.png"]

const imagenes_prestar=imagen.map((e,Index)=>
(
     <img src={imagen[Index]}/>
))
const imagenes_prestar2=imagen2.map((e,Index)=>
    (
        <img src={imagen2[Index]}/>
    ))

const imagenes_prestar3=imagen3.map((e,Index)=>
        (
            <img src={imagen3[Index]}/>
        ))
    

const Images=()=>
    (
        <>
        <h2 className="text-center text-3xl">Redes Sociales</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 md:mx-5 sm:ml-0">
            
            {imagenes_prestar}
        </div>

        <h2 className="text-center text-3xl">moockup</h2>
        <div className="grid md:grid-cols-3 gap-3 mx-5">
            
            {imagenes_prestar2}
 
        </div>

        </>




    )


export default Images