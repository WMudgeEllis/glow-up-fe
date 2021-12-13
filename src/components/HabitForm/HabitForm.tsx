import "./HabitForm.css"
import { AppContext } from "../../utils/context"
import { QUERY_HABITS } from "../../utils/graph_queries"
import { SUBMIT_HABIT } from "../../utils/graph_mutations"
import { useQuery, useMutation } from "@apollo/client"
import { useContext, useEffect, useState } from "react"
import HabitCard from "../HabitCard/HabitCard"
import "../../assets/icons/habit7-uncheck.png"
import { Habit } from "../../utils/Models"

const HabitForm = () => {
  const { loading, error, data } = useQuery(QUERY_HABITS)
  const { userHabits, checkedHabitIds, todaysHabits, habitSubmitCount, setHabitSubmitCount } = useContext(AppContext)
  const [createHabitEntry] = useMutation(SUBMIT_HABIT)
  const [habitList, setHabitList] = useState([])

  useEffect(() => {
    if (!loading && data) {
      setHabitList(data.fetchHabits)
    }
  }, [loading, error, data])

  // useEffect(() => {
  //   displayHabits()
  // }, [todaysHabits])

  const createHabitEntries = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const entryParams = checkedHabitIds.map(ele => ({ id: ele }))
    if (!entryParams.length) {
      alert("No entry today? Tomorrow is another day!")
      createHabitEntry({ variables: { idArr: entryParams } })
      setHabitSubmitCount(habitSubmitCount + 1)
    } else {
      createHabitEntry({ variables: { idArr: entryParams } })
      alert("Great job")
      setHabitSubmitCount(habitSubmitCount + 1)
    }
  }

  const displayHabits = () => {
    console.log("display habits fires")
    console.log("checked habit ids in display habits", checkedHabitIds)

    return habitList.map((habit: Habit) => (
      <HabitCard
        name={habit.name}
        id={habit.id}
        key={habit.id}
        checkedToday={checkedHabitIds.includes(parseInt(habit.id))}
      />
    ))
  }

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error ? (
        <h2>{`Error! ${error.message}`}</h2>
      ) : (
        <section className="habit-form-container">
          {todaysHabits.length ? (
            <h2>Add more habits</h2>
          ) : (
            <h2 className="habit-form-question">No check in yet. Go complete some!</h2>
          )}
          <form className="habit-form" onSubmit={createHabitEntries}>
            {data && displayHabits()}
            <button className="habit-submit-button" type="submit">
              Submit
            </button>
          </form>
        </section>
      )}
    </>
  )
}

export default HabitForm
