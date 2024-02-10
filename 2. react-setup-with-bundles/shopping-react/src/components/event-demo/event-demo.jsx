export function EventDemo() {

    function InsertClick(...args) {
        var [msg, id, event] = args;
        document.write(`${msg} <br> ${id} <br> ${event}`);
    }

    return(
        <div className="container-fluid">
            <button id="btnInsert" onClick={(e) => InsertClick('Welcome', 10, e)} className="btn btn-success mt-4">Insert</button>
        </div>
    )
}