import React, {useCallback, useEffect, useState} from "react";
import './style.progressBar.css'

function ProgressBar(){
    const [currentValue, setCurrentValue] = useState(0)
    const maxValue = 100;

    const increment = useCallback(() => {
        if(currentValue === 100){
            setCurrentValue(0);
        }else{
            setCurrentValue((v)=> v + 15)
        }
    }, [setCurrentValue, currentValue]);

    useEffect(() =>{
        const r = setInterval(()=>{
            increment()
        }, 200);
        return () => {
            clearInterval(r)
        }
    }, [increment])
      
    return(
        <progress className = 'progressBar' value={currentValue} max={maxValue}>{currentValue}%</progress>
    )
};

export default ProgressBar;