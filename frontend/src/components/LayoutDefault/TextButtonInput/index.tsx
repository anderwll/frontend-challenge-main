import React from 'react'
import { Content, Box } from './styles'
import { Link } from "react-router-dom";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { IoSearch } from 'react-icons/io5'

interface TextButtonInputProps {
  onClickLogin: () => void
}

const TextButtonInput: React.FC<TextButtonInputProps> = ({ onClickLogin }) => {
  return (
    <Content>
      <Link to="/home">
        <p>REFRESHER</p> 
      </Link>
      <Box>
        <Input sx={{width: 480, minWidth: 160, mr: 1}} id="input-search" placeholder='Pesquise conteudos, tutoriais, FAQs, e mais...' startAdornment={
            <InputAdornment position="start">
                <IoSearch/>
            </InputAdornment>
          }
        />
        <Button sx={{mr: 2, minWidth: 90}} variant="contained" onClick={onClickLogin}>Entrar</Button>
      </Box>
    </Content>
  )
}

export default TextButtonInput