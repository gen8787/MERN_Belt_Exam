import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Container, Paper, TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const AllPets = () => {
//==   S T A T E   ==||
const [allPets, setAllPets] = useState([]);

//==   E F F E C T   ==||
    useEffect(() => {
        getData();
    }, []);

//==   M E T H O D S   ==||
    const getData = () => {
        axios.get('http://localhost:8000/api/all')
            .then(res => {
                setAllPets(res.data);
            })
            .catch(err => console.log(err));
    };

//==   R E T U R N   ==||
    return (
        <Container className="mt-3">
            <h3>These Pets are looking for a good home</h3>
        <Paper variant="outlined" className="p-1">

        <TableContainer>
            <Table aria-label="">
                <TableHead>
                    <TableRow>
                        <TableCell className="font-weight-bold">Name</TableCell>
                        <TableCell className="font-weight-bold">Type</TableCell>
                        <TableCell className="font-weight-bold">Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {
                    allPets.map((pet, i) => 
                        <TableRow key={i}>
                            <TableCell>{ pet.name }</TableCell>
                            <TableCell>{ pet.type }</TableCell>
                            <TableCell><Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>edit</Link></TableCell>
                        </TableRow>
                    )
                }
                </TableBody>
            </Table>
        </TableContainer>
        </Paper>
        </Container>
    )
}

export default AllPets