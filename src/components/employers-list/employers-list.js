import './employers-list.css';
import EmployersListItem from '../employers-list-item/employers-list-item';

const EmployersList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(it => {
        const {id, ...itProps} = it;
        return (
            <EmployersListItem 
                key={id} 
                {...itProps}
                onDelete={() => onDelete(id)} 
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (<ul className='app-list list-group'>
        {elements}
    </ul>)
}

export default EmployersList;