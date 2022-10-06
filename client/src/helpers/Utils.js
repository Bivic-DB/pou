import React from "react";
import ReactDOM from 'react-dom'

export const convertBase64 = (File) => {
    let base64code = ""
    
    
    const getBase64 = file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          onLoad(reader.result);
        };
    } 
    const onLoad = fileString => {
        console.log(fileString);
        this.base64code = fileString
        
        File = fileString;
    };
    getBase64(File);
};

export const displayImage = (base64Image,element) => {
    const data = base64Image
    const Example = ({ data }) => <img src={data} />
    ReactDOM.render(<Example data={data} />, document.getElementById(element))

};