import React from 'react';
import {Button} from "@material-ui/core";
import CodeReader from "./CodeReader";


function App() {
    return (
        <div>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <CodeReader/>
        </div>
    );
}

export default App;
