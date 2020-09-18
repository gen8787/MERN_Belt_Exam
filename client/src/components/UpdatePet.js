import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Container, Paper, TextField, Grid, Button } from '@material-ui/core';

const UpdatePet = (props) => {
//==   S T A T E   ==||
const [pet, setPet] = useState({
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
});

const [errors, setErrors] = useState({
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
});

//==   E F F E C T   ==||
useEffect(() => {
    axios.get(`http://localhost:8000/api/${props.id}`)
        .then(res => {
            setPet(res.data)
        })
        .catch(err => console.log(err))
}, [props.id]);

//==   H A N D L E R S   ==||
    const changeHandler = (e) => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        });
    };

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/${props.id}/update`, pet)
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    };

//==   R E T U R N   ==||
    return (
        <Container className="mt-3">
            <h3>Edit {pet.name}</h3>

        <Paper variant="outlined" className="p-1">
            <form onSubmit={updateHandler}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Grid>
                            <label htmlFor="name">Pet Name:</label>
                            <TextField label="Pet Name" variant="outlined" onChange={changeHandler} name="name" type="text" value={pet.name || ""}/>
                            {
                                errors.name ? <><br/><small style={{color:'red'}}>{errors.name.message}</small></>
                                : ""
                            }
                        </Grid>

                        <Grid>
                            <label htmlFor="type">Pet Type:</label>
                            <input onChange={changeHandler} name="type" type="text" value={pet.type || ""}/>
                            {
                                errors.type ? <><br/><small style={{color:'red'}}>{errors.type.message}</small></>
                                : ""
                            }
                        </Grid>

                        <Grid>
                            <label htmlFor="description">Pet Description:</label>
                            <input onChange={changeHandler} name="description" type="text" value={pet.description || ""}/>
                            {
                                errors.description ? <><br/><small style={{color:'red'}}>{errors.description.message}</small></>
                                : ""
                            }
                        </Grid>
                    </Grid>

                    <Grid item xs={6}>
                        <h4>Skills (optional):</h4>

                        <Grid>
                            <label htmlFor="skill1">Skill 1:</label>
                            <input onChange={changeHandler} name="skill1" type="text" value={pet.skill1 || ""}/>
                            {
                                errors.skill1 ? <><br/><small style={{color:'red'}}>{errors.skill1.message}</small></>
                                : ""
                            }
                        </Grid>

                        <Grid>
                            <label htmlFor="skill2">Skill 2:</label>
                            <input onChange={changeHandler} name="skill2" type="text" value={pet.skill2 || ""}/>
                            {
                                errors.skill2 ? <><br/><small style={{color:'red'}}>{errors.skill2.message}</small></>
                                : ""
                            }
                        </Grid>

                        <Grid>
                            <label htmlFor="skill3">Skill 3:</label>
                            <input onChange={changeHandler} name="skill3" type="text" value={pet.skill3 || ""}/>
                            {
                                errors.skill3 ? <><br/><small style={{color:'red'}}>{errors.skill3.message}</small></>
                                : ""
                            }
                        </Grid>
                    </Grid>

                    <Button className="ml-5 mb-5" align="flex-start" variant="contained" color="primary" type="submit" value="Edit Pet">Edit Pet</Button>

                </Grid>
            </form>
        </Paper>
        </Container>
    )
}

export default UpdatePet