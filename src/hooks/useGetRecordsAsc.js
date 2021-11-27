import { useSubscription } from '@apollo/client';
import { GetRecordSubAsc } from '../graphql/Subscriptions';

export const useGetRecordsAsc = () => {
    const { loading: loadingGetRecordAsc, data: dataAsc } = useSubscription(GetRecordSubAsc)
    return { dataAsc, loadingGetRecordAsc }
}