'use client';

export default function Editor() {

  function handleSubmit() {
    const content = document.getElementById('editor');
    console.log(content)
  }

   function getHilighted() {
    const selected = window.getSelection();
    console.log(selected?.toString())
  }

  return(
    <div className="content col gap">
      <button onClick={getHilighted}>hilighted</button>
      <div id="editor" contentEditable={true}></div>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}