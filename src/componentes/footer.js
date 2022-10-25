export default function Footer() {
    return (
        <div className="footerD">
            <div className="row row-cols-auto align-items-center justify-content-around">
                <div className="col">
                    <img src="img/logo_byn.png"/>
                </div>
                <div className="col">
                    <img src="img/location.png"/>
                    <h6 style="display: inline; color: #ffffff;">Beiro 3300 - Villa del Parque</h6>
                    <br/>
                    <br/>
                    <img src="img/mail.png"/>
                    <h6 style="display: inline; color: #ffffff;">contacto@sanitarioscampana.com.ar</h6>
                </div>
                <div className="col d-flex align-items-center" >
                    <div className="pr-5"><img src="img/tel.png"/></div> 
                    <div>
                        <h5 style="display: inline; color: #24a4fc; padding-left: 7px;">4503-6015</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}