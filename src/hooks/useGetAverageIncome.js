import { useQuery } from '@apollo/client';
import { GetAverageIncome } from '../graphql/Queries';

export const useGetAverageIncome = () => {
    const { loading, data } = useQuery(GetAverageIncome)
    return { data, loading }
}