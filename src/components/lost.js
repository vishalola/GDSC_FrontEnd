export default (props)=>{
    return (
        <div className="result" id="lost">
            Oops! Better luck next time
            <br/>
            &emsp; The word was: {props.word}
        </div>
    );
}