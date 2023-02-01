import { PersonProps } from './Person.type'

export const Person = ({ name }: PersonProps) => {
  return <div>`
    ${name.first}
    ${name.last}`</div>

}