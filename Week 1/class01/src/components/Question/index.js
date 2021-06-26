import CustomButton from "../CustomButton"

function Question(props){

    console.log("props===> ",props)

    const {question : {
        incorrect_answers , correct_answer, question
    }} = props ;
    const options = [].push(incorrect_answers);
    // const options = incorrect_answers.push(correct_answer);
    console.log("Options === >" , options);




    return (
    <div className="question-box"
    style={{ backgroundColor: 'gray', color: 'white', padding:'10' ,  width:'50%', }}
    >

        
        
        <strong 
        
        style={{ float: 'left', left:'10' }}
        
        >{props.question.question}</strong>


        {
            options.map((value)=>{
                return (
                    <div>
                <input type="radio" name = {props.index} value ={correct_answer} /> {value}
                </div>
                )
            })
        }


        <br />
        {/* <input type="radio" name = {props.index} value ={props.answer} /> {props.answer} <br /> */}
        {/* <input type="radio" name = {props.index} value = {props.wrongAnswer[0]} /> {props.wrongAnswer[0]} <br /> */}
        {/* <input type="radio" name = {props.index} value = {props.wrongAnswer[1]}/> {props.wrongAnswer[1]} <br /> */}
        {/* <input type="radio" name = {props.index} value = {props.wrongAnswer[2]}/> {props.wrongAnswer[2]} <br /> */}
        {/* <CustomButton title="Next"/> */}
     

    </div>

    )
}

export default Question;