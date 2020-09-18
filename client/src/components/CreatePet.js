import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Container, Paper, Grid, Button } from '@material-ui/core';

const CreatePet = () => {
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

//==   H A N D L E R S   ==||
const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/create', pet)
        .then(res => {
            if (res.data.errors) {
                setErrors(res.data.errors)
            } else {
                navigate('/')
            }
        })
        .catch(err => console.log(err))
};

const changeHandler = (e) => {
    setPet({
        ...pet,
        [e.target.name]: e.target.value
    });
};

//==   R E T U R N   ==||
return (
    <Container className="mt-3">
        <h3>Know a pet needing a home?</h3>

    <Paper variant="outlined" className="p-1">
        <form onSubmit={submitHandler}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Grid>
                        <label htmlFor="name">Pet Name:</label>
                        <input onChange={changeHandler} name="name" type="text" placeholder="enter pet name"/>
                            {
                                errors.name ? <><br/><small style={{color:'red'}}>{errors.name.message}</small></>
                                : ""
                            }
                    </Grid>

                    <Grid>
                        <label htmlFor="type">Pet Type:</label>
                        <input onChange={changeHandler} name="type" type="text" placeholder="enter pet type"/>
                        {
                            errors.type ? <><br/><small style={{color:'red'}}>{errors.type.message}</small></>
                            : ""
                        }
                    </Grid>

                    <Grid>
                        <label htmlFor="description">Pet Description:</label>
                        <input onChange={changeHandler} name="description" type="text" placeholder="enter pet description"/>
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
                    <input onChange={changeHandler} name="skill1" type="text" placeholder="enter skill"/>
                    {
                        errors.skill1 ? <><br/><small style={{color:'red'}}>{errors.skill1.message}</small></>
                        : ""
                    }
                </Grid>

                <Grid>
                    <label htmlFor="skill2">Skill 2:</label>
                    <input onChange={changeHandler} name="skill2" type="text" placeholder="enter skill"/>
                    {
                        errors.skill2 ? <><br/><small style={{color:'red'}}>{errors.skill2.message}</small></>
                        : ""
                    }
                </Grid>

                <Grid>
                    <label htmlFor="skill3">Skill 3:</label>
                    <input onChange={changeHandler} name="skill3" type="text" placeholder="enter skill"/>
                    {
                        errors.skill3 ? <><br/><small style={{color:'red'}}>{errors.skill3.message}</small></>
                        : ""
                    }
                </Grid>
            </Grid>

            <Button className="ml-5 mb-5" variant="contained" color="primary" type="submit" value="Add Pet">Add Pet</Button>

            </Grid>
        </form>
    </Paper>
    </Container>
    )
}

export default CreatePet