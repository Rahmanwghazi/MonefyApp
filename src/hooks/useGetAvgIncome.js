import { useQuery } from "@apollo/client"
import { GetAverageIncome } from "../graphql/Queries"

export const useGetAverageIncome = () => {
    const { loading: loadingGetAverageIncome, data: dataGetAverageIncome } = useQuery(GetAverageIncome)
    return { dataGetAverageIncome, loadingGetAverageIncome }
}