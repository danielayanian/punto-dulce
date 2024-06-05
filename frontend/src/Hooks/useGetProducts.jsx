import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../helpers/fetchers.js'

const useGetProducts = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['getProducts'],
    queryFn: getProducts,
  })
  return { isLoading, error, data }
}

export default useGetProducts