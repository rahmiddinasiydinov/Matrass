import { CircularProgress } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './Spinner.scss';




export const Spinner: React.FC = () => {
    const progress = useRef<HTMLDivElement| null>(null);
    const loaded: boolean = useSelector((state: any) => state.isLoaded.value);
    useEffect(() => {
        if (loaded) {
            setTimeout(() => {
                progress.current?.classList.add("spinner__hide");
            }, 1000)
            setTimeout(() => {
                progress.current?.classList.add('spinner__disable')
            }, 3000)
        } else {
                progress.current?.classList.remove("spinner__disable");
                progress.current?.classList.remove("spinner__hide");
        }
    }, [loaded]);
  
    
    return (
        <div className="spinner" ref={progress}>
            <CircularProgress size={window.screen.width > 1000 ? 100 : 50}  thickness={2} color='inherit' />
            <span className="spinner__load">Loading . . .</span>
        </div>
    )
}