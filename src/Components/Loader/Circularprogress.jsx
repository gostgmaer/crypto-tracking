import { Backdrop, Box, CircularProgress } from '@mui/material'
import React, { useState } from 'react'

const Circularprogress = () => {
    const [loader, setLoader] = useState(true);
  return (
    <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  )
}

export default Circularprogress