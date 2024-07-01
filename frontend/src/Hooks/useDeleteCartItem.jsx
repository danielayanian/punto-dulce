import { useState } from 'react';

const useDeleteCartItem = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const deleteCartItem = async (productId) => {
    setIsDeleting(true);
    setError(null);
    try {
      const response = await fetch(`/api/v1/cart/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el producto del carrito');
      }

      setIsDeleting(false);
      return await response.json();
    } catch (err) {
      setIsDeleting(false);
      setError(err);
      throw err;
    }
  };

  return { isDeleting, error, deleteCartItem };
};

export default useDeleteCartItem;
