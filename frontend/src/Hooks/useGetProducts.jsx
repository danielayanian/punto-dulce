import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../helpers/fetchers.js'

const useGetProducts = (url) => {
  
  const { isLoading, data, error } = useQuery({
    queryKey: [url], 
    queryFn: () => getProducts(url), 
  });
  return { isLoading, error, data }
}

export default useGetProducts