import { Avatar } from './components/Avatar'
import { VisitButton } from './components/VisitButton'
import classes from './TalentCard.module.css'

function TalentCard() {
  return (
    <div className={classes.card}>
      <div className={classes.background}>
        <Avatar avatar={''} />
      </div>
      <div className={classes.content}>
        <div>Levy Rozman</div>
        <div className={classes.city}>Gotham</div>
        <div className={classes.proof}></div>
      </div>
      <VisitButton />
    </div>
  )
}

export { TalentCard }
