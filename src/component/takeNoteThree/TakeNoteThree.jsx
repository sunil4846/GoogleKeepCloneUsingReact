import React from 'react'
import "./takeNoteThree.css";
import ColorPopper from '../colorPopper/ColorPopper';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { archiveNote, updateNote } from '../../services/DataService';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function TakeNoteThree(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = (updateNoteObj) => {
    setOpen(true);
    setUpdateNoteObj({noteId:updateNoteObj.id,title:updateNoteObj.title,description:updateNoteObj.description})
  }
  const handleClose = () => setOpen(false);

  const [updateNoteObj,setUpdateNoteObj] = React.useState({noteId:"",title:"",description:""})
  const takeTitle = (event)=>{ 
    setUpdateNoteObj((prevState)=>({...prevState,title:event.target.value}))
  }
  const takeDescription = (event)=>{
    setUpdateNoteObj((prevState)=>({...prevState,description:event.target.value}))
  }
  const editSubmit = ()=>{
    updateNote(updateNoteObj).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
  }

  const archive = () => {
    // console.log("archive here",props.note.id)
    let data = {
      noteIdList: [props.note.id],
      isArchived: true
    }
    console.log("something", data)
    archiveNote(data).then((response) => { console.log(response); }).catch((error) => { console.log(error) })
  }

  return (
    <div className='takeNoteThree' >
      <div className='divTakeThree1' style={{ backgroundColor: props.note.color }}>
        <div className='inputTakeThreeDiv1'>
          {/* <input type="text" placeholder={props.note.title} style={{ width: "90%", border: "none",backgroundColor:props.note.color ,color:"black"}} /> */}
          <p style={{ width: "90%", backgroundColor: props.note.color, textAlign: "left" }} onClick={()=>handleOpen(props.note)}>{props.note.title}</p>
          <PushPinOutlinedIcon size={28} />
        </div>
        <div className='inputTakeThreeDiv2'>
          {/* <input type="text" placeholder={props.note.description} style={{ width: "100%", border: "none",backgroundColor:props.note.color,color:"black" }} /> */}
          <p style={{ width: "100%", backgroundColor: props.note.color, textAlign: "left" }} onClick={()=>handleOpen(props.note)}>{props.note.description}</p>
        </div>
        <div className='iconDivTakeThree'>
          <div className='allIconsTakeThree'>
            <AddAlertOutlinedIcon size={28} />
            <PersonAddAltOutlinedIcon size={28} />
            <ColorPopper action="update" id={props.note.id} />
            <ImageOutlinedIcon size={28} />
            <ArchiveOutlinedIcon onClick={archive} size={28} />
            <MoreVertOutlinedIcon size={28} />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{backgroundColor:props.note.color}}>
          <FormControl className='inputClass1' id="inputTakeThreeDiv1" sx={{ width: '38ch' }} onClick={()=>handleOpen(props.note)}>
            <InputBase defaultValue={updateNoteObj.title} type='string' onChange={takeTitle} />
            <PushPinOutlinedIcon size={28} />
          </FormControl>
          <FormControl className='inputClass1' sx={{ width: '38ch' }} onClick={()=>handleOpen(props.note)}>
            <InputBase defaultValue={ updateNoteObj.description} type='string' onChange={takeDescription} />
          </FormControl>
          <div className='iconDivTakeThreeUpdate'>
            <div className='iconsTakeThreeUpdate'>
              <AddAlertOutlinedIcon size={28} />
              <PersonAddAltOutlinedIcon size={28} />
              <ColorPopper size={28}/>
              <ImageOutlinedIcon size={28} />
              <ArchiveOutlinedIcon  />
              <MoreVertOutlinedIcon size={28} />
              <UndoOutlinedIcon size={28} />
              <RedoOutlinedIcon size={28} />
            </div>
            <div className='submitBtn'>
              {/* <button onClick={Submit}>Close</button> */}
              <Button onClick={editSubmit} style={{color:"black"}}>Close</Button>
            </div>
          </div>
          
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  )
}

export default TakeNoteThree