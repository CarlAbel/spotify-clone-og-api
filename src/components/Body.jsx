import axios from "axios"
import React, { useEffect } from "react"
import styled from "styled-components"
import { AiFillClockCircle } from "react-icons/ai"
import { useStateProvider } from "../utils/StateProvider"

export default function Body() {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider()
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`
      )
    }
  }, [token, dispatch])

  return <Container>Body</Container>
}
const Container = styled.div``
