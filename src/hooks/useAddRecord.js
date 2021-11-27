import { useMutation } from '@apollo/client';
import { AddRecord } from '../graphql/Mutations';
import { GetRecord } from '../graphql/Queries';

export const useAddRecord = () =>{
    const [addRecord, { loading }] = useMutation(AddRecord, {
        refetchQueries: [GetRecord]
    })

    return{
        addRecord, loading
    }
}