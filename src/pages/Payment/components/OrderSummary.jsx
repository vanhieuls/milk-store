import React from 'react'
import { FaCreditCard, FaMoneyBillWave } from 'react-icons/fa'

const OrderSummary = ({ formData, paymentMethod }) => {
  // Format address from new structure
  const formatAddress = () => {
    const parts = [
      formData.addressLine,
      formData.wardCommune,
      formData.state,
      formData.postalCode,
      formData.country
    ].filter(Boolean);
    return parts.join(', ') || 'Chưa có địa chỉ';
  };

  return (
    <div className='mb-4 rounded-xl bg-white p-6 shadow'>
      <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
        Tóm tắt đơn hàng
      </h2>
      <div className='rounded-lg bg-gray-50 p-4'>
        <div className='space-y-4 text-sm'>
          <div>
            <p className='text-gray-800 font-medium mb-1'>Địa chỉ giao hàng:</p>
            <p className='text-gray-700'>
              {formatAddress()}
            </p>
          </div>
          <div className='border-t pt-4'>
            <p className='text-gray-800 font-medium mb-1'>Phương thức thanh toán:</p>
            <p className='flex items-center gap-2 text-gray-700'>
              {paymentMethod === 'payos' ? (
                <>
                  <FaCreditCard className='text-lg text-blue-500' />
                  Thanh toán trước (PayOS)
                </>
              ) : (
                <>
                  <FaMoneyBillWave className='text-lg text-green-500' />
                  Thanh toán khi nhận hàng
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary
