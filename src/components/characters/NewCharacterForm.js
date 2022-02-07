import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewCharacterForm.module.css';

function NewCharacterForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const divStyle = {
    display: 'inline-block',
    margin:'2px',
    
  };

  const tdStyle = {
    
    'white-space':'nowrap'
    
  };
  

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
        <td style={tdStyle}>
        <div className={classes.control} style={divStyle}>
          <label htmlFor='race'>Race</label>
          <input type='text' required id='race' ref={addressInputRef} />
        </div>
        <div className={classes.control} style={divStyle}>
          <label htmlFor='alignment'>Alignment</label>
          <input type='text' required id='alignment' ref={addressInputRef} />
        </div>
        <div className={classes.control} style={divStyle}>
          <label htmlFor='class'>Class</label>
          <input type='text' required id='class' ref={addressInputRef} />
        </div>
        </td>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div style={divStyle}className={classes.control}>
        <label for="Dexterity">Dexterity</label>
        <input type="number" id="dexterity" name="dexterity"
       min="1" max="10" ></input>
       
        </div>
        <div style={divStyle}className={classes.control}>
        <label for="Strength">Strength</label>
        <input type="number" id="strength" name="strength"
       min="1" max="10" ></input>
       
        </div>

        <div style={divStyle}className={classes.control}>
        <label for="Charisma">Charisma</label>
        <input type="number" id="charisma" name="charisma"
       min="1" max="10" ></input>
       
        </div>

        <div style={divStyle}className={classes.control}>
        <label for="Intelligence">Intelligence</label>
        <input type="number" id="intelligence" name="intelligence"
       min="1" max="10" ></input>
       
        </div>

        <div style={divStyle}className={classes.control}>
        <label for="Wisdom">Wisdom</label>
        <input type="number" id="wisdom" name="wisdom"
       min="1" max="10" ></input>
       
        </div>

        <div style={divStyle}className={classes.control}>
        <label for="Constitution">Constitution</label>
        <input type="number" id="constitution" name="constitution"
       min="1" max="10" ></input>
       
        </div>

        <div className={classes.actions}>
          <button>Add Character</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCharacterForm;
