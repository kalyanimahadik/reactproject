import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

const Submit = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const subName = (e) => {
        setName(e.target.value);
    }
    const subAge = (e) => {
        setAge(e.target.value);
    }
    const onSubmitf = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3001/', { name: name, age: age }).then(res => console.log(res.data)).then(alert('data inserted successfully'));

        //window.location = '/';
    }
    return (
        <div className="container shadow">
            <h4 className="text-center">Form submission</h4>
            <form method='post'>
                <div className="mb-3 row" >
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" onChange={(e) => subName(e)} required />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Age</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="age" onChange={(e) => subAge(e)} required />
                    </div>
                </div>
                <div className="row ">
                    <div className="col d-flex justify-content-center align-content-center">
                        <button type="submit" className="btn btn-primary" onSubmit={onSubmitf}>Submit</button>
                    </div>
                </div>



            </form >
        </div >
    );

}
export default Submit;