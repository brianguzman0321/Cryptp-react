import React from 'react';
import { toast } from 'react-toastify';
//icons
import { FaEthereum } from 'react-icons/fa';
import { FaBtc } from 'react-icons/fa';

export const toastr = {
  success: string => toast.success(`✔️ ${string}`),
  error: string =>
    toast.error(`
    ❌ ${string}`),
};

export const currencyIcons = [
  { symbol: 'ETH', icon: <FaEthereum /> },
  { symbol: 'BTC', icon: <FaBtc /> },
];
