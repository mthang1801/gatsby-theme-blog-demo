import React from 'react'
import {Flex, css} from "theme-ui"
import Navigation from "./navigation"
import SettingConfig from "./setting-config";
const Header = () => {
  return (
    <Flex as="header" sx={{alignItems: "center", justifyContent: "space-between"}}>
      <Navigation css={css({flexGrow : 1 })}/>  
      <SettingConfig />
    </Flex>
  )
}

export default Header
