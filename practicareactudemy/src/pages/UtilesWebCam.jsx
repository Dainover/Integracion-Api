import { Link } from "react-router-dom"
import WebCam from 'react-webcam'
import React,{useRef, useState} from 'react'
import { set } from "react-hook-form";



const UtilesWebCam = () => {
   const webcamRef = React.useRef(null);
   const mediaRecorderRef = React.useRef(null);
   const [capturing, setCapturing] = React.useState(false);
   const [recordedChunks, setRecordedChunks] = React.useState([]);
   
   const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: 'video/webm'
    });
    mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
    mediaRecorderRef.current.start();
   }, [webcamRef, setCapturing, mediaRecorderRef]);
   const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
   );
    const handleStopCaptureClick = React.useCallback(() => {
     setCapturing(false);
     mediaRecorderRef.current.stop();
    }, [mediaRecorderRef, webcamRef, setCapturing]);
    const handleDownload = React.useCallback(() => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: 'video/webm'
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'recording.webm';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            setRecordedChunks([]);
        }
    },[recordedChunks]);



   
 
 
 
   return (
    

    <>
       <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <Link to='/utiles'>webcam</Link>
            </li>
            <li className='breadcrumb-item acitve' aria-current='page'> 
               webcam
            </li>
        </ol>
    </nav>
    <h1>Web cam</h1>
    <hr />
    <WebCam audio={true} ref={webcamRef}/>
    {capturing ?( 
        <button onClick={handleStopCaptureClick} className="btn btn-danger">
        Detener grabación  </button>
    ):(
        <button onClick={handleStartCaptureClick} className="btn btn-primary">
        Iniciar grabación  </button>
    )}
    {recordedChunks.length > 0 && (
        <button onClick={handleDownload} className="btn btn-success">
        Descargar grabación
        </button>
    )}
    </>
  )
}

export default UtilesWebCam
