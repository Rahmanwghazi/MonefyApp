import { gql } from '@apollo/client'

export const AddRecord = gql`
mutation MyMutation($amount: Int!, $category: String!, $date: date!, $notes: String!, $type: String!) {
    insert_records(objects: {amount: $amount, category: $category, date: $date, notes: $notes, type: $type}) {
      affected_rows
    }
  }
`

export const DeleteRecord = gql`
mutation MyMutation($id: Int) {
  delete_records(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
`

export const UpdateRecord = gql`
mutation MyMutation($amount: Int, $category: String, $date: date, $notes: String, $type: String, $id: Int) {
  update_records(where: {id: {_eq: $id}}, _set: {amount: $amount, category: $category, date: $date, notes: $notes, type: $type}) {
    affected_rows
  }
}
`

export const addAverageIncome = gql`
mutation MyMutation($averageIncome: Int) {
  insert_recommendation(objects: {averageIncome: $averageIncome}) {
    affected_rows
  }
}
`
export const UpdateAverageIncome = gql`
mutation MyMutation($averageIncome: Int, $id: Int) {
  update_recommendation(where: {id: {_eq: $id}}, _set: {averageIncome: $averageIncome}) {
    affected_rows
  }
}
`



  