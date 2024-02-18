'use client'
import React from "react";
import {Button} from "@nextui-org/react";

interface BasicButtonProps {
    name: string;
    onClickMessage?: string;
    type?: "button" | "submit" | "reset";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
  }

export default function BasicButton({name, onClickMessage, type="button", disabled, size="md"}: BasicButtonProps) {
    return (
        <Button 
        color={'default'}
        onClick={() => {
            if (onClickMessage) alert(onClickMessage)
        }}
        type={type}
        disabled={disabled}
        size={size}
         >
            {name}
        </Button>
    );
  }
