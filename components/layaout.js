import Footer from "./footer"
import Images from "./images"
import SobreMi from "./sobremi"
const Layout = ({children}) =>(
    <>

    {children}
    <SobreMi/>
    <Images/>
    <Footer/>

    </>
)



export default Layout