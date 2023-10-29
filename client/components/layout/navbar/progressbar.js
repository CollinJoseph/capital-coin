import { useState } from "react";

function ProgressBar() {
    const [completedObjectives, setCompletedObjectives] = useState(0);
  
    // This function will be called every time an objective is completed
    const handleObjectiveCompletion = () => {
        if (completedObjectives < 100) {
            setCompletedObjectives(prevState => prevState + 5);
        }
    };
  
    return (
        <div>
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${completedObjectives}%` }}></div>
            </div>
            <button onClick={handleObjectiveCompletion}>Complete Objective</button>
        </div>
    );
  }
  
  export default ProgressBar;