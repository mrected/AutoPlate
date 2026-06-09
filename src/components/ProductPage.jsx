import { createRoot } from 'react-dom/client';
import './productPage/PriceChart';
import PriceChart from './productPage/PriceChart';
import plateData from '../data/plateData.json';

function ProductPage() {

    return (

        <div className="mainContent">
            <div className="container">

                <h1 className="pageHeader">Screen Printed <span className="small">License Plates</span></h1>

                <div className="info-grid">

                    <div className="info-div">
                        <h2 className="sectionTab">Hi-Gloss Polyethylene</h2>
                        <p className="standard-text"><strong>AutoPlate’s unique Hi-Gloss Polyethylene License Plates</strong> are available in 4 thicknesses with Screen
                            Printed spot color imprint. Plate size is 6" x 12”. <strong>Our exclusive .075” Premium Weight</strong> and .055”
                            Standard Weight <strong>Hi-Gloss</strong> Poly license plates are for permanent use where a front state license plate
                            is not required. <strong>Hi-Gloss</strong> .035” and .023” weights are primarily for temporary auto dealer use. .035”
                            is suitable for reuse when a vehicle is sold. .023” is recommended for use in a frame for support.
                            .035” is also suitable for promotional distribution for temporary use.
                            Full bleed printing available at no extra charge.</p>
                        <p><a href="templates.html#polyplate" className="btn btn-primary " role="button"><span
                            className="glyphicon glyphicon-save"></span> Download this template</a></p>
                    </div>

                    <div className="pricing-div">
                        <h3 className="pricingInfoHeader">Pricing &amp; Info</h3>
                        <ul className="standard-text">
                            <li>Setup charge: $30/Color (V)</li>
                            <li>Pre-production Sample: $35/Color (Z)</li>
                            <li>PMS color match: $30/color (V)</li>
                            <li>#023 is limited to 3 imprint colors</li>
                            <li>5-7 working day production from proof approval. F.O.B. St. Petersburg, FL.</li>
                            <li>Art charge: $55(V) which includes an emailed proof. <span className="note">(No charge if <a href="#" data-toggle="modal"
                                data-target="#vectorArt">acceptable vector art</a> is supplied.)</span></li>
                        </ul>
                        <p className="standard-text"><span className="redTxt">*</span> NO SET-UP CHARGE TO DUPLICATE AN EXISTING SAMPLE WITH VECTORED ART AND A SAMPLE PHOTO PROVIDED. <strong>(500 &amp; up)</strong></p>
                        <p className="standard-text"><a href="art.html#stockColors">See here</a> for a list of AutoPlate stock colors</p>
                    </div>
                    <div id="vectorArt" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title"><i className="fa fa-comment-o" aria-hidden="true"></i> <strong>Spot
                                        color printing requirements</strong></h4>
                                </div>
                                <div className="modal-body">
                                    <p>Art must be in a vector format. Vector format means your art was created in a vector
                                        program and saved in a file that saves the vector information, such as .ai, .pdf or
                                        .eps for example. Raster images, such jpeg, png, tiff, psd, etc, can be used but
                                        must be at least 200dpi, sent to the correct size, and can only be substituted for
                                        black images. </p>
                                    <p>Art that does not meet these requirements may incur an art charge.</p>
                                    <p>Placing a raster image in a vector file does not automatically convert the image to
                                        vector format. </p>
                                    <p>For more information on this <a href="art.html">see our digital art
                                        specifications</a>.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-div">
                        <img src="images/Prod_SPPlates.png" className="productImage"
                            alt="Screen Printed Poly License Plates" />
                    </div>
                    <PriceChart plateData={plateData.screenPrinted}/>                  
                </div>
            </div>








            <div className="container">
                <hr className='pageSplitter' />
                    <div className="info-grid">

                        <div className="info-div">
                            <h2 className="sectionTab">Hi-Gloss Aluminum</h2>
                            <p className="standard-text"><strong>.024” Non-embossed White or Natural Aluminum</strong> with Screen Printed spot color imprint. Plate size is 6” x 12”. .024” Aluminum License Plates are for permanent use where a front state license plate is not required and a metal plate is preferred.</p>
                            <p className="standard-text"><a href="templates.html#aluplate" className="btn btn-primary" role="button"><span
                                className="glyphicon glyphicon-save"></span> Download this template</a></p>
                        </div>

                        <div className="pricing-div">
                            <h3 className="pricingInfoHeader">Pricing &amp; Info</h3>
                            <ul className="standard-text">
                                <li>Setup charge: $30/color (V)</li>
                                <li>Pre-production sample: $35/color (Z)</li>
                                <li>PMS color match: $30/color (V)</li>
                                <li>5-7 working day production from proof approval. F.O.B. St. Petersburg, FL.</li>
                                <li>Art charge: $55(V) which includes an emailed proof. <span className="note">(No charge if <a href="#" data-toggle="modal"
                                    data-target="#vectorArt">acceptable vector art</a> is supplied.)</span></li>
                            </ul>
                            <p className="standard-text"><span className="redTxt">*</span> NO SET-UP CHARGE TO DUPLICATE AN EXISTING SAMPLE WITH VECTORED ART AND A SAMPLE PHOTO PROVIDED. <strong>(500 &amp; up)</strong></p>
                            <p className="standard-text"><a href="art.html#stockColors">See here</a> for a list of AutoPlate stock colors</p>

                        </div>

                        <div className="image-div">
                            <img src="images/Prod_SPAluPlates.png" className="img-responsive productImage"
                                alt="Screen Printed Aluminum License Plates" />
                        </div>

                        <PriceChart plateData={plateData.spAluminum}/> 
                            <div className="aluPlates">
                                <img src="images/aluWhite.png" alt="white aluminum license plate" />
                                <img src="images/aluNatural.png" alt="natural aluminum license plate" />
                            </div>

                        </div>
                    </div>
            </div>
        

    )
}

createRoot(document.getElementById('root')).render(
    <ProductPage />
)