import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewCharacterForm.module.css';

function NewCharacterForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const CharacterData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddCharacter(CharacterData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Character Name</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Character Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Character</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCharacterForm;
