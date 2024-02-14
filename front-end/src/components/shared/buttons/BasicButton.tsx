'use client'
import {Button} from "@nextui-org/react";

interface BasicButtonProps {
    name: string;
    onClickMessage: string;
  }

export default function BasicButton({name, onClickMessage}: BasicButtonProps) {
    return (
        <Button 
        color={'default'}
        onClick={() => {
            alert(onClickMessage)
        }}
         >
            {name}
        </Button>
    );
  }
