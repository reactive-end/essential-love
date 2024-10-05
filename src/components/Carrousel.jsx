import { FlatList } from 'react-native'

// Components
import CharacterCard from '@components/CharacterCard'

export default function Carrousel ({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CharacterCard name={item.name} image={item.images.select} description={item.description.es} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}
