function Wrapper(props) {
  const styles = {
    backgroundColor: props.color,
    width: '250px',
    padding: '20px',
    margin: '20px auto'
  }
  console.log(props)
  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}

export default Wrapper
