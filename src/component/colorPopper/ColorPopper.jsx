import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { updateColor } from '../../services/DataService';

export default function ColorPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    console.log("hii")
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  var colorList = [
    '#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
    '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0'
  ];


  const pickColor = (color)=>{
      console.log(color);
      if(props.action === "create"){
        props.listenToColorPopper(color)
      }
      else if(props.action === "update"){
        let upadteColor = {
          noteIdList:[props.id],color:color
        }
        updateColor(upadteColor).then((response)=>console.log(response)).catch((error)=>console.log(error))
      }
      
  }
  return (
    <div>
        <ColorLensOutlinedIcon aria-describedby={id}  onClick={handleClick} />
      {/* <button aria-describedby={id} type="button" onClick={handleClick}>
        Toggle Popper
      </button> */}
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ display:'flex',border: 1, p: 1, bgcolor: 'background.paper' }}>
          {
            colorList.map((color)=>(
                <div onClick={()=>pickColor(color)} style={{height:35,width:35,borderRadius:100,backgroundColor:color,marginLeft:5}}></div>
            ))
          }
        </Box>
      </Popper>
    </div>
  );
}
