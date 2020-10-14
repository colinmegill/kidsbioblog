import React from "react"
import { Link } from "theme-ui"
import { Flex, Box, Heading } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      flex: `0 0 auto`,
    }}
  >
    <Flex
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Heading as="h2" sx={{ m: 0, width: [180, 200], fontSize: [2] }}>
          <Link
            href="/"
            sx={{
              color: "primary",
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
      </Box>
    </Flex>
  </header>
)

export default Header
