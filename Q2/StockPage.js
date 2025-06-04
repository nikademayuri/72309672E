import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { TextField, Container, Typography } from '@mui/material';
import { getStockData } from '../services/api';

function StockPage() {
  const [minutes, setMinutes] = useState(5);
  const [data, setData] = useState([]);

  useEffect(() => {
    getStockData(minutes).then(res => setData(res.data));
  }, [minutes]);

  return (
    <Container>
      <Typography variant="h4">Stock Prices</Typography>
      <TextField
        label="Last N Minutes"
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        sx={{ mt: 2, mb: 4 }}
      />
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </Container>
  );
}

export default StockPage;