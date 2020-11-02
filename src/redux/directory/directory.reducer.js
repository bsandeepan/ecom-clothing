import Sections from './directory.data';

const INITIAL_STATE = {
    sections: Sections
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
