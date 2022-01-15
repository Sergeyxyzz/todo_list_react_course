import './employers-list.css';
import EmployersListItem from '../employers-list-item/employers-list-item';

const EmployersList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elements = data.map(it => {
        const {id, ...itProps} = it;
        return (
            <EmployersListItem 
                key={id} 
                {...itProps}
                onDelete={() => onDelete(id)} 
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}/>
        )
    })

    return (<ul className='app-list list-group'>
        {elements}
    </ul>)
}

export default EmployersList;