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
          title={Character.title}
          address={Character.address}
          description={Character.description}
        />
      ))}
    </ul>
  );
}

export default CharacterList;
