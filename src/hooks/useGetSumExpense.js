import { useQuery } from '@apollo/client';
import { GetSumExpenseRecord } from '../graphql/Queries';

const userId = localStorage.getItem('auth0:id_token:sub');

export const useGetSumExpense = () => {
    const { loading: loadingExpense, data: dataExpense } = useQuery(GetSumExpenseRecord,{
        variables: { userId }
    })
    return { loadingExpense, dataExpense }
}