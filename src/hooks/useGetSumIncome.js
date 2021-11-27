import { useQuery } from '@apollo/client';
import { GetSumIncomeRecord } from '../graphql/Queries';

export const useGetSumIncome = () => {
    const { loading: loadingIncome, data: dataIncome } = useQuery(GetSumIncomeRecord)
    return { loadingIncome, dataIncome }
}