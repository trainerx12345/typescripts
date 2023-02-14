type ListProps<Type> = {
  items: Type[]
  onClick: (value: Type) => void
}

export const List = <Type extends { id: number }>({
  items,
  onClick
}: ListProps<Type>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map(item => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        )
      })}
    </div>
  )
}
