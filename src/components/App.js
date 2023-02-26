import React from 'react'

function App() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SECRET_CODE = process.env.REACT_APP_SECRET_CODE;
    console.log('Hello React Lite !');
    console.log(`The api key is ${API_KEY}`);
    console.log(`The secret code is ${SECRET_CODE}`);
    return (
        <div>
            <h1>REACT APP LITE</h1>
        </div>
    );
}
export default App
