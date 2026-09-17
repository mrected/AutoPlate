import { useEffect, useRef, useState } from 'react'

const productLinks = [
  ['screenPrinted.html', 'Screen Printed Plates'],
  ['digital.html', 'Full Color Digital Plates'],
  ['polyCard.html', 'PolyCard License Plates'],
  ['mcycle.html', 'Motorcycle Plates'],
  ['rlFrames.html', 'Raised Letter Frames'],
  ['cfFrames.html', 'Chrome Faced Frames'],
]

function Menu({ label, children }) {
  const [open, setOpen] = useState(false)
  const closeIfFocusLeaves = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
  }
  return <li className={`dropdown${open ? ' open' : ''}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={closeIfFocusLeaves}>
    <button className="dropdown-toggle nav-button" type="button" aria-expanded={open}>
      {label} <span className="caret" />
    </button>
    {open && <ul className="dropdown-menu">{children}</ul>}
  </li>
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navbarRef = useRef(null)
  const smallLogoRef = useRef(null)
  const bigLogoRef = useRef(null)
  const smallLogoContainerRef = useRef(null)
  useEffect(() => {
    const updateLogo = () => {
      const navbar = navbarRef.current
      const smallLogo = smallLogoRef.current
      const bigLogo = bigLogoRef.current
      const container = smallLogoContainerRef.current
      if (!navbar || !smallLogo || !bigLogo || !container) return
      const navbarHeight = navbar.offsetHeight
      const smallHeight = smallLogo.offsetHeight
      const bigHeight = bigLogo.offsetHeight || 1
      const ySmall = window.scrollY * (smallHeight / bigHeight)
      const padding = Math.max(0, Math.min(navbarHeight, navbarHeight - ySmall - 34))
      container.style.paddingTop = `${padding}px`
      const opacity = Math.max(0, Math.min(1, ySmall / (smallHeight || 1)))
      navbar.style.boxShadow = ySmall > 1 ? `0 2px 3px rgba(0,0,0,${opacity * 0.4})` : 'none'
    }
    updateLogo()
    window.addEventListener('scroll', updateLogo)
    window.addEventListener('resize', updateLogo)
    return () => {
      window.removeEventListener('scroll', updateLogo)
      window.removeEventListener('resize', updateLogo)
    }
  }, [])
  return <>
    <nav ref={navbarRef} className="navbar navbar-fixed-top navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button className="navbar-toggle" type="button" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" />
          </button>
          <div ref={smallLogoContainerRef} className="small-logo-container"><a href="index.html"><img ref={smallLogoRef} className="small-logo img-responsive" src="/images/AutoPlate-NavLogo.png" alt="AutoPlate.net Logo" /></a></div>
        </div>
        <div className={`navbar-collapse${mobileOpen ? ' in' : ''}`}>
          <ul className="nav navbar-nav navbar-right">
            <Menu label="Products">{productLinks.map(([href, label], index) => <li key={href}>{index === 4 && <hr className="divider" /> }<a href={href}>{label}</a></li>)}</Menu>
            <Menu label="Art & Templates"><li><a href="art.html">Art Requirements</a></li><li><a href="templates.html">Templates</a></li></Menu>
            <Menu label="Download Catalogs"><li><a href="/catalogs/AutoPlate_2026_License_Plate_and_Frame_Catalog.pdf" target="_blank" rel="noreferrer">Download AutoPlate 2026 Catalog</a></li><li><a href="https://get.adobe.com/reader/" target="_blank" rel="noreferrer">Download Adobe Acrobat</a></li></Menu>
          </ul>
        </div>
        <div className="row"><div className="col-md-12 orgInfoBar"><p className="orgInfo">asi / <span className="yellowTxt">37572</span> | SAGE: <span className="yellowTxt">63638</span> | UPIC: <span className="yellowTxt">Autop354</span></p></div></div>
      </div>
    </nav>
    <div className="container-fluid big-logo-row"><div className="container"><div className="row logoRow"><div className="col-md-12 big-logo-container"><a href="index.html"><img ref={bigLogoRef} className="big-logo img-responsive" src="/images/AutoPlate-Logo.png" alt="AutoPlate.net Logo" /></a></div></div></div></div>
  </>
}

function Footer() {
  return <div className="container-fluid footerDiv"><p>&copy; Autoplate 2000-{new Date().getFullYear()} All Rights Reserved | <a href="privacyPolicy.html">Privacy Policy</a></p></div>
}

export function AppShell({ children }) {
  return <div id="outerDiv"><Header />{children}<Footer /></div>
}
