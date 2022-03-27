import React from 'react';
import { useParams } from 'react-router-dom'; 

export default function Article(props) {
    const { id } = useParams();

    return (
        <div> This is {id} </div>
    )
}
