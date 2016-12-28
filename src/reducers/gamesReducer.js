import initialState from './initialState';

export default function gamesReducer(state = initialState.games, action) {
  switch (action.type) {
    default:
      return state;
  }
}
