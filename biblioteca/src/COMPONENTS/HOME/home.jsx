import React from "react";
import { Form } from "react-router-dom";
import Input from "../adminView/input";
import List from "../adminView/list";

const Home = () => {
    return (
        <div className='fatherOfAll'>
            <Input/>
            <div>
                <Form/>
                <List/>
            </div>
        </div>
    )
}

export default Home;