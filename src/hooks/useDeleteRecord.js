import { useMutation } from '@apollo/client';
import { DeleteRecord } from '../graphql/Mutations';
import { GetRecord } from "../graphql/Queries"

export const useDeleteRecord = () =>{
    const [deleteRecordById, { loading: loadingDelete }] = useMutation(DeleteRecord, {
        refetchQueries: [GetRecord]
    })

    return{
        deleteRecordById, loadingDelete
    }
}