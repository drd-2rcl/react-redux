import { createStore } from 'redux';

// a função reducer armazena o estado e pode manipular 

// as actions são ações que repassamos ao redux indicando que precisamos manipular o estado de alguma forma, indicando ações do usuário ou que aconteram na própria aplicação.

import rootReducer from './reducers'

const store = createStore(rootReducer);

export default store;