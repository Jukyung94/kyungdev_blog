'use client';

import React from 'react';
import './editor.css';

export default function Editor() {
    // const content = document.getElementById('editor');
      // content?.addEventListener('keydown', (e) => { 
      //   if (e.key === 'Enter') {
      //     e.preventDefault();
      //     console.log(document.getSelection())
      //     const focused = document.getSelection();
      //     const currNode = focused?.anchorNode;
      //       if(currNode) {
      //         console.log(currNode.parentElement)
      //         currNode.textContent += '\n';
      //         const parentElement = currNode.parentElement;
      //         const newNode = document.createElement('p');
      //         newNode.id = "lastLine"
      //         const a = document?.querySelector('#lastLine');
      //         console.log("asdfs", a);
      //         if(a) a.removeAttribute('id')
      //         newNode.appendChild(document.createTextNode("/"))
      //         parentElement?.append(document.createElement('br'));
      //         parentElement?.appendChild(newNode);
      //       }
      //     }
      // });
      // content?.addEventListener('keyup',(e) => {
      //   if(e.key === 'Enter') {
      //     const currLine = window.getSelection()?.getRangeAt(0);
      //     if(currLine) {
      //       const container = currLine.commonAncestorContainer;
      //       container.className = ''
      //       // ragne.selectNodeContents(content);
      //       // currLine.removeAllRanges();
      //       // currLine.addRange(ragne);
      //     }
      //   }
      // })

  function handleSubmit() {
    const content = document.getElementById('editor');
    const children = content?.children;
    console.log(content)
    console.log(children)
    // console.log(children[3].children[0].className, children[3].children[0].innerHTML)
  }

   function getHilighted() {
    const selected = window.getSelection();
    // console.log(selected?.toString())
    if(selected) {
      
      const range = selected.getRangeAt(0);
      let rangeContainer = range.commonAncestorContainer;
      console.log(rangeContainer.childNodes)
      const parente = rangeContainer.parentElement;
      parente?.classList.add('bold')
      let same = false;
      const startContainer = range.startContainer;
      const endContainer = range.endContainer;
      if(rangeContainer === startContainer) {
        same = true;
        if(range.startContainer.parentElement) rangeContainer = range.startContainer.parentElement;
      }
      let start = -1;
      let end = -1;
      const offset = 0;
      console.log(rangeContainer, startContainer, endContainer)
      const list = rangeContainer.childNodes
      for(let i = 0; i < list.length; i++) {
        const current = list[i];
        console.log(current)
        if(current.textContent === range.startContainer.textContent) {
          console.log("start", range)
          start = offset + range.startOffset;
          if(same) {
            end = offset + range.endOffset;
            break;
          }
        } else if(current.textContent === range.endContainer.textContent) {
          console.log('end', range)
          end = offset + range.endOffset;
          break;
        }
        // if(current.nodeName === '#text') {
        //   offset += current.length;
        // }
      }
      console.log(start, end, offset);
      // const range = selected.getRangeAt(0);
      // const span = document.createElement('span');
      // span.className = 'bold'
      // range.surroundContents(span);
      // selected.removeAllRanges();
    }
    // document.execCommand('bold');
  }


  function execCommandTest(style: string) {
    document.execCommand(style)
  }

  function handleStyle(style: string) {
    //check is selected
    const selected = window.getSelection();
    if(selected) {
      console.log(selected.anchorOffset); //check offset
      const range = selected.getRangeAt(0);
      // console.log(range);
      if(range.startOffset === range.endOffset) return;
      else {
        if(selected.anchorNode) {
          console.log(selected.anchorNode);
          console.log(selected)
          range.setStart(selected?.anchorNode, range.startOffset)
          range.setEnd(selected?.anchorNode, range.endOffset)
          console.log(range.endContainer.parentElement)
          const span = document.createElement('span');
          span.classList.add(style);
          range.surroundContents(span);
        }
        // for(let i = range.startOffset; i < range.endOffset; i++) {
        //   console.log(selected.anchorNode?.textContent[i])
        // }
      }
      return;
      const rangeContainer = range.commonAncestorContainer;
      if(rangeContainer.nodeName === '#text' &&   rangeContainer.parentElement?.classList.contains('editor')) {
        const div = document.createElement('div');
        div.classList.add(style);
        range.surroundContents(div);
      } else {
        console.log(rangeContainer.childNodes)
        const parente = rangeContainer.parentElement;
        parente?.classList.add(style);
      }

    }
  }

  return(
    <div className='page'>
      <div className='container col gap'>
        <div className='row gap'>
          <button onClick={() => handleStyle('bold')}>
            <span>bold</span>
          </button>
          <button onClick={() => handleStyle('italic')}>
            <span>italic</span>
          </button>
          <button onClick={getHilighted}>
            <span>italic</span>
          </button>
        </div>
        <div id="editor" className='editor' contentEditable={true}>
        </div>
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
    </div>
  )
}