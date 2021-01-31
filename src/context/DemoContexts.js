import React from 'react'

const actions = {
    UPDATE_COLUMNS: 'UPDATE_COLUMNS',
    UPDATE_FONT: 'UPDATE_FONT',

    INCREMENT_COUNTER: 'INCREMENT_COUNTER',
    UPDATE_DATA: 'UPDATE_DATA'
  }

const DemoContext = React.createContext({ 
    columnDefs: [],
    fontHeight: 12,

    data: [],
    counter: 0,
})

const contextReducer = (state, action) => {
    switch (action.type) {
      case actions.UPDATE_COLUMNS: {
        return {
          ...state,
          columnDefs: action.payload,
        };
      }

      case actions.UPDATE_FONT: {
        return {
          ...state,
          fontHeight: action.payload,
        };
      }
      
      case actions.INCREMENT_COUNTER: {
        return {
            ...state,
            counter: state.counter + 1,
        };
      }

      case actions.UPDATE_DATA: {
        return {
          ...state,
          data: action.payload,
        };
      }

      default:
        return state;
    }
  }
  
export { actions, contextReducer, DemoContext }