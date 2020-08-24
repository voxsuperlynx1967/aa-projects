const {
  store,
  createTask,
  deleteTask,
  resetTaskList,
} = require('./reduxStoreActionReducer');


store.subscribe(() => console.log(store.getState()));
