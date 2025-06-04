import axios from 'axios';

const API_BASE = 'http://localhost:5000'; // Replace with your backend URL

export const getStockData = (minutes) =>
  axios.get(`${API_BASE}/stocks?minutes=${minutes}`);

export const getCorrelationData = (minutes) =>
  axios.get(`${API_BASE}/correlation?minutes=${minutes}`);