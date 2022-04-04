import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasciCard(props) {
  return (
    <Card sx={{ minWidth: 275 , minHeight: 175, margin:2}} >
      <CardContent>
        <Typography sx={{ fontSize: 25, fontWeight:"bold" }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography sx={{ fontSize: 60 }} color="text.secondary">
          {props.number}
        </Typography>
      </CardContent>
    </Card>
  );
}
