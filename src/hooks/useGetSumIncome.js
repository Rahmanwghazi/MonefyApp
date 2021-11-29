import { useQuery } from '@apollo/client';
import { GetSumIncomeRecord } from '../graphql/Queries';

const userId = localStorage.getItem('auth0:id_token:sub');

export const useGetSumIncome = () => {
    const { loading: loadingIncome, data: dataIncome } = useQuery(GetSumIncomeRecord, {
        variables: { userId }
    })
    return { loadingIncome, dataIncome }
}