type StatusProps = {
  status: 'loading' | 'success' | 'error' //Union of string literals ... setting the default value to be invoke for the props if none in the given throw an error
}

export const Status = (props: StatusProps) => {
  let message
  if (props.status === 'loading') {
    message = 'Loading ... status.tsx'
  } else if (props.status === 'success') {
    message = `Data fetched successfully status.tsx`
  } else if (props.status === 'error') {
    message = 'Error fetching data status.tsx'
  }
  return (
    <div>
      <h2>Status {message}</h2>
    </div>
  )
}