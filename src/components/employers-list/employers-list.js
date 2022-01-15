import './employers-list.css';
import EmployersListItem from '../employers-list-item/employers-list-item';

const EmployersList = ({data}) => {

    const elements = data.map(it => {
        const {id, ...itProps} = it;
        return (
            <EmployersListItem key={id} {...itProps} />
        )
    })

    return (<ul className='app-list list-group'>
        {elements}
    </ul>)
}

export default EmployersList;