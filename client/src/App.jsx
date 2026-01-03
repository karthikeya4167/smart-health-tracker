import { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PDFExportBtn from './components/reports/PDFExportBtn';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/health/history');
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const chartData = data.length > 0 ? data.map(d => ({
    name: new Date(d.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
    Steps: d.metrics.steps,
    HR: d.metrics.avg_heart_rate
  })) : [];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>VitalSense Health Dashboard</h1>
      
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <div style={{ marginBottom: '20px' }}>
             <PDFExportBtn healthData={data} userName="Karthik" />
          </div>

          <div style={{ height: '400px', width: '100%', border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}>
            <h3>Activity Trends</h3>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="Steps" stroke="#8884d8" />
                  <Line type="monotone" dataKey="HR" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p>No data found. Is the backend server running?</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;