import React from 'react'
import { Button } from '@material-ui/core';

function Details(props) {
    return (
        <div>
            <Button style={{ backgroundColor:'green' }} color= 'secondary' variant='contained'> Electronics</Button>

            <Button color= 'secondary' variant='contained'> Food </Button>
        </div>
    )
}

export default Details;