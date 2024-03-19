import {Note} from '../components/NoteItem/Note';  

interface NoteAction {
    type: string;
    note?: Note;
    id?: string;
}
const NOTEADD = 'Note/NOTEADD';
const NOTEREMOVE = 'Note/NOTEREMOVE';

export const noteAdd = (note: Note) => ({
    type: NOTEADD,
    note
});

export const noteRemove = (id: string) => ({
    type: NOTEREMOVE,
    id
});

const initiialstate = {
    note:[{
        id: '1',
        text: 'note1',
        tag: 'tag1'
        }
    ]
};

export default function note(state = initiialstate , action: NoteAction) {
    switch (action.type) {
        case NOTEADD:
            return {
             ...state,
                note: [...state.note, action.note]
            };
        case NOTEREMOVE:
            return {
             ...state,
                note: state.note.filter(note => note.id!== action.id)
            };
        default:
            return state;
    }
}