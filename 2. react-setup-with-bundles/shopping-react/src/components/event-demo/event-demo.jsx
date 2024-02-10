export function EventDemo() {

    function SubmitClicked(e) {
        alert('Later we will post data to API');
        e.preventDefault();
    }

    return(
        <div className="container-fluid m-2 p-4">
            <form class="w-50" onSubmit={SubmitClicked}>
                User Name : <input type="text" name="Username" /><button type="submit">Submit</button>
            </form>
        </div>
    )
}