import React from 'react'
import {Link} from "gatsby";
import {Styled, Flex, NavLink} from "theme-ui"
import styled from "styled-components"
const navigation = () => {
  return (
    <Flex as="nav">
      <NavLink href="/" p={2}>Home</NavLink>
      <NavLink href="/blogs" p={2}>Blogs</NavLink>
      <NavLink href="/about" p={2}>About</NavLink>
      <NavLink href="/contact" p={2}>Contact</NavLink>
    </Flex>
  )
}

export default navigation
