function PriceChart(plates) {
    console.log(plates)
    const items = plates.plateData
    const prices = items.categories.slice(0)

    return (

        <div className="table-div">
            <div className="table-responsive">
                <table className="table table-condensed table-hover">
                    <caption>{items.caption}</caption>
                    <thead>
                        <tr>
                            <th>Item <i className="fa fa-hashtag" aria-hidden="true"></i></th>
                            <th>{items.type === "plate" ? "Material" : "Frame Type"}</th>
                            {items.columnHeaders.map((header, i) => <th key={`${header}${i}`}>{header}</th>)}
                            <th><span className="badge">6R</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {prices.map((price) => (
                            <tr key={price.id}>
                                <td>{price.item}</td>
                                <td>{price.description}</td>
                                <td>{price["125"]}</td>
                                <td>{price["250"]}</td>
                                <td>{price["500"]}</td>
                                <td>{price["1000"]}</td>
                                <td>{price["2000"]}</td>
                                <td>{price["5000"]}</td>
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