import React, {useEffect, useState} from 'react';
import QrReader from 'react-qr-reader'
import {Box, Grid} from "@material-ui/core";


const CodeReader = () => {
    const [data,setData]=useState<string>('')
    const [error,setError]=useState<any>('')
    const [supported,setSupported]=useState<any>('')

    const handleScan = (data: string | null) => {
        if (data) {
            setData(data)
        }
    }
    const handleError = (err:any) => {
        setError(err)
    }
    useEffect(()=>{
        const supported = 'mediaDevices' in navigator;
        setSupported(supported)
    },[])
    return (
        <Box p={3}>
            <Grid container spacing={2}>
                <Grid item  md={12}>
                    <p>{data}</p>
                </Grid>
                <Grid item md={6}>
                    <QrReader
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item md={6}>
                    <code>
                        {JSON.stringify(supported,null,2)}
                    </code>
                </Grid>
                <Grid item md={6}>
                    <code>
                        {JSON.stringify(error,null,2)}
                    </code>
                </Grid>
            </Grid>


        </Box>
    );
}


export default CodeReader;
