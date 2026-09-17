import React from 'react'
import { createRoot } from 'react-dom/client'
import '../css/style.css'
import '../css/navLogo.css'
import './styles/react-shell.css'
import { AppShell } from './shell/AppShell'

const cards = [
  ['screenPrinted.html', 'Screen Printed License Plates', 'screenPlates.png', 'Available in White and Natural Aluminum or 4 Hi-Gloss Polyethylene thicknesses for spot color applications.'],
  ['digital.html', 'Digitally Printed License Plates', 'digitalPlates.png', 'Available in White and Natural Aluminum or 3 Hi-Gloss Polyethylene thicknesses with our Screened Hi-Gloss Clear Coat.'],
  ['rlFrames.html', 'Raised Letter Frames', 'plasticFrames.png', 'Black, Red, Blue, or Gray polystyrene frames with raised copy.'],
  ['cfFrames.html', 'Chrome Faced Frames', 'chromeFrames.png', 'Premium Bright Chrome frames with durable raised copy.'],
  ['polyCard.html', 'PolyCard License Plates', 'polyPlates.png', 'Durable PolyCard license plates for a range of applications.'],
  ['mcycle.html', 'Motorcycle Plates', 'mcyclePlates.png', 'Compact custom motorcycle license plates.'],
]

function Home() {
  return <main className="container mainContent">
    <div id="carouselContainer"><div className="carousel-inner"><div className="item active"><img className="carouselImg img-responsive" src="/images/APMain.jpg" alt="AutoPlate, the choice for quality and service." /></div></div></div>
    <div className="row"><div className="col-sm-12"><h1 className="text-center newAPBanner">Welcome to <span className="redTxt">AutoPlate</span>.net!</h1><p className="text-center standard-text">We hope to make AutoPlate your source for Custom Printed License Plates and Frames. The AutoPlate product line is sold exclusively through advertising specialty distributors.</p></div></div>
    <div className="row homeBoxRow">{cards.map(([href, title, image, description]) => <div className="col-sm-6 homeBox" key={href}><h2 className="text-center homeBoxHeader">{title}</h2><a href={href}><img className="img-responsive" src={`/images/${image}`} alt="" /><span className="btn btn-primary">{title} <i className="fa fa-chevron-circle-right" aria-hidden="true" /></span></a><p className="standard-text">{description}</p></div>)}</div>
  </main>
}

const root = document.getElementById('root')
if (root) createRoot(root).render(<AppShell><Home /></AppShell>)
