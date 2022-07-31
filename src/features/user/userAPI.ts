// A mock function to mimic making an async request for data
export function fetchUsers_() {
  // return new Promise<{ data: number }>((resolve) =>
  //   setTimeout(() => resolve({ data: amount }), 500)
  // );
  return new Promise < {data: any} > ((resolve) =>
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => { console.log('json: ', json); resolve(json);})
      // .then(response => resolve(response.json()))
  )
}
export function fetchUsers() {
  // return new Promise<{ data: number }>((resolve) =>
  //   setTimeout(() => resolve({ data: amount }), 500)
  // );
  return fetch('https://jsonplaceholder.typicode.com/users');
}
