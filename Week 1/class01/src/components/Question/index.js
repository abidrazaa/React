import CustomButton from "../CustomButton"

function Question(props){
    return (
    <div className="question-box"
    style={{ backgroundColor: 'gray', color: 'white', padding:'10' ,  width:'50%', }}
    
    
    >

        <strong 
        
        style={{ float: 'left', left:'10' }}
        
        >{props.question}</strong>
        <br />
        <input type="radio" name = {props.index} value ={props.answer} /> {props.answer} <br />
        <input type="radio" name = {props.index} value = {props.wrongAnswer[0]} /> {props.wrongAnswer[0]} <br />
        <input type="radio" name = {props.index} value = {props.wrongAnswer[1]}/> {props.wrongAnswer[1]} <br />
        <input type="radio" name = {props.index} value = {props.wrongAnswer[2]}/> {props.wrongAnswer[2]} <br />
        {/* <CustomButton title="Next"/> */}
     

    </div>

    )
}

export default Question;