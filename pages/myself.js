import Layout from "../components/layaout";

const Myself=()=>(
    <Layout>

        <div className="justify-items-center items-center flex flex-col">


        <div className="rounded-full bg-gray-800 items-cemter justify-items-center my-10">

    <div className=" flex flex-col items-center  m-auto w-full bg-gray-800 items-center content-center items-center"></div>
    <img className="rounded-full p-1" src="foto-de-perfil.jpg"></img>

    </div>   
    <br></br>


            <div className="items-center  content-center border-2 border-transparent rounded-lg flex items-stretch flex-wrap justify-between items-center  content-center lg:mx-20 max-w-screen-xl px-8 md:px-6 py-10">
 
            <p className="lg:font-sans text-2xl text-justify font-medium sm:text-center font-sans text-4xl font-medium ">Mi nombre es <span className="italic">Abraham Silva</span>, 
            siempre me he sentido apasionado por el diseño y la programación, pero no fue 
            sino hasta el inicio de la pandemia que me decidí a dedicarme a mi pasión. 
            En la actualidad trabajo de forma Frelance tanto en la creación de publicidad 
            para redes sociales como la programación de sitios web enfocándome especialmente 
            en el uso de react. Siempre estoy buscando aprender más y crecer en este 
            maravilloso mundo creativo para volver la visión de mis clientes en una realidad. </p>
              
            </div>
        </div>
       
    </Layout>

)

export default Myself