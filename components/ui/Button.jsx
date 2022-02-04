function Button(props) {

  
  return (
    <button className={props.style} onClick={props.handleClick}>
      {props.children}
    </button>
  );
}

export default Button
