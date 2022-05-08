import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {

    return(
        /*
        Position:
        Static (standard): The element is positioned according to the normal flow of the document.
        Relative: The element is positioned according to its original position in the document.
        Absolute: The element is positioned relative to its closest positioned ancestor, if any; otherwise, 
        it is placed relative to the document.
        Fixed: The element ramains in the same position regardless of scrolling.
        Sticky: The element becomes fixed when it crosses a specific threshold when scrolling. 

        Popover makes our application web accessible
         */
        <Popover className='absolute bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col items-end'>
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
           
            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6'/>

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    Feedback
                </span>
            </Popover.Button>            
        </Popover>
    )
}