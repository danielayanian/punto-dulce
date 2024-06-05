import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../helpers/fetchers.js'

const useGetCategories = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategories,
  })
  return { isLoading, error, data }
}

export default useGetCategories