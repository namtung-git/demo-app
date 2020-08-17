import React, { useState, useEffect } from 'react'
import EditList from './EditList'
import EditForm from './EditForm'
import IslandStore from '../actions/store'

function EditController(){
    const [villagers, setVillagers] = useState(IslandStore.initialState)
    const [editorDetail, setEditorDetail] = useState(false)
    const [editorState, setEditorState] = useState(false)

    useEffect(()=> {
            const subs = IslandStore.subscribe(setVillagers);
            IslandStore.init();
        
            return () => subs.unsubscribe();
        },[]);
    
    function removeVillager(villager){
        IslandStore.removeVillager(villager)
        IslandStore.init();
        setEditorState(false)
    }

    function openEditor(villager){
        setEditorState(true)
        setEditorDetail(villager)
    }

    function closeEditor(){
        setEditorState(false)
    }

    function updateVillager(villager){
        IslandStore.updateVillager(villager)
        IslandStore.init();
    }

    return (
        <React.Fragment>
            <EditList
                removeVillager={removeVillager}
                villagers={villagers.data}
                openEditor={openEditor}
            />
            {editorState ? 
                <EditForm 
                            updateVillager={updateVillager}
                            editVillager={editorDetail}
                            closeEditor={closeEditor}
                            /> : null}
        </React.Fragment>
    )
}

export default EditController