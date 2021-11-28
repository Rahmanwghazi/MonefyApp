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
query MyQuery {
  record_aggregate(where: {type: {_eq: "income"}}) {
    aggregate {
      sum {
        amount
      }
    }
  }
}
`

export const GetSumExpenseRecord = gql`
query MyQuery {
  record_aggregate(where: {type: {_eq: "expense"}}) {
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
  recommendation {
    id
    averageIncome
  }
}
`



  