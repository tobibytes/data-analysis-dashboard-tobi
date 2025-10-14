import { useState } from 'react'

interface AnalysisType {
    count: number,
    sum: number,
    average: number,
    maximum: number,
    minimum: number,
}
const DataAnalyzer = () => {
    const sampleData = [23, 45, 67, 89, 34, 56, 78, 90, 12, 45, 67, 89];
    const [analysis, setAnalysis] = useState<AnalysisType>({});
    const analyzeData = () => {
        // Calculate statistics
        const sum = sampleData.reduce((total, num) => total + num, 0);
        const average = sum / sampleData.length;
        const maximum = Math.max(...sampleData);
        const minimum = Math.min(...sampleData);
        const count = sampleData.length;
      
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