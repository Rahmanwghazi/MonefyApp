import { gql } from '@apollo/client'

export const GetRecordSubDesc = gql`
subscription MySubscription($id: order_by = desc) {
    record(order_by: {id: $id}) {
      id
      amount
      date
      category
      notes
      type
    }
  }
`

export const GetRecordSubAsc = gql`
subscription MySubscription($id: order_by = asc) {
    record(order_by: {id: $id}) {
      id
      amount
      date
      category
      notes
      type
    }
  }  
`
  