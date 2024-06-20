import { useQuery } from '@tanstack/react-query'
import { putCart } from '../helpers/fetchers.js'

const usePutCart = (productId, quantity) => {
  
  const { isLoading, data, error } = useQuery({
    queryKey: [productId, quantity], 
    queryFn: () => putCart(productId, quantity), 
  });
  return { isLoading, error, data }
}

export default usePutCart