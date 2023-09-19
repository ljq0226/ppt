import EditMenu from './menu/EditMenu'
import FileMenu from './menu/FileMenu'
import HelpMenu from './menu/HelpMenu'
import PlayMenu from './menu/PlayMenu'
import {
  Menubar,
} from '@/components/ui/menubar'

import {
  MyTooltip,
} from '@/components/ui/tooltip'

import { Icon } from '@/assets/icons'

function EditorHeader() {
  return (
    <div className='flex h-12 space-x-4 pr-4 border-b border-border'>
      <Menubar>
        <FileMenu />
        <EditMenu />
        <PlayMenu />
        <HelpMenu />
      </Menubar>
      <div className="flex-1"></div>
      <div className='flex-center'>
        <MyTooltip text='导出'>
          <Icon icon='ant-design:export-outlined' height={18} />
        </MyTooltip>
      </div>
      <div className='flex-center'>
        <MyTooltip text='演示'>
          <Icon icon='majesticons:presentation-play-line' height={18} />
        </MyTooltip>
      </div>
      <div className='flex-center'>
        <MyTooltip text='GitHub'>
          <Icon icon='icon-park-outline:github' height={18} />
        </MyTooltip>
      </div>
    </div>
  )
}

export default EditorHeader
