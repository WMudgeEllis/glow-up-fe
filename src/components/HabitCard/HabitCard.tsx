import "./HabitCard.css"
import { useState, useContext, useEffect } from "react"
import { AppContext } from "../../utils/context"

interface HabitCardProps {
  name: string
  id: string
  checkedToday: boolean
}

export default function HabitCard(props: HabitCardProps) {
  const { checkedHabitIds, setCheckedHabitIds } = useContext(AppContext)
  const [checked, setChecked] = useState(props.checkedToday)
  const [style] = useState({
    false: {
      backgroundColor: "#E7E7E7",
      color: "black",
    },
    true: {
      backgroundColor: "#86AE5B",
      color: "black",
    },
  })

  useEffect(() => {
    setChecked(props.checkedToday)
  }, [props.checkedToday])

  const toggleCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    switch (checked) {
      case false:
        setChecked(true)
        setCheckedHabitIds([...checkedHabitIds, parseInt(e.currentTarget.id)])
        break

      case true:
        setChecked(false)
        let filtered = checkedHabitIds.filter(ele => ele !== parseInt(e.currentTarget.id))
        setCheckedHabitIds(filtered)
        break
      default:
        break
    }
  }

  return (
    <button
      className="habit-card-button"
      onClick={toggleCheck}
      id={props.id}
      style={checked ? style.true : style.false}
    >
      {props.name}
    </button>
  )
}
