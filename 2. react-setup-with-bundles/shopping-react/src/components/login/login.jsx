import "./login.css";

export function Login() {
    return(
        <div>
            <header>
                <button data-bs-target="#navbar" data-bs-toggle="offcanvas" className="btn btn-dark bi bi-justify"></button>
                <div className="offcanvas offcanvas-start" id="navbar" tabIndex="-1">
                    <div className="offcanvas-header">
                        <h3>Navbar</h3>
                        <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                        ...your menu...
                    </div>
                </div>
            </header>
            <div className="form-container">
                <form className="alert alert-warning alert-dismissible">
                    <h3 class="bi bi-person-fill">User Login</h3>
                    <button className="btn btn-close" data-bs-dismiss=""></button>
                    <dl>
                        <dt>User Id</dt>
                        <dd><input type="text" className="form-control" /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control" /></dd>
                    </dl>
                    <button className="btn btn-warning w-100">Login</button>
                </form>
            </div>
        </div>
    )
}