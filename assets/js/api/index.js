export const fetchTodos = ( filter ) => {
  switch (filter) {
    case 'all':
      return fetch('http://localhost:8000/api/tasks')
        .then( r => r.json())
        .then( json => json )
    case 'active':
      return fetch('http://localhost:8000/api/tasks?completed=False')
        .then( r => r.json())
        .then( json => json )
    case 'completed':
      return fetch('http://localhost:8000/api/tasks?completed=True')
        .then( r => r.json())
        .then( json => json )
    default:
      throw new Error(`Unknown filter: ${filter}.`)
  }
}
