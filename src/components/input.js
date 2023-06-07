import '../App.css';
function InputBox(props) {
  console.log(props);
    return ( <>
    
        <div className='input-box'>
        <div>{props.numm || "0"} </div>
        {props.res ? <span>={props.res}</span> : ''}
        </div>
      
    </> );
}

export default InputBox;