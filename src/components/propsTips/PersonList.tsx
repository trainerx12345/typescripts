import { PropsPersonList } from './Person.type'

const PersonList = ({ names }: PropsPersonList) => {
  return (
    <div>
      {names.map(name => {
        return (
          <h2 key={name.first}>`${name.first} {name.last}`</h2>
        )
      })}
    </div>
  )
}
export default PersonList