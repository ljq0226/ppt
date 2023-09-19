import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { Icon } from '@/assets/icons'

function FileMenu() {
  return (
    <>
      <MenubarMenu value='file'>
        <MenubarTrigger className='flex space-x-1'>
          <Icon icon={'iconoir:folder'} height={16} />
          <span data-value={'file'}>{'文件'}</span>
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

export default FileMenu
