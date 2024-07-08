import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



export const Task = () => {
    return <div className="task">
            <div className='item-top'>
            <h4></h4>
            <p>Created At: 24/06/2024</p>
            <div className='task-action'>
            <DeleteForeverIcon />
            <CheckCircleOutlineIcon />
            </div>
            </div>
            <div className="description-date">
            <p>Lorem ipsum dolor sit amet.</p>
            <p className='due'>Due Date: 25/06/2024</p>
            </div>
        </div>
}