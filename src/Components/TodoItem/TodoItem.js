import "./TodoItem.css";

function TodoItem(props) {
    return (
      <li className='todo-item'>
        <button 
        className={`check ${props.completed && "check--active"}`}
        onClick={props.onComplete}
        ></button>
        <p className={`todoitem-p ${props.completed && "todoitem-p--complete"}`}>{props.text}</p>
        <button className="close-item" onClick={props.onDelete}></button>
      </li>
    );
}


export {TodoItem}