

export type Name = {
  first: string,
  last: string
}
export type PersonProps = {
  name: Name //ReUse the type Name in other types
}

export type PropsPersonList = {
  names: Name[]
  /*This is an Array of Object which is same as  
  const nameList =
  [{
    first: 'Bruce',
    last: 'Wayne'
  },
  {
    first: 'Clark',
    last: 'Kent'
  },
  {
    first: 'Princess',
    last: 'Diana'
  }]*/
} 