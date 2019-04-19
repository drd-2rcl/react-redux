import React, { Component } from 'react'

class Sidebar extends Component {
  state = {
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
    const { modules } = this.state;
    return (
      <aside>
        { modules.map(module => (
          <div hey={module.id} >
            <strong>{module.title}</strong>

            <ul>
              { module.lessons.map(lesson => (
                <li key={lesson.id}>{lesson.title}</li>
              ))}
            </ul>

          </div>
        ))}
      </aside>
    )
  }
}

export default Sidebar