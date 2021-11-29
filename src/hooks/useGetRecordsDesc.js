import { useSubscription } from '@apollo/client';
import { GetRecordSubDesc } from '../graphql/Subscriptions';

export const useGetRecordsDesc = () => {
    const { loading: loadingGetRecordDesc, data: dataDesc } = useSubscription(GetRecordSubDesc)
    return { dataDesc, loadingGetRecordDesc }
}