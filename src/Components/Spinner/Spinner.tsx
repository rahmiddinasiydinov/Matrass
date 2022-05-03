import { CircularProgress } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import './Spinner.scss';


interface Ispinner{
    loaded:boolean
}

export const Spinner: React.FC<Ispinner> = ({loaded}) => {
    
    const progress = useRef<HTMLDivElement| null>(null);

    useEffect(() => {
        if (loaded) {
            setTimeout(() => {
                progress.current?.classList.add("spinner__hide");
            }, 1000)
            setTimeout(() => {
                progress.current?.classList.add('spinner__disable')
            }, 3000)
        }
    }, [loaded]);
  
    
    return (
        <div className="spinner" ref={progress}>
            <CircularProgress size={window.screen.width > 1000 ? 100 : 50}  thickness={2} color='inherit' />
            <span className="spinner__load">Loading . . .</span>
        </div>
    )
}