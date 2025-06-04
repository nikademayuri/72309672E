import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField } from '@mui/material';
import { getCorrelationData } from '../services/api';

function HeatmapPage() {
  const [minutes, setMinutes] = useState(5);
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    getCorrelationData(minutes).then(res => setHeatmapData(res.data));
  }, [minutes]);

  return (
    <Container>
      <Typography variant="h4">Correlation Heatmap</Typography>
      <TextField
        label="Last N Minutes"
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        sx={{ mt: 2, mb: 4 }}
      />
      <div>
        {heatmapData.map((row, i) => (
          <div key={i} style={{ display: 'flex' }}>
            {row.map((cell, j) => (
              <div key={j} style={{
                width: 40, height: 40,
                backgroundColor: `rgba(255, 0, 0, ${Math.abs(cell)})`,
                margin: 2, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 'bold'
              }}>
                {cell.toFixed(2)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default HeatmapPage;