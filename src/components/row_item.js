function row_item(props){

    return (
        <div className="row" id={props.rowno}>
            <div className="row_item">{props.string[0]}</div>
            <div className="row_item">{props.string[1]}</div>
            <div className="row_item">{props.string[2]}</div>
            <div className="row_item">{props.string[3]}</div>
            <div className="row_item">{props.string[4]}</div>
        </div>
    );
}
row_item.defaultProps=
{
    string:"     "
}
export default row_item;