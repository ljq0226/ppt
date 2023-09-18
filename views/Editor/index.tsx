import Thumbnails from './Thumbnails'
import EditorHeader from './EditorHeader'
import Canvas from './Canvas'
import Toolbar from './Toolbar'

function Editor() {
  return (
    <>
      <EditorHeader />
      <div className="flex flex-1">
        <Thumbnails />
        <Canvas />
        <Toolbar />
      </div>
    </>
  )
}

export default Editor
