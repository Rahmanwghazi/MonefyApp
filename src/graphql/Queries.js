import { gql } from '@apollo/client'

export const GetRecord = gql`
query MyQuery {
    records(order_by: {id: desc}) {
      id
      amount
      date
      category
      notes
      type
    }
  }
`



  