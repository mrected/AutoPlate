import { AppShell } from '../shell/AppShell'

const templates = [
  ['polyplate', 'Polyethylene License Plate Template', 'PolyTempImg.png', '23-75PolyTemplate.pdf'],
  ['aluplate', 'Aluminum License Plate Template', 'AluTempImg.png', '24AluTemplate.pdf'],
  ['pcardplate', 'PolyCard License Plate Template', 'PCardTempImg.png', '24PolyCardTemplate.pdf'],
  ['mcycleplate', 'Motorcycle Plate Template', 'McycleTempImg.png', 'MCycleTemplate.pdf'],
  ['231fr', '231 Frame Template', '231fr.png', '231Frame.pdf'],
  ['233fr', '233 Frame Template', '233fr.png', '233Frame.pdf'],
  ['235fr', '235 Frame Template', '235fr.png', '235Frame.pdf'],
  ['245fr', '245 Frame Template', '245fr.png', '245Frame.pdf'],
  ['248fr', '248 Frame Template', '248fr.png', '248Frame.pdf'],
  ['241fr', '241 Frame Template', '241fr.png', '241Frame.pdf'],
  ['251fr', '251 Frame Template', '251fr.png', '251Frame.pdf'],
]

export function ArtPage() {
  const colors = ['Lemon Yellow', 'Ultra Blue', 'Fire Red', 'Emerald Green', 'Peacock Blue', 'Metallic Gold', 'Metallic Silver', 'White', 'Black', 'Gray', 'Orange', 'Purple', 'Brown', 'Teal', 'Pink']
  return <AppShell><main className="container mainContent"><h1 className="pageHeader">Art Specifications</h1><h2>Spot Color Printing Requirements</h2><p className="standard-text">Art must be in a vector format such as .ai, .pdf, or .eps. Raster images can be used at 200dpi or higher and can only be substituted for black images.</p><ul className="standard-text"><li>Limit art to the number of requested colors.</li><li>Convert all fonts to outlines or shapes.</li><li>Use an AutoPlate template for correct alignment.</li><li>Keep gradients between 20% and 80%.</li></ul><h2>Digital Printing Requirements</h2><p className="standard-text">Digital art must be full size and at least 150dpi; 300dpi is preferred. A quarter-inch bleed is recommended for edge-to-edge art. RGB and CMYK formats are accepted.</p><h2>Acceptable Media Types and Transfer Methods</h2><p className="standard-text">We accept art by file transfer, email, or physical media. We use current Adobe software and can work with any version.</p><section id="stockColors"><h1 className="pageHeader">Stock Colors</h1><p className="standard-text">These 15 stock colors are available for screen printing. Pantone matching is available at an additional charge of $30(V) per color.</p><div className="row">{colors.map((color) => <div className="col-sm-3" key={color}><div className="colorSwatch" style={{ backgroundColor: color.toLowerCase().replace(' ', '') }} />{color}</div>)}</div></section></main></AppShell>
}

export function TemplatesPage() {
  return <AppShell><main className="container mainContent"><h1 className="pageHeader">Layout Templates</h1><h2>Vectored layout templates for all AutoPlate products can be downloaded here.</h2><p className="standard-text">They are to size in the preferred editable PDF format. Please see <a href="art.html">art options</a> before sending files.</p>{templates.map(([id, label, image, pdf], index) => <section className="templateBox" id={id} key={id}><h2 className="sectionTab">{label}</h2><img className="img-responsive" src={`/images/${image}`} alt={label} /><p><a className="btn btn-primary" href={`/templates/${pdf}`} target="_blank" rel="noreferrer"><i className="fa fa-file-pdf-o" aria-hidden="true" /> Download PDF</a></p></section>)}</main></AppShell>
}

export function PrivacyPage() {
  return <AppShell><main className="container mainContent"><h1 className="pageHeader">AutoPlate Privacy Policy</h1><div className="col-sm-8"><p>The information provided in this Privacy Policy covers your interactions on the AutoPlate website. AutoPlate will never willfully disclose individually identifiable information about its visitors to any third party.</p><p>AutoPlate will never know who you are.</p><p>AutoPlate does not collect cookie information.</p></div></main></AppShell>
}
