import React from "react";
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import {getUsers} from "../../redux/reducers/adminReducer";
import {getActiveUsers, getIsCreateByAdmin} from "../../redux/selectors/adminSelectors";
import BlockUserForm from "./BlockUserForm/BlockUserForm";

const BlockUserReduxForm = reduxForm({
    form: 'block-user'
})(BlockUserForm);


class BlockUserContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }

    onSubmit = data => {
        console.log(data);
    };

    render() {
        return <BlockUserReduxForm onSubmit={this.onSubmit} activeUsers={this.props.activeUsers} getUsers={this.props.getUsers}/>;
    }
}

const mapStateToProps = state => {
    return {
        activeUsers: getActiveUsers(state),
        isCreateByAdmin: getIsCreateByAdmin(state)
    }
};

export default connect(mapStateToProps, {getUsers})(BlockUserContainer)