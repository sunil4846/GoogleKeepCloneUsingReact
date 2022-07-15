import React from 'react'
import './takeNoteOne.css';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

function TakeNoteOne(props) {
  const takeNoteOne = () => {
    props.listenToTakeNoteOne()
  }
  return (
    <div className='divTakeOne1'>
      <div className='textfieldDiv' onClick={takeNoteOne}>
        <p style={{ float: "left" }}>Take a note...</p>
      </div>
      <div className='divTakeOne2'>
        <CheckBoxOutlinedIcon size={30} />
        <BrushOutlinedIcon size={30} />
        <ImageOutlinedIcon size={30} />
      </div>
    </div>
  )
}

export default TakeNoteOne