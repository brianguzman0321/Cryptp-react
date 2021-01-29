import React from 'react';
import { toast } from 'react-toastify';
//icons
import { FaEthereum } from 'react-icons/fa';
import { FaBtc } from 'react-icons/fa';
import { SiLitecoin } from 'react-icons/si';
import { SiBitcoin } from 'react-icons/si';
import { SiXrp } from 'react-icons/si';

export const toastr = {
  success: string => toast.success(`✔️ ${string}`),
  error: string =>
    toast.error(`
    ❌ ${string}`),
};

export const currencyIcons = [
  { symbol: 'ETH', icon: <FaEthereum /> },
  { symbol: 'BTC', icon: <SiBitcoin /> },
  { symbol: 'LTC', icon: <SiLitecoin /> },
  { symbol: 'BCH', icon: <FaBtc /> },
  { symbol: 'XRP', icon: <SiXrp /> },
];
