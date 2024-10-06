import { FlatList } from 'react-native'
import { useContext } from 'react'

// Components
import CharacterCard from '@components/CharacterCard'

// Context
import { AppContext } from '@context/Context'

export default function Carrousel ({ data, cardHandler }) {
  const { lang } = useContext(AppContext)

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CharacterCard name={item.name} image={item.images.select} description={item.description[`${lang}`]} cardHandler={cardHandler} />}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  )
}
