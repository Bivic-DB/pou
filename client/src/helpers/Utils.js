import React, {useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { resolvePath } from "react-router-dom";


export const convertBase64 = (File) => {
    let base64code = "";

    const onChange = (File) =>{
        getBase64(File);
    }

    const onLoad = fileString => {
        //this.base64Image = fileString;
        //console.log(fileString)
        //console.log(this.base64Image)
        return fileString
    };

    const getBase64 = file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          onLoad(reader.result);
        };
    } 
    onChange(File);


    
    
    return base64code
    
};

let base64code = "";
export function test(file) {
    let reader = new FileReader();
    reader.onload = e => {
        const b64 = reader.result;
        console.log(b64)
    }
    reader.readAsDataURL(file);
    
    return "f"
};


export const displayImage = (base64Image,element) => {
    const data = base64Image
    const Example = ({ data }) => <img src={data} />
    ReactDOM.render(<Example data={data} />, document.getElementById(element))

};