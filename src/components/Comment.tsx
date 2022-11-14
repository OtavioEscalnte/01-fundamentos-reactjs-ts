import { useState } from 'react'

import {Trash, ThumbsUp} from 'phosphor-react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'

interface CommmentProps {
  content: string;
  onDeleteComment:(comment:string) => void
}

export function Comment ({content, onDeleteComment}:CommmentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment () {
    setLikeCount((state)=> {
      return state + 1 
    })
  }

  return ( 
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/OtavioEscalnte.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                  <strong>Otávio Escalante</strong>
                  <time title='11 de Maio ás 08:13' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                </div>

                <button onClick={handleDeleteComment} title='Deletar comentário'>
                    <Trash size={24}/>
                </button>
            </header>

            <p>{content}</p>
        </div>

        <footer>
           <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
           </button>
        </footer>
      </div>

    </div>
  )
}