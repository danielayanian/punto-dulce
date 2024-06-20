import { useQuery } from '@tanstack/react-query'
import { getPreview } from '../helpers/fetchers.js'

const useGetPreview = () => {
  
  const { isLoading, data, error } = useQuery({
    queryKey: ['getPreview'], 
    queryFn: getPreview, 
  });
  return { isLoading, error, data }
}

export default useGetPreview