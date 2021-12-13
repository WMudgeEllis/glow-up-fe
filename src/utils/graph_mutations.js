import { gql } from "@apollo/client"

export const SUBMIT_MOOD = gql`
  mutation CreateMood($mood: Int!, $description: String) {
    createMood(input: { params: { mood: $mood, description: $description } }) {
      user {
        id
      }
    }
  }
`
//mfer this one's input type got me ;/ aaahhhhhhh!
export const SUBMIT_HABIT = gql`
  mutation addHabitEntries($idArr: [HabitEntryInput!]!) {
    createHabitEntry(input: { params: $idArr }) {
      user {
        habitEntries {
          habitId
          status
          date
        }
      }
    }
  }
`

export const SUBMIT_JOURNAL_ENTRY = gql`
  mutation createJournalEntry($content: String!) {
    createJournalEntry(input: { params: { content: $content } }) {
      user {
        journalEntries {
          id
          content
          date
        }
      }
    }
  }
`
