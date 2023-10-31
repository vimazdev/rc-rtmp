import React from 'react'
import {  Paper, Button } from "@mui/material";

interface ItemContainerGridProps {
    imgSrc: string;
    description: string;
}

const ItemContainerGrid: React.FC<ItemContainerGridProps> = ({imgSrc,description}) => {
    return (
        <Paper style={{ minWidth: 250, padding: 16, textAlign: "center", margin: 16 }}>
            <img src={imgSrc} alt="Item" style={{ width: "100%" }} />
            <p>{description}</p>
            <Button variant="contained" color="primary">
                Contactar
            </Button>
        </Paper>
    )
}

export default ItemContainerGrid;
