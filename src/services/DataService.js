import axios from 'axios';

const headerConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}

// add note api
export const addNote = (addNoteObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes", addNoteObj,headerConfig);
    return response;
}

//get note api
export const getNotes = () => {
    let response = axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerConfig);
    return response;
}

// update color api
export const updateColor = (colorObj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",colorObj,headerConfig);
    return response;
}

//archive note api
export const archiveNote = (obj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",obj,headerConfig);
    return response;
}

// update notes
export const updateNote = (obj) => {
    let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",obj,headerConfig);
    return response;
}