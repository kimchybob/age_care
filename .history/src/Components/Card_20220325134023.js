import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasciCard(props) {
  return (
    <Card sx={{ minWidth: 275 , minHeight: 275, margin:2}} >
      <CardContent>
        <Typography sx={{ fontSize: 25, fontWeight:"bold" }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography sx={{ fontSize: 30 }} color="text.secondary">
          {props.number}
        </Typography>
      </CardContent>
    </Card>
  );
}
