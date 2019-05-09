module Main (mo3n5, fib, main) where

import Control.Monad (forM_, mapM_)
import Debug.Trace (trace)
import Data.List

a % b = a `mod` b

mo3n5 :: Integer -> Integer
mo3n5 num = sum [n | n <- [1..num-1], n % 3 == 0 || n % 5 == 0]

fib :: Int -> Int
fib n = go 0 1 n
    where
        go a b 0 = a
        go a b n = go b (a + b) (n - 1)

abbeyCollatzSequence :: Integer -> [Char]
abbeyCollatzSequence x
    | x == 1 = 1
    | x % 2 == 0 = (show (abbeyCollatzSequence ((x `quot` 2))))
    | True = (show (abbeyCollatzSequence (3 * x + 1)))

tracingSmallestMultiple num = "num = " ++ show num ++ " array = " ++ show ([num % n | n <- [1..20]]) ++ " sum = " ++ show (sum [num % n | n <- [1..20]])

smallestMultiple num = trace (tracingSmallestMultiple num) $
    if (sum [num % n | n <- [1..20]]) == 0 then (print num) else smallestMultiple (num + 1)

sumOfSquares n = sum [n^2 | n <- [1..n]]
squareOfSum n = (sum [1..n])^2
squareOfSumSumOfSquaresDifference n = squareOfSum n - sumOfSquares n
main = do
    print (mo3n5 1000)
    print (fib 35)
    print ((fib 32) < 4000000)
    print (sum [fib(n) | n <- [1..33], fib(n) % 2 == 0])
    print (squareOfSumSumOfSquaresDifference 100)
    -- print (abbeyCollatzSequence 15)
