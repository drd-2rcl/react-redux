import { createStore } from 'redux';

function reducer() {
  return [
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
  ];
}

const store = createStore(reducer);

export default store;