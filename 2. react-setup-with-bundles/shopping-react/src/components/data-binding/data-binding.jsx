export function DataBinding() {
    var Stock = true;

    return(
        <div className="container-fluid">
            <h2>Data Types</h2>
            Stock : {(Stock == true) ? "Available" : "Out of Stock"}
        </div>
    )
}