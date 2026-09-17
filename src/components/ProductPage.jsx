import { AppShell } from '../shell/AppShell'
import { PriceTable } from './PriceTable'

function ProductSection({ section, first }) {
  return <div className="container">{!first && <hr className="pageSplitter" />}<div className="info-grid"><div className="info-div"><h2 className="sectionTab">{section.title}</h2><p className="standard-text">{section.description}</p><p><a className="btn btn-primary" href={section.template}><span className="glyphicon glyphicon-save" /> Download this template</a></p></div><div className="pricing-div"><h3 className="pricingInfoHeader">Pricing &amp; Info</h3><ul className="standard-text"><li>Setup charge: $30/color (V)</li><li>Pre-production sample: $35/color (Z)</li><li>PMS color match: $30/color (V)</li><li>7-10 working day production from proof approval. F.O.B. St. Petersburg, FL.</li><li>Art charge: $55(V) which includes an emailed proof.</li></ul><p className="standard-text"><a href="art.html#stockColors">See here</a> for a list of AutoPlate stock colors</p></div><div className="image-div"><img className="img-responsive productImage" src={section.image} alt={section.title} /></div><PriceTable rows={section.rows} /></div></div>
}

export default function ProductPage({ product }) {
  return <AppShell><main className="mainContent"><div className="container"><h1 className="pageHeader">{product.title}</h1></div>{product.sections.map((section, index) => <ProductSection key={section.title} section={section} first={index === 0} />)}</main></AppShell>
}
