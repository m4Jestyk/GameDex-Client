import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { Flex } from '@chakra-ui/react'

const Category = () => {
  return (
    <>
      <Flex mb={-50} wrap="wrap" justifyContent="center" gap={1}>
        <CategoryCard name="F R A N C H I S E" image = "https://www.denofgeek.com/wp-content/uploads/2024/05/MixCollage-24-May-2024-04-49-PM-1614.jpg?resize=768%2C432" navigateTo="franchise"  flex="1 1 calc(50% - 8px)" />
        <CategoryCard name="D E V E L O P E R" image = "https://i.ytimg.com/vi/rTwiGkReP0g/maxresdefault.jpg" navigateTo="developer" flex="1 1 calc(50% - 8px)" />
      </Flex>
      <Flex wrap="wrap" justifyContent="center" gap={1}>
        <CategoryCard name="G E N R E" image = "https://www.businessofapps.com/wp-content/uploads/2020/07/3_game_genre_gamerefinery_cover.png" navigateTo="genre" flex="1 1 calc(50% - 8px)" />
        <CategoryCard name="R E T R O" image = "https://images.smartdnsproxy.com/userdocs/news/Retro_gaming.jpg" navigateTo="retro" flex="1 1 calc(50% - 8px)" />
      </Flex>
    </>
  )
}

export default Category
