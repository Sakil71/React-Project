import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import './App.css';

function App() {

  // https://recharts.org/en-US
  const data = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 90 },
    { name: "BOOTSTRAP", value: 92 },
    { name: "TAILWIND", value: 95 },
    { name: "JAVASCRIPT", value: 75 },
    { name: "REACT.JS", value: 65 },
    { name: "FIREBASE", value: 80 },
    { name: "MONGODB", value: 70 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


  return (
    <div className="App">
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={620}
          cy={200}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
}

export default App;
