import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Icon } from '@/assets/icons'

function HelpMenu() {
  return (
    <>
      <MenubarMenu value=''>
        <MenubarTrigger className='flex space-x-1'>
          <Icon icon={'mdi:help-box-outline'} height={16} />
          <span data-value={'help'}>{'帮助'}</span>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </>
  )
}

export default HelpMenu
