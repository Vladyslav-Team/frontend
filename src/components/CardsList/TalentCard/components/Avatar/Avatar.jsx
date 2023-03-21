import classes from './Avatar.module.css'

function Avatar({ avatar }) {
  return (
    <div className={classes.wrapper}>
      <img src={avatar} alt='avatar' className={classes.avatar} />
    </div>
  )
}

export { Avatar }
