import React, { } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IVeggieProps extends RouteComponentProps<{ id: string }> { }
const Veggie: React.FC<IVeggieProps> = ({match: { params: { id: string} } }) => {
    return (
    <h1>{ {id: string} }</h1>
    )

}
export default Veggie;
