import { useMutation } from '@apollo/client';
import { UpdateRecord } from '../graphql/Mutations';
import { GetRecord } from '../graphql/Queries';

export const useUpdateRecord = () => {
    const [updateRecordById, { loading: loadingUpdate }] = useMutation(UpdateRecord, {
        refetchQueries: [GetRecord]
    })
    return { updateRecordById, loadingUpdate }
}