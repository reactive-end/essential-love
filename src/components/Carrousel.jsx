import { FlatList, Dimensions } from 'react-native'
import { useContext } from 'react'

// Components
import CharacterCard from '@components/CharacterCard'

// Context
import { AppContext } from '@context/Context'

// Dimensions
const { width } = Dimensions.get('screen')

export default function Carrousel ({ data, cardHandler, backgroundHandler }) {
  const { lang } = useContext(AppContext)

  const handleScroll = (event) => {
    const { x } = event.nativeEvent.contentOffset
    const position = Math.floor(x / (width * 0.9))

    const image = data[position].images.select
    backgroundHandler(image)
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CharacterCard name={item.name} image={item.images.select} description={item.description[`${lang}`]} cardHandler={cardHandler} />}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
    />
  )
}
