import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react"

// 1. Create a component that consumes the `useRadio` hook
const RadioCard=(props)=> {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box  as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          minW="60px"
          fontSize="sm"
          cursor='pointer'
          borderWidth='2px'
          borderRadius='full'
          boxShadow='md'
          _checked={{
            bg: 'rgb(236, 61, 37)',
            color: 'white',
            borderColor: 'teal.600',
          }}
          _focus={{
            boxShadow: 'inline',
          }}
        //   px={6}
          py={1}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  
  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export const StandardSizes=()=> {
    const options = ['S', 'M', 'L', 'XL', 'XXL']
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      defaultValue: 'react',
      onChange: console.log,
    })
  
    const group = getRootProps()
  
    return (
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    )
  }
  
 