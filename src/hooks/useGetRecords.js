import { useQuery } from '@apollo/client';
import { GetRecord } from '../graphql/Queries';

export const useGetRecords = () => {
    const { loading: loadingGetRecord, data } = useQuery(GetRecord)
    return { data, loadingGetRecord }
}