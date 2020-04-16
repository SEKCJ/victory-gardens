import React, { useState, useEffect } from 'react';
import { IAppProps } from '../App';
import { api, Token } from '../Services/apiServices';

const GardenVis: React.FC<IAppProps> = props => {

    const space = [300, 300];

    let fetchAPI = async () => {
        let response = await api(`/api/savedvegetables/${Token}`);
        // destructure(response);
    }

    // let destructure = (resObj: any) => {
    //     let spacingArr = resObj.map((element: any) => {
    //         let string = ""
    //         element.spacing.split("").forEach((element: any, index: any) => {
               
    //         })
    //     })

    // }
    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <h1>Garden Vis</h1>
    )
}

export default GardenVis