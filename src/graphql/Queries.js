import { gql } from '@apollo/client'

export const GetRecord = gql`
query MyQuery {
    record(order_by: {id: desc}) {
      id
      amount
      date
      category
      notes
      type
    }
  }
`

export const GetSumIncomeRecord = gql`
query MyQuery($userId: String) {
  record_aggregate(where:{_and: {}, user_id: {_eq: $userId}, type: {_eq: "income"}}) {
    aggregate {
      sum {
        amount
      }
    }
  }
}
`

export const GetSumExpenseRecord = gql`
query MyQuery($userId: String) {
  record_aggregate(where: {_and: {}, user_id: {_eq: $userId}, type: {_eq: "expense"}}) {
    aggregate {
      sum {
        amount
      }
    }
  }
}
`

export const GetAverageIncome = gql`
query MyQuery {
  user {
    name
    avg_income
  }
}
`

export const GetUsername = gql`
query MyQuery {
  user {
    name
  }
}
`