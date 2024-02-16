'use client'
import React from "react";
import {Checkbox} from "@nextui-org/react";

interface CheckboxBasicProps {
    name: string;
    size?: "sm" | "md" | "lg" ;
}

export default function CheckboxBasic({ name, size = 'sm' }: CheckboxBasicProps) {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div className="text-xs font-light">
      <Checkbox 
      isSelected={isSelected} 
      size={size || 'sm'}
      onValueChange={setIsSelected}>
        {name}
      </Checkbox>
    </div>
  );
}