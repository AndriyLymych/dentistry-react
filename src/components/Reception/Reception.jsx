import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import ReceptionForm from "./ReceptionForm/ReceptionForm";
import {getServicesFromDB} from "../../redux/reducers/serviceReducer";
import {getServicesSelector} from "../../redux/selectors/serviceSelector";
import {getIsReceptionLoadingSelector, getIsReceptionSuccess} from "../../redux/selectors/receptionSelectors";
import {receptionPatient} from "../../redux/reducers/receptionReducer";
import {isAuthSelector} from "../../redux/selectors/authSelectors";
import Preloader from "../Preloader/Preloader";

const ReceptionReduxForm = reduxForm({
    form: 'reception'

})(ReceptionForm);


class Reception extends React.Component {
    componentDidMount() {
        this.props.getServicesFromDB();

    }

    render() {
        let {receptionPatient, isReceptionSuccess, isReceptionLoading} = this.props;

        if (isReceptionLoading) {
            return <Preloader/>
        }
        const onSubmit = data => {
            receptionPatient(data)
        };


        return (
            <div>
                {
                    !isReceptionSuccess ?
                        <div>
                            <h1>Запис на прийом:</h1>
                            <ReceptionReduxForm
                                onSubmit={onSubmit}
                                services={this.props.services}
                                isAuth={this.props.isAuth}
                            />
                        </div> :
                        <h1>Запис пройшов успішно</h1>
                }
            </div>
        )


    }
}


const mapStateToProps = state => {
    return {
        services: getServicesSelector(state),
        isReceptionSuccess: getIsReceptionSuccess(state),
        isAuth: isAuthSelector(state),
        isReceptionLoading: getIsReceptionLoadingSelector(state)
    }
};


export default connect(mapStateToProps, {getServicesFromDB, receptionPatient})(Reception)