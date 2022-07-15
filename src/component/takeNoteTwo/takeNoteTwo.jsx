import React from 'react'
import "./takeNoteTwo.css";
import { addNote } from '../../services/DataService';
import ColorPopper from '../colorPopper/ColorPopper';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';

function TakeNoteTwo() {
  const [noteObj, setNoteObj] = React.useState({ title: "", description: "", color: "", isArchived: false })
  const takeTitle = (event) => {
    setNoteObj(preState => ({ ...preState, title: event.target.value }))
    console.log("Title", noteObj.title);
  }
  const takeDesc = (event) => {
    setNoteObj(prevState => ({ ...prevState, description: event.target.value }))
    console.log("Description", noteObj.description);
  }
  const Submit = () => {
    addNote(noteObj).then((response) => { console.log(response); }).catch((error) => { console.log(error) })
  }

  const listenToColorPopper = (color) => {
    setNoteObj(preState => ({ ...preState, color: color }))
  }

  const handleArchive = ()=>{
    setNoteObj(preState => ({ ...preState, isArchived: true }))
  }
  return (
    <div className='takeNoteTwo1' >
      <div className='divTakeTwo1' style={{ backgroundColor: noteObj.color }}>
        <div className='inputDivTakeTwo1'>
          <input type="text" onChange={takeTitle} placeholder="Title" style={{ width: "90%", border: "none", backgroundColor: noteObj.color, color: "black" }} />
          <PushPinOutlinedIcon size={28} />
        </div>
        <div className='inputDivTakeTwo2'>
          <input type="text" onChange={takeDesc} placeholder="Take a note..." style={{ width: "100%", border: "none", backgroundColor: noteObj.color, color: "black" }} />
        </div>
        <div className='iconDivTakeTwo'>
          <div className='allIcons'>
            <AddAlertOutlinedIcon size={28} />
            <PersonAddAltOutlinedIcon size={28} />
            <ColorPopper listenToColorPopper={listenToColorPopper} action="create" />
            <ImageOutlinedIcon size={28} />
            <ArchiveOutlinedIcon onClick={handleArchive} size={28} />
            <MoreVertOutlinedIcon size={28} />
            <UndoOutlinedIcon size={28} />
            <RedoOutlinedIcon size={28} />
          </div>
          <div className='submitBtn'>
            <button onClick={Submit}>Close</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TakeNoteTwo