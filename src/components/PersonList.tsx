type PropsPersonList = {
  names: {
    first: string,
    last: string
  }[]
}
const PersonList = (props: PropsPersonList) => {
  return (
    <div>
      {props.names.map((name, id) => {
        return (
          <h2 key={name.first}>{name.first} {name.last} {id} Personlist.tsx</h2>
        )
      })}
    </div>
  )
}
export default PersonList