import React from 'react';
import { IconButton } from '@mui/material';

// Styles
import './ButtonIconText.scss';

// Interfaz para definir las propiedades del componente
interface SocialButtonProps {
  backgroundColor?: string;
  text?: string;
  icon?: JSX.Element; // Icono en formato JSX.Element
}


const ButtonIconText: React.FC<SocialButtonProps> = (props) => {
  const { text, icon } = props;

  return (
    <IconButton
      size="large"
      className={text}
    >
      {icon}
      {text}
    </IconButton>
  );
};

export default ButtonIconText;