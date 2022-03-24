import React , {useRef} from 'react';
import { useForm } from 'react-hook-form';
import {Modal,Button} from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
  const { register, handleSubmit, formState: { errors }  } = useForm();
    const formref = useRef();
    const submit = submission =>{ 
      alert(JSON.stringify(submission))
  formref.current.reset()
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="mod"
    >
       
    
        <form  ref={formref} onSubmit={handleSubmit(submit)} id="for">
            <div>
            <div>
            <h4 id="h1">SUBMIT COMMENT</h4>
            </div>

            <hr/>
             <div>
                    <label>RATING:</label>
                </div> 
               
                <select id="dropdown" name="rating"
                  type="number" {...register('rating', { required: { value: true, message: 'select the rating '} })}>
            <option disabled value></option>
            <option ></option>
            <option >5 stars</option>
            <option >4 stars </option>
            <option >3 stars </option>
            <option >2 stars </option>
            <option >1 star </option>
        </select>
                {errors.rating && (<span>{errors.rating.message}</span>)}
                <div>
                    <label>YOUR NAME:</label>
                </div>
                <input type="text" {...register('firstName', { required: { value: true, message: 'Enter a name'},minLength: { value: 2, message: 'Length should be greater than 2'},maxLength: { value: 15, message: 'Length should be lesser than 15'} })}/>
                {errors.firstName && (<span>{errors.firstName.message}</span>)}
             <div>
                    <label>COMMENT:</label>
                </div>
                 <textarea type="text" {...register('comment', { required: { value: true, message: 'Enter a comment'} })}/>
                {errors.comment && (<span>{errors.comment.message}</span>)}
            </div>
             
            <button id="but2" type="submit">Submit</button>
            <br/>
            <br/>
        <Button id="but2" onClick={props.onHide}>Close</Button>

            </form>
     
    </Modal>
  );
}

function Form() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button id="but" onClick={() => setModalShow(true)} >
        give your feedback comment
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default Form;