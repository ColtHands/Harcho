module Main (mo3n5, fib, main) where

import Control.Monad (forM_, mapM_)

a % b = a `mod` b

mo3n5 :: Integer -> Integer
mo3n5 num = sum [n | n <- [1..num-1], n % 3 == 0 || n % 5 == 0]

fib :: Int -> Int
fib n = go 0 1 n
  where
    go a b 0 = a
    go a b n = go b (a + b) (n - 1)

main = do
    print (mo3n5 1000)
    print (fib 35)
    print ((fib 32) < 4000000)
    print (sum [fib(n) | n <- [1..33], fib(n) % 2 == 0])