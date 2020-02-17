import React from 'react';

function slideReducer(state, action) {
    switch (action.type) {
        case SliderHook.types.next: {
            return { ...state, centered: ((state.centered + 1) % state.totalSlides) }
        }
        case SliderHook.types.prev: {
            return { ...state, centered: state.centered <= 0 ? state.totalSlides - 1 : state.centered - 1 }
        }
        default: {
            throw new Error(`Unhandled type: ${action.type}`)
        }
    }
}

const initialState = (defaultSelPos, propChildren) => {
    return {
        centered: defaultSelPos,
        totalSlides: React.Children.count(propChildren)
    }
}

export default function SliderHook({reducer = (s, a) => a.changes} = {}, defaultSelPos, propChildren) {
    const [{ centered, totalSlides }, dispatch] = React.useReducer(
        (state, action) => {
            const changes = slideReducer(state, action)
            return reducer(state, {...action, changes})
        }, initialState(defaultSelPos, propChildren))

    const moveNext = () => dispatch({ type: SliderHook.types.next })
    const movePrev = () => dispatch({ type: SliderHook.types.prev })

    return { centered, totalSlides, moveNext, movePrev }
}


SliderHook.types = {
    next: 'NEXT',
    prev: 'PREVIOUS'
}