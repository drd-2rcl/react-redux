import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CourseActions from '../../store/actions/course';

// dispatch serve para disparar actions para o redux, desta forma elas se tornam públicas para a nossa aplicação;

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    { modules.map(module => (
      <div hey={module.id} >
        <strong>{module.title}</strong>
        <ul>
          { module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toggleLesson(module, lesson)}>Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
)

const mapStateToProps = state => ({
  modules: state.course.modules
});

const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);