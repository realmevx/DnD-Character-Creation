import { useHistory } from 'react-router-dom';

import NewCharacterForm from '../components/characters/NewCharacterForm';

function NewCharacterPage() {
  const history = useHistory();

  function addCharacterHandler(CharacterData) {
    
    fetch(
      'https://test-5ebb8-default-rtdb.firebaseio.com/characters.json',
      {
        method: 'POST',
        body: JSON.stringify(CharacterData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Character</h1>
      <NewCharacterForm onAddCharacter={addCharacterHandler} />
    </section>
  );
}

export default NewCharacterPage;
