import React from 'react'

export default function MySelect(options, defaultValue, value, onChange) {
  return (
                    <select className='sort__select'>
                        <options value=''>{defaultValue}</options>
                        {options.map(option => 
                            <option value={option.value}>
                                
                            </option>)}
                    </select>
  )
}
