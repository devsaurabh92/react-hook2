import React,{useRef,useEffect} from 'react'

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    //Focus
    inputRef.current.focus();
  }, [])
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default FocusInput
