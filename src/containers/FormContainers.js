import { connect } from 'react-redux';

import { addTask, addNote, addText, toggleForm } from '../actions'

import Form from '../components/Form/Form';


const getType = (type) => {
  return type;
};

const getText = (text) => {
  return text;
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    type: getType(state.form.type),
    text: getText(state.form.text)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (text) => {
      dispatch(addTask(text))
    },
    addNote: (text) => {
      dispatch(addNote(text))
    },
    addText: (text) => {
      dispatch(addText(text))
    },
    toggleForm: (type) => {
      dispatch(toggleForm(type))
    }
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);


export default FormContainer;