import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { Container, Paper, Button, Grid } from '@material-ui/core';

const OnePet = (props) => {
//==   S T A T E   ==||
const [onePet, setOnePet] = useState({});

//==   E F F E C T   ==||
useEffect(() => {
    axios.get(`http://localhost:8000/api/${props.id}`)
        .then(res => {
            if(res.data != null) {
                setOnePet(res.data)
            } else {
                navigate('/')
            }
        })
        .catch(err => console.log(err))
}, [props.id]);

//==   H A N D L E R S   ==||
const deleteHandler = id => {
    axios.delete(`http://localhost:8000/api/${id}/delete`)
        .then(navigate('/'))
        .catch(err => console.log(err))
};

//==   R E T U R N   ==||
return (
    <Container className="mt-3">

        <Grid className="mb-3" container justify="space-between">
            <h3>Details about: {onePet.name}</h3>
            <Button variant="contained" color="secondary" onClick={ () => deleteHandler(onePet._id)}>Adopt {onePet.name}</Button>
        </Grid>

        <Paper variant="outlined" className="p-1">

            <Grid container alignItems="flex-end" className="mb-3">
                <h4>Pet type:</h4>
                <h5 className="ml-5 pl-2">{ onePet.type }</h5>
            </Grid>

            <Grid container alignItems="flex-end" className="mb-3">
                <h4>Description:</h4>
                <h5 className="ml-4">{ onePet.description }</h5>
            </Grid>

            <Grid container>
                <h4>Skills:</h4>
                <Grid>
                    <h5 className="ml-5 pl-5" >{ onePet.skill1 }</h5>
                    <h5 className="ml-5 pl-5" >{ onePet.skill2 }</h5>
                    <h5 className="ml-5 pl-5" >{ onePet.skill3 }</h5>
                </Grid>
            </Grid>
        </Paper>
    </Container>
    )
}

export default OnePet