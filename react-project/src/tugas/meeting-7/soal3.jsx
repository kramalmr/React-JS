/* eslint-disable react/prop-types */
// SOAL 3

export function ShowAlert({message}) {
  return <button onClick={() => alert(message)}>Show Message</button>;
}
