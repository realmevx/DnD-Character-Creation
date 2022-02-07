import CharacterItem from './CharacterItem';
import classes from './CharacterList.module.css';

function CharacterList(props) {
  return (
    <ul className={classes.list}>
      {props.characters.map((Character) => (
        <CharacterItem
          key={Character.id}
          id={Character.id}
          image={Character.image}
          name={Character.name}
          race={Character.race}
          alignment={Character.alignment}
          class={Character.class}
          dexterity={Character.dexterity}
          strength={Character.strength}
          wisdom={Character.wisdom}
          intelligence={Character.intelligence}
          charisma={Character.charisma}
          constitution={Character.constitution}
          description={Character.description}
        />
      ))}
    </ul>
  );
}

export default CharacterList;
