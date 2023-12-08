export const Footer = () => {
    return(
    <footer className="pt-2 pb-2 mt-3">
        <div className="container d-md-flex d-lg-flex justify-content-evenly">
          
          <div className="nombre text-center mb-4">
            <h5>Olga 3D Impresiones</h5>
            <h6>Buenos Aires, Argentina</h6>
            <h6>Copyright® 2023</h6>
          </div>
    
          <div className="redes d-flex flex-column align-items-center justify-content-center mb-lg-4">
            <h6 className="">¡Seguinos en Redes!</h6>
            <div className="redes__logos">
              <a href="https://www.instagram.com/olga3dimpresiones/" target="_blank"><img src="../imgs/logoig.jpg" className="redes__logos__logo" alt="logo instagram"/></a>
              <a href="https://www.facebook.com" target="_blank"><img src="../imgs/fblogo.jpg"className="redes__logos__logo" alt="logo facebook"/></a>
              <a href="https://www.tiktok.com" target="_blank"><img src="../imgs/tiktok.png" className="redes__logos__logo" alt="logo tiktok"/></a>
            </div>
          </div>
          
        </div>
    </footer>
    )
}