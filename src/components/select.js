import 'bootstrap/dist/css/bootstrap.min.css';

function Select(params) {
    return (
        <div className="container d-flex flex-column justify-content-center align-content-center ">
            <h1 className="text-secondary text-center">The Data is in selecting process</h1>
            <table className="table table-striped">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </table>
        </div>
    );
}
export default Select;