import style from './SubmitButton.module.css'

function SubmitButton({ text }) {
  return (
    <div className={style.form_control}>
      <button className={style.btn}>{text}</button>
    </div>

  )
}

export default SubmitButton
