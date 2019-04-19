import React, { Component } from 'react';

import Sidebar from './components/Sidebar';
import Video from './components/Video';

class App extends Component {
  state = {
    activeLesson: {},
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
  }

  render() {
    return (
      <div className="App">
        <header className="App">
          <Video activeLesson={} />
          <Sidebar modules={ this.state.modules } />
        </header>
      </div>
    );
  }
}

export default App;
