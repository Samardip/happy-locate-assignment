import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { ChangeValue } from '../changeValue/changeValue';

export default function CardVariant({item,key,handleIncrement,handleDecrement}) {
  return (
    <Card sx={{ minWidth: '100%',minHeight:147 }} key={key}>
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="140"
        className='object-cover h-[110px]'
          image="https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="green iguana"
        />
        <CardContent className='flex justify-between items-center !text-[10px] !p-0 !px-2 !h-[37px]'>
          <Typography component="div" className='!text-[10px] !font-bold'>
            {item?.name}
          </Typography>
          {
            item?.count>0?<Typography variant="div">
              <ChangeValue
              value={item?.count}
              handleIncrement={() => { handleIncrement(item, key) }}
              handleDecrement={() => { handleDecrement(item, key) }}
               />
            </Typography>:<Typography variant="div" className='!text-[12px] !font-bold !text-custom-blue cursor-pointer' onClick={() => { handleIncrement(item, key) }}>
            Add
           </Typography>
          }
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
