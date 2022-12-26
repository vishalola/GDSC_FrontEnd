
function Score(props)
{
    return (
        <div className="rows score">
            <div>Score </div>
            <div>{": "+props.score}</div>
        </div>
    );
}
Score.defaultProps=
{
    score:10
}
export default Score;
