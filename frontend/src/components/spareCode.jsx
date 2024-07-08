// tasks.map((task) => (
//     <div key={task.id} className="task">
//         <h3>{task.task}</h3>
//         <p>{task.id}</p>
//         <p className='due'><small>Due Date:{task.dueDate}</small></p>
//         <p>{task.slicedDescr}...</p><br></br>
//         <p>{task.is_complete}</p>
//         <div className="icon-action">
//             {task.is_complete === 0 ? <CheckCircleOutlineIcon onClick={() => handleComplete(task.id)} style={{
//                 cursor: 'pointer',
//                 fontSize: '18px',
//                 color: 'grey'
//             }}/> :
//             <CheckCircleOutlineIcon style={{
//                 color:'green',
//                 fontSize: '18px',
//                 cursor: 'pointer'
//             }}/>
//             }
//             { task.is_complete === 1 ? <DeleteForeverIcon 
//             onClick = {() => handleDelete(task.id)}
//             style={{
//                 cursor: 'pointer',
//                 color: 'rgb(248, 34, 81)',
//                 fontSize: '18px',
//                 }}/> : <DeleteForeverIcon 
//                 onClick = {() => handleDelete(task.id)}
//                 style={{
//                     cursor: 'pointer',
//                     color: 'rgb(248, 34, 81)',
//                     fontSize: '18px',
//                     }}/>
//             }
//         </div>
//         <p className='date'><small>{task.date}</small></p>
//         <p className='time'><small>Created: {task.time}</small></p>
//     </div>
// ))
    
// }
// </div>)
// }