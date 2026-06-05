import React, { useEffect, useRef } from 'react';

function Nav() {
    const rootRef = useRef(null);
    const navbarRef = useRef(null);
    const smallLogoRef = useRef(null);
    const bigLogoRef = useRef(null);

    useEffect(() => {
        const navbarEl = navbarRef.current;
        let navbarHeight = navbarEl ? navbarEl.offsetHeight : 0;

        const handleScroll = () => {
            const smallLogo = smallLogoRef.current;
            const bigLogo = bigLogoRef.current;
            const smallLogoHeight = smallLogo ? smallLogo.offsetHeight : 0;
            const bigLogoHeight = bigLogo ? bigLogo.offsetHeight : 1;

            const smallSpeed = (smallLogoHeight / bigLogoHeight);
            const ySmall = (window.scrollY * smallSpeed);

            let smallPadding = navbarHeight - ySmall - 34;
            if (smallPadding > navbarHeight) smallPadding = navbarHeight;
            if (smallPadding < 0) smallPadding = 0;

            const container = rootRef.current ? rootRef.current.querySelector('.small-logo-container') : null;
            if (container) container.style.paddingTop = smallPadding + 'px';

            let navOpacity = smallLogoHeight ? (ySmall / smallLogoHeight) : 0;
            navOpacity = Math.max(0, Math.min(1, navOpacity));

            const shadowOpacity = navOpacity * 0.4;
            if (ySmall > 1) {
                if (navbarEl) navbarEl.style.boxShadow = `0 2px 3px rgba(0,0,0,${shadowOpacity})`;
            } else {
                if (navbarEl) navbarEl.style.boxShadow = 'none';
            }
        };

        const handleResize = () => {
            navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
            handleScroll();
        };

        // initial positioning
        handleResize();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div ref={rootRef}>
            <nav ref={navbarRef} className="navbar navbar-fixed-top navbar-default ">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="small-logo-container">
                            <a href="index.html"><img ref={smallLogoRef} className="small-logo img-responsive" alt="AutoPlate.net Logo"
                                src="/images/AutoPlate-NavLogo.png" /></a>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">Products <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="screenPrinted.html">Screen Printed Plates</a></li>
                                    <li><a href="digital.html">Full Color Digital Plates</a></li>
                                    <li><a href="polyCard.html">PolyCard License Plates</a></li>
                                    <li><a href="mcycle.html">Motorcycle Plates</a></li>
                                    <li role="separator" className="divider" aria-hidden="true"></li>
                                    <li><a href="rlFrames.html">Raised Letter Frames</a></li>
                                    <li><a href="cfFrames.html">Chrome Faced Frames</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">Art &amp; Templates <span
                                        className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="art.html">Art Requirements</a></li>
                                    <li><a href="templates.html">Templates</a></li>
                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="false">Download Catalogs <span
                                        className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="catalogs/AutoPlate_2026_License_Plate_and_Frame_Catalog.pdf"
                                        target="_blank" alt="A link to a .pdf file is present."><i
                                            className="glyphicon glyphicon-save"></i>
                                        AutoPlate 2026 Catalog</a></li>
                                    <li><a href="https://get.adobe.com/reader/" target="_blank"><i className="fa fa-file-pdf-o"
                                        aria-hidden="true"></i> Download Adobe Acrobat</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-md-12 orgInfoBar">
                            <p className="orgInfo">asi / <span className="yellowTxt">37572</span> | SAGE: <span
                                className="yellowTxt">63638</span> | UPIC: <span className="yellowTxt">Autop354</span></p>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container-fluid big-logo-row">
                <div className="container">
                    <div className="row logoRow">
                        <div className="col-md-12 big-logo-container">
                            <a href="index.html"><img ref={bigLogoRef} className="big-logo img-responsive" alt="AutoPlate.net Logo"
                                src="/images/AutoPlate-Logo.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;
