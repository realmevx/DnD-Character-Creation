import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './CharacterItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function CharacterItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        name: props.name,
        description: props.description,
        image: props.image,
        race: props.race,
        alignment: props.alignment,
        class: props.class,
        dexterity: props.dexterity,
        strength: props.strength,
        wisdom: props.wisdom,
        constituion: props.constituion,
        intelligence: props.intelligence,
        charisma: props.charisma,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <h4>{props.alignment + " " + props.race + " " + props.class}</h4>
          <p>{props.description}</p>
          <p>{"Dexterity: " + props.dexterity+ " Strength: " +props.strength+ " Wisdom: " +props.wisdom+ " Intelligence: " +props.intelligence+ " Charisma: " +props.charisma}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default CharacterItem;
