import React from 'react'
import { Content, Box } from './styles'
import { Link } from "react-router-dom";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5'

const TextButtonInput = () => {
  return (
    <Content>
      <Link to="/home">
        <p>REFRESHER</p> 
      </Link>
      <Box>
        <Input sx={{width: 420, minWidth: 200, marginRight: 2}} id="input-with-icon-adornment" placeholder='Pesquise conteudos, tutoriais, FAQs, e mais...' startAdornment={
            <InputAdornment position="start">
                <IoSearch/>
            </InputAdornment>
          }
        />
        <Button sx={{marginRight: 2, minWidth: 80}} variant="contained">Entrar</Button>
      </Box>
    </Content>
  )
}

export default TextButtonInput