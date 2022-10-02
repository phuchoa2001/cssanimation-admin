import { useSelector } from 'react-redux';

import AddOrder from './AddOrder';
import AddUsers from './AddUsers';
import Delete from './Delete';
function Modals() {
    const StateModal = useSelector(state => state.Modal)
    const { type } = StateModal;
    switch (type) {
        case "Add order":
        case "Edit order":
            return <AddOrder />;
        case "Add users":
        case "Edit users":
            return <AddUsers />;
        case "Delete order":
        case "Delete users":
            return <Delete />
        default:
            return <></>;
    }
};

export default Modals;