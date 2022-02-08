import { useState, useEffect } from 'react';

import CharacterList from '../components/characters/CharacterList';


function AllCharactersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedcharacters, setLoadedcharacters] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://test-5ebb8-default-rtdb.firebaseio.com/characters.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const characters = [];

        for (const key in data) {
          const Character = {
            id: key,
            ...data[key]
          };

          characters.push(Character);
        }

        setIsLoading(false);
        setLoadedcharacters(characters);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Arena</h1>
      <CharacterList characters={loadedcharacters} />
    </section>
  );
}

export default AllCharactersPage;
