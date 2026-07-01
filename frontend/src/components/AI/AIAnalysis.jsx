import { useState } from "react";
import AnalyzeButton from "./AnalyzeButton";
import AIProgress from "./AIProgress";
import AISummary from "./AISummary";
import { analyzeFloorPlan } from "../../services/aiAnalysisService";

export default function AIAnalysis({ file }) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("");
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const startAnalysis = async () => {
    if (!file) return;

    setRunning(true);
    setFinished(false);
    setProgress(0);
    setAnalysisResult(null);

    const steps = [
      { value: 15, text: "Reading Floor Plan..." },
      { value: 35, text: "Detecting Rooms..." },
      { value: 55, text: "Finding Doors & Windows..." },
      { value: 75, text: "Estimating Built-up Area..." },
      { value: 90, text: "Preparing AI Report..." },
    ];

    for (const step of steps) {
      setProgress(step.value);
      setStage(step.text);

      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    const result = await analyzeFloorPlan(file);

    setProgress(100);
    setStage("Analysis Complete!");

    setAnalysisResult(result);

    setTimeout(() => {
      setRunning(false);
      setFinished(true);
    }, 800);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {!running && !finished && (
        <AnalyzeButton
          disabled={!file}
          onAnalyze={startAnalysis}
        />
      )}

      {running && (
        <AIProgress
          progress={progress}
          stage={stage}
        />
      )}

      {finished && (
        <AISummary data={analysisResult} />
      )}
    </div>
  );
}