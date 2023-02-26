import React from 'react'

import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import {Videos, ChannelCard} from "./"
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  

  const {id} = useParams()
  
  console.log(channelDetail)
  console.log(videos)

  useEffect(() => {
    //channel
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))
    //get videos for channet
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))

  }, [id])

  return (
  <Box
  minHeight = "95vh"
  >
    <Box>
      <div
       style = {{
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,96,121,1) 40%, rgba(0,202,255,1) 100%", 
        zIndex: 10,
        height: '300px'
      }}      
      />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px"></ChannelCard>
    </Box>
    <Box display='flex' p="2"  >
        <Box sx ={{mr: {sm: '100px'}}}/>
        <Videos videos={videos}></Videos>
    </Box>
  </Box>
  
  )

  }

export default ChannelDetail