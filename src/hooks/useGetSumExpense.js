import { useQuery } from '@apollo/client';
import { GetSumExpenseRecord } from '../graphql/Queries';

export const useGetSumExpense = () => {
    const { loading: loadingExpense, data: dataExpense } = useQuery(GetSumExpenseRecord)
    return { loadingExpense, dataExpense }
}