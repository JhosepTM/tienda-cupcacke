import Banner from "../sections/Banner";
import Servicios from "../sections/Servicios";
import Cupcakes from "./Cupcakes";

const Home = () => (
    <>
        <Banner />
        <div className="ed-grid">
            <h2>Lo mas vendido</h2>
            <Cupcakes peticion="cupcakes?sabor_like=chocolate"/>
        </div>
        <div className="ed-grid">
            <h2 className="center">Servicios ofrecidos por CupCore</h2>
            <Servicios peticion="servicios"/>
        </div>
        
    </>

)

export default Home;