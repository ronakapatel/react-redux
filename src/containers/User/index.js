import User from './User';
import { connect } from "react-redux";

import userActions from "../../reducers/user";
import { bindActionCreators } from "redux";

const mapStateToProps = state => {
    const {
        users:{usersList}
        } = state;
    return { users:usersList };
};

const mapDispatchToProps = dispatch => {
    const allActions = {
        ...userActions
    };
    return {
        actions: bindActionCreators(allActions, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);