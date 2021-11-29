import { useMutation } from '@apollo/client';
import { UpdateUsername } from '../graphql/Mutations';
import { GetUsername } from '../graphql/Queries';

export const useUpdateUsername = () => {
    const [updateUsername, { loading: loadingUpdate }] = useMutation(UpdateUsername, {refetchQueries: [GetUsername]})
    return { updateUsername, loadingUpdate }
}