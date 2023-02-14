/* FOR THE HTML DOM REFERENCES */

import { useRef, useEffect } from 'react';
export const DomRef = () => {
  //Initialiy the variables are as follows
  /* 
  * useRer(null) // originaly so give an assertion on the last part which null!
  * We define the DOM references
  * */
  const inputRef = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    inputRef.current?.focus()
    // ?. is like an optional whether it is null or not
    // the original input in current.focus();
  }, [])
  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  )
}