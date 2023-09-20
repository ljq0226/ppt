import { Button } from '@/components/ui/button'
import { Icon } from '@/assets/icons'

function Thumbnails() {
  return (
    <div className="w-[160px] flex flex-col ">
      <div className='flex-center h-10 border-b border-border'>
        <Button className='flex-center flex-1'>
          <Icon icon='heroicons:plus' height={20} />
          <span>新增幻灯片</span>
        </Button>
        <div className='w-[30px] h-full border-x border-border flex-center'>
          <Icon icon={'mingcute:down-fill'}></Icon>
        </div>
      </div>

    </div>
  )
}

export default Thumbnails
