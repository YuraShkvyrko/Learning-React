/*function PetInfo(props) {
  return <h1>My {props.animal} is {props.age} years old</h1>
}*/

function PetInfo(props) {
  const {animal, age} = props
  return <h1>My {animal} is {age} years old</h1>
}

/*function PetInfo({animal, age}) {
  return <h1>My {animal} is {age} years old</h1>
}*/

export default PetInfo
