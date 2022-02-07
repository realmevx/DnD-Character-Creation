import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewCharacterForm.module.css';

function NewCharacterForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const raceInputRef = useRef();
  const descriptionInputRef = useRef();
  const alignmentInputRef = useRef();
  const classInputRef = useRef();
  const constitutionInputRef = useRef();
  const strengthInputRef = useRef();
  const wisdomInputRef = useRef();
  const intelligenceInputRef = useRef();
  const dexterityInputRef = useRef();
  const charismaInputRef = useRef();

  const divStyle = {
    display: 'inline-block',
    margin:'2px',
    
  };

  const tdStyle = {
    
    'white-space':'nowrap'
    
  };
  

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredRace = raceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredClass = classInputRef.current.value;
    const enteredAlignment = alignmentInputRef.current.value;
    const enteredDexterity = dexterityInputRef.current.value;
    const enteredStrength = strengthInputRef.current.value;
    const enteredWisdom = wisdomInputRef.current.value;
    const enteredIntelligence = intelligenceInputRef.current.value;
    const enteredCharisma = charismaInputRef.current.value;
    const enteredConstitution = constitutionInputRef.current.value;

    const CharacterData = {
      name: enteredName,
      image: enteredImage,
      race: enteredRace,
      description: enteredDescription,
      class: enteredClass,
      alignment: enteredAlignment,
      dexterity: enteredDexterity,
      strength: enteredStrength,
      wisdom: enteredWisdom,
      intelligence: enteredIntelligence,
      charisma: enteredCharisma,
      constitution: enteredConstitution
    };

    props.onAddCharacter(CharacterData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Character Name</label>
          <input type='text' required id='title' ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Character Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <td style={tdStyle}>
        <div className={classes.control} style={divStyle}>
          <label htmlFor='race'>Race</label>
          <input type='text' required id='race' ref={raceInputRef} />
        </div>
        <div className={classes.control} style={divStyle}>
          <label htmlFor='alignment'>Alignment</label>
          <input type='text' required id='alignment' ref={alignmentInputRef} />
        </div>
        <div className={classes.control} style={divStyle}>
          <label htmlFor='class'>Class</label>
          <input type='text' required id='class' ref={classInputRef} />
        </div>
        </td>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            minLength="50"
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div style={divStyle}className={classes.control}>
        <label for="Dexterity">Dexterity</label>
        <input type="number" id="dexterity" name="dexterity"
       min="1" max="10" ref={dexterityInputRef} ></input>
       
        </div>
        <div style={divStyle}className={classes.control}>
        <label for="Strength">Strength</label>
        <input type="number" id="strength" name="strength"
       min="1" max="10" ref={strengthInputRef}></input>
       
        </div>

        <div style={divStyle}className={classes.control}>
        <label for="Charisma">Charisma</label>
        <input type="number" id="charisma" name="charisma"
       min="1" max="10" ref={charismaInputRef}></input>
       
        </div>

        <div style={divStyle}className={classes.control}>
        <label for="Intelligence">Intelligence</label>
        <input type="number" id="intelligence" name="intelligence"
       min="1" max="10" ref={intelligenceInputRef}></input>
       
        </div>

        <div style={divStyle}className={classes.control}>
        <label for="Wisdom">Wisdom</label>
        <input type="number" id="wisdom" name="wisdom"
       min="1" max="10" ref={wisdomInputRef}></input>
       
        </div>

        <div style={divStyle}className={classes.control}>
        <label for="Constitution">Constitution</label>
        <input type="number" id="constitution" name="constitution"
       min="1" max="10" ref={constitutionInputRef}></input>
       
        </div>

        <div className={classes.actions}>
          <button>Add Character</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCharacterForm;
