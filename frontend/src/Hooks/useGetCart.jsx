import { useQuery } from '@tanstack/react-query'
import { getCart } from '../helpers/fetchers.js'

const useGetCart = () => {
  
  const { isLoading, data, error } = useQuery({
    queryKey: ['getCart'], 
    queryFn: getCart, 
  });
  return { isLoading, error, data }
}

export default useGetCart