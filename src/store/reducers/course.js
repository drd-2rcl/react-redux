const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    { id: 1, 
      title: 'Rect na veia', 
      lessons: 
      [ 
        { id: 1, title: 'Primeiro Teste'},
        { id: 2, title: 'Segundo Teste'},
      ],
    },
    {
      id: 2, 
      title: 'Redux na veia',
      lessons: 
      [
        { id: 3, title: 'Terceiro Teste'},
        { id: 4, title: 'Quarto Teste'},
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return { 
      ...state, 
      activeLesson: action.lesson, 
      activeModule: action.module 
    };
  }
  // console.log(action);
  return state;
}