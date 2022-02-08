const Banner = () => (
        <div className="main-banner img-container dark-color">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img 
                        src="https://cronicaglobal.elespanol.com/uploads/s1/33/63/02/6/cupcakes.jpeg" 
                        alt="baner cupcake" 
                        className="main-banner__img"
                    ></img>
                    <div className="main-banner__data s-center">
                        <p className="s-mb-0 t2">Bienvenido a la CupStore</p>
                        <p>Un sitio con diversos colores y sabores !!!</p>
                        <a className="button" href="/">Ver cupcakes</a>
                    </div>
                </div>
            </div>
        </div>
)

export default Banner;