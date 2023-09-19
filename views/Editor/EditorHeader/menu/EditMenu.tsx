import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Icon } from '@/assets/icons'

function EditMenu() {
  return (
    <>
      <MenubarMenu value=''>
        <MenubarTrigger className='flex space-x-1'>
          <Icon icon={'iconamoon:edit-light'} height={16} />
          <span data-value={'edit'}>{'编辑'}</span>
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

export default EditMenu
