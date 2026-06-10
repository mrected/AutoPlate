function PriceChart({ plateData, type }) {

    const typeData = plateData && plateData[type];
    const priceData = typeData && typeData.priceData;
    const prices = priceData ? priceData.prices : [];
    const counts = typeData ? typeData.counts : [];
    return (


        <div className="table-div">
            <div className="table-responsive">
                <table className="table table-condensed table-hover">
                    <caption>{priceData ? priceData.caption : ''}</caption>
                    <thead>
                        <tr>
                            <th>Item <i className="fa fa-hashtag" aria-hidden="true"></i></th>
                            <th>{plateData.form === "plate" ? "Material" : "Frame Type"}</th>
                            {counts.map((count, i) => <th key={`${count}${i}`}>{count}</th>)}
                            <th><span className="badge">{plateData.badge}</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {prices.map((price, i) => (
                            <tr key={`${price}${i}`}>
                                <td>{price.item}</td>
                                <td>{price.description}</td>
                                {counts.map((count, i) => (
                                    <td key={`${count}${i}`}>
                                        {price[count] != null ? Number(price[count]).toFixed(2) : ''}
                                    </td>
                                ))}
                                <td>&nbsp;</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

    )
};

export default PriceChart;