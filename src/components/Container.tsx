type ContainerProps = {
  //props send via parent to child
  styles: React.CSSProperties
}
export const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles}> Sample element content</div>
  )
}