import { TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import LoadingScreen from 'loading-screen-kraenau';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const AddCustomer = () => {

    const { register, errors, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false)
    const [customer, setCustomer] = useState({
        firtsName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    })
    const history = useHistory()

    const onChange = (e) => {
        setCustomer(
            {
                ...customer,
                [e.target.name]: e.target.value
            }
        )
    };

    const add = () => {
        setLoading(true)
        axios.post(`https://blazeproject.herokuapp.com/api/customers`,customer)
            .then(res => {
                if(res.data){
                    setLoading(false)
                    Swal.fire(
                        'Good job!',
                        'A customer was registered!',
                        'success'
                      ).then(response=>{
                          if(response.isConfirmed){
                            history.push('/')
                          }
                      })
                }
            })
    }

    return (
        <div className="center">
            {
                loading === true && (
                    <LoadingScreen></LoadingScreen>
                )
            }
            <form noValidate autoComplete="off">
                <h2>Add Customer Form</h2>
                <TextField
                    name="firtsName"
                    value={customer.firtsName}
                    onChange={(e) => onChange(e)}
                    className="input"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    name="lastName"
                    value={customer.lastName}
                    onChange={(e) => onChange(e)}
                    className="input"
                    id="outlined-basic"
                    label="LastName"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    name="email"
                    type="email"
                    value={customer.email}
                    onChange={(e) => onChange(e)}
                    className="input"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    name="phoneNumber"
                    type="number"
                    value={customer.phoneNumber}
                    onChange={(e) => onChange(e)}
                    className="input"
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                />
                <button type="button" onClick={() => add()}>Add Customer</button>
                <Link to="/">Back</Link>
            </form>
            
        </div>
    );
}

export default AddCustomer;