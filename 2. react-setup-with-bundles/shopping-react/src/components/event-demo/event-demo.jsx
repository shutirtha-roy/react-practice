export function EventDemo() {

    function ContainerClick() {
        alert("Container Clicked");
    }

    function ButtonClick(e) {
        alert("Button Click");
        //e.stopPropagation();
    }

    return(
        <div className="container-fluid m-2" onClick={ContainerClick}>
            <button id="btnInsert" onClick={ButtonClick} className="btn btn-success mt-4">Insert</button>
        </div>
    )
}