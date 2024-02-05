import React from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "../style/Note.css"

export const Note = ({ text, id , deleteNote}) => {
  return (
    <div className='note'>
        <div className='note__body'>{text}</div>
        <div className='note__footer' style={{justifyContent:'flex-end'}}>
            <DeleteForeverOutlinedIcon 
              className = 'node__delete' 
              onClick = {()=>deleteNote(id)}
            />
        </div>
    </div>
  )
}
