import test from 'node:test';
import { useState } from 'react'

interface AnalysisType {
    count?: number,
    sum?: number,
    average?: number,
    maximum?: number,
    minimum?: number,
    error?: string
}
const dataset = {
  temperature: [23, 45, 67, 89, 34, 56, 78, 90, 12, 45, 67, 89],
  testScores: [78, 85, 90, 95, 88, 76, 92, 89, 84, 91],
  salesFigures: [1200, 1500, 1800, 2000, 1700, 1600, 1900, 2100],
}
const DataAnalyzer = () => {
    const [analysis, setAnalysis] = useState<AnalysisType>(null);
    const [currentDataset, setCurrentDataset] = useState('temperature');  
    const analyzeData = () => {
      const data = dataset[currentDataset];
        // Calculate statistics
        const validNumbers = data.filter(item => typeof item === 'number' && !isNaN(item));
        if (validNumbers.length === 0) {
          setAnalysis({ error: "No valid numeric data available." });
          return;
        }
        const sum = data.reduce((total, num) => total + num, 0);
        const average = sum / data.length;
        const maximum = Math.max(...data);
        const minimum = Math.min(...data);
        const count = data.length;
      
        setAnalysis({
          sum,
          average: Number(average.toFixed(2)),
          maximum,
          minimum,
          count
        });
      };

  return (
    <div>
        <h1>DataAnalyzer</h1>
        <select 
          value={currentDataset} 
          onChange={(e) => setCurrentDataset(e.target.value)}
          className="border p-2 rounded mb-4"
        >
          <option value="temperature">Temperature</option>
          <option value="testScores">Test Scores</option>
          <option value="salesFigures">Sales Figures</option>
        </select>

        <button onClick={analyzeData}>Analyze</button>
        {analysis && (
  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded">
    <div><strong>Count:</strong> {analysis.count}</div>
    <div><strong>Sum:</strong> {analysis.sum}</div>
    <div><strong>Average:</strong> {analysis.average}</div>
    <div><strong>Maximum:</strong> {analysis.maximum}</div>
    <div><strong>Minimum:</strong> {analysis.minimum}</div>
    <div><strong>Range:</strong> {analysis.maximum - analysis.minimum}</div>
  </div>
)}
    </div>
  )
}

export default DataAnalyzer