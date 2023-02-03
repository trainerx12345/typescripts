type HeadingProps = {
  children: string
}
export const Heading = (props: HeadingProps) => {
  return (
    <div>{props.children} Heading.tsx</div>
  )
}