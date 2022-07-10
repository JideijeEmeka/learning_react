import React from 'react'
import Person from './person'

function NameList() {
    //const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'Reactjs'
        }, 
        {
            id: 2,
            name: 'Clark',
            age: 20,
            skill: 'Angularjs'
        }, 
        {
            id: 3,
            name: 'Diana',
            age: 25,
            skill: 'Vue'
        }]
  const personList = persons.map(person => <Person person = {person}/>)
//   const nameList = names.map((name, index) => <h2 key = {index}>{index} {name}</h2>)
  return <div>{personList}</div>
}

export default NameList