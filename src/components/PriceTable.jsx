export function PriceTable({ rows, badge = '6R' }) {
  const quantities = ['125', '250', '500', '1000', '2000', '5000']
  return <div className="table-div"><div className="table-responsive"><table className="table table-condensed table-hover"><caption>Price chart for screen-printed plates.</caption><thead><tr><th>Item <i className="fa fa-hashtag" aria-hidden="true" /></th><th>Material</th>{quantities.map((quantity) => <th key={quantity}>{quantity}</th>)}<th><span className="badge">{badge}</span></th></tr></thead><tbody>{rows.map(([item, description, prices]) => <tr key={`${item}-${description}`}><td>{item}</td><td>{description}</td>{prices.map((price, index) => <td key={`${description}-${index}`}>{price.toFixed(2)}</td>)}<td>&nbsp;</td></tr>)}</tbody></table></div></div>
}
