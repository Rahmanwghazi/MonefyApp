import { useMutation } from '@apollo/client';
import { UpdateAverageIncome } from '../graphql/Mutations';
import { GetAverageIncome } from '../graphql/Queries';

export const useUpdateAverageIncome = () => {
    const [updateAvg, { loading }] = useMutation(UpdateAverageIncome, {
        refetchQueries: [GetAverageIncome]
    })
    return { updateAvg, loading }
}