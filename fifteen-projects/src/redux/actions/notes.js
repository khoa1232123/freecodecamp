import { getNoteData, setNoteData } from '../../localStorage';
import { noteTypes } from '../types';
import shortid from 'shortid';
// action creators

export const getNotes = () => (dispatch) => {
  try {
    const data = getNoteData();
    dispatch({ type: noteTypes.GET_ALL_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const openCreateForm = () => (dispatch) => {
  dispatch({ type: noteTypes.OPEN_FORM });
};

export const createNote = (note) => (dispatch) => {
  try {
    if (note.trim() !== '') {
      const notes = getNoteData();
      const item = {
        id: shortid.generate(),
        note,
      };
      notes.push(item);
      setNoteData(notes);
      dispatch({ type: noteTypes.CREATE_SUCCESS, payload: notes });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = (id) => (dispatch) => {
  try {
    const notes = getNoteData();
    const newNotes = notes.filter((item) => item.id !== id);
    setNoteData(newNotes);
    dispatch({ type: noteTypes.CREATE_SUCCESS, payload: newNotes });
  } catch (error) {
    console.log(error);
  }
};

export const openEditForm = (currentNote) => (dispatch) => {
  dispatch({ type: noteTypes.OPEN_FORM, payload: currentNote });
};

export const editNote = (noteItem) => (dispatch) => {
  try {
    if (noteItem.note && noteItem.note.trim() !== '') {
      const notes = getNoteData();
      notes.find((item) => item.id === noteItem.id).note = noteItem.note;
      setNoteData(notes);
      console.log(notes);
      dispatch({ type: noteTypes.UPDATE_SUCCESS, payload: notes });
    }
  } catch (error) {
    console.log(error);
  }
};

export const checkedNote = (id) => (dispatch) => {
  const notes = getNoteData();
  notes.find((item) => item.id === id).checked = !notes.find(
    (item) => item.id === id
  ).checked;
  setNoteData(notes);
  dispatch({ type: noteTypes.UPDATE_SUCCESS, payload: notes });
};

export const closeForm = () => (dispatch) => {
  dispatch({ type: noteTypes.CLOSE_FORM });
};

export const searchActions = (q) => (dispatch) => {
  const notes = getNoteData();
  const searchNotes = notes.filter((element) => {
    return element.note.toLowerCase().includes(q.toLowerCase());
  });
  dispatch({ type: noteTypes.SEARCH_ACTIONS, payload: searchNotes });
};
