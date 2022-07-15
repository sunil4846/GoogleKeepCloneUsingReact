import React, { useState } from 'react'
import Header from '../../component/header/Header'
import TakeNoteOne from '../../component/takeNoteOne/takeNoteOne'
import TakeNoteThree from '../../component/takeNoteThree/TakeNoteThree'
import TakeNoteTwo from '../../component/takeNoteTwo/takeNoteTwo'
import { getNotes } from '../../services/DataService'
import "./dashboard.css";
import MiniDrawer from '../../component/drawer/Drawer'
function Dashboard() {
    const [drawer, setDrawer] = useState(false)
    const [noteView, setNoteView] = useState(true)
    const [listOfNotes, setListOfNotes] = useState([])
    const [currentNoteChoice, setCurrentNoteChoice] = useState('notes')
    const listenToTakeNoteOne = () => {
        setNoteView(false);
    };

    const listenToHeader = () => {
        setDrawer(!drawer)
    }

    const listenToSideNavigationBar = (NoteChoice) => {
        setCurrentNoteChoice(NoteChoice);
    }

    const GetNotes = () => {
        getNotes()
            .then((response) => {
                let filter = []
                if (currentNoteChoice === 'notes') {
                    filter = response.data.data.data.filter(function (note) {
                        if (note.isArchived === false && note.isDeleted === false) {
                            return note
                        }
                    })
                }
                else if (currentNoteChoice === 'archive') {
                    filter = response.data.data.data.filter(function (note) {
                        if (note.isArchived === true && note.isDeleted === false) {
                            return note
                        }
                    })

                }
                else if (currentNoteChoice === 'trash') {
                    filter = response.data.data.data.filter(function (note) {
                        if (note.isArchived === false && note.isDeleted === true) {
                            return note
                        }
                    })

                }
                setListOfNotes(filter)
            }).catch((error) => {
                console.log(error);
            });
    }
    React.useEffect(() => {
        GetNotes();
    }, [noteView, currentNoteChoice]);
    console.log(listOfNotes);
    return (
        <div className='dashboard'>
            <div>
                <Header listenToHeader={listenToHeader} />
            </div>
            <div style={{ height: "5vh" }}></div>
            <div>
                {
                    noteView ? <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} /> : <TakeNoteTwo />
                }
            </div>
            <div style={{ height: "5vh" }}></div>
            <div className='displayNotes'>
                {
                    listOfNotes.map((note) => <TakeNoteThree note={note} />)
                }
            </div>
            <MiniDrawer drawer={drawer} listenToSideNavigationBar={listenToSideNavigationBar} />
        </div>
    )
}

export default Dashboard;