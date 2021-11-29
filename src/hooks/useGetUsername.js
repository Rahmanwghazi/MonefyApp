import { useQuery } from "@apollo/client"
import { GetUsername } from "../graphql/Queries"

export const useGetUsername = () => {
    const { loading: loadingGetUsername, data: dataGetUsername } = useQuery(GetUsername)
    return { dataGetUsername, loadingGetUsername }
}