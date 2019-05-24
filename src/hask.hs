{-# LANGUAGE QuasiQuotes, OverloadedStrings, FlexibleInstances, UndecidableInstances, DuplicateRecordFields #-}

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

collatzFn :: Int -> Int
collatzFn n
    | even n = n `div` 2
    | True = 3 * n +1

collatzList :: Int -> [Int]
collatzList n
    | n == 1 = [1]
    | True = n : collatzList (collatzFn n)

collatzLength n = length (collatzList (n)) - 1

abbeyCollatz arrOfStrOfInts = unwords (map show (map collatzLength (map read (words arrOfStrOfInts) :: [Int])))

abbeyLinearFn x1 y1 x2 y2 = map round [(y2 - y1) / (x2 - x1), y1 - (((y2 - y1) / (x2 - x1)) * x1)]

tracingSmallestMultiple num = "num = " ++ show num ++ " array = " ++ show ([num % n | n <- [1..20]]) ++ " sum = " ++ show (sum [num % n | n <- [1..20]])

smallestMultiple num = trace (tracingSmallestMultiple num) $
    if (sum [num % n | n <- [1..20]]) == 0 then (print num) else smallestMultiple (num + 1)

sumOfSquares n = sum [n^2 | n <- [1..n]]
squareOfSum n = (sum [1..n])^2
squareOfSumSumOfSquaresDifference n = squareOfSum n - sumOfSquares n

printstuff _ = print "asd"

primes :: [Int]
primes = 2 : 3 : filter (isPrime primes) [5, 7..]

isPrime :: [Int] -> Int -> Bool
isPrime (p:ps) n
    -- No need to check divisors past sqrt(n), we know n is prime
    | p*p > n = True 
    -- Otherwise, it's prime if none of the primes we've discovered so far divide it evenly
    | otherwise = n `rem` p /= 0 && isPrime ps n

doubleList list1 list2 = zip list1 list2

main = do
    print (mo3n5 1000)
    print (fib 35)
    print ((fib 32) < 4000000)
    print (sum [fib(n) | n <- [1..33], fib(n) % 2 == 0])
    print (squareOfSumSumOfSquaresDifference 100)
    print (collatzFn 15)
    print (collatzList 15)
    print (abbeyCollatz "121 1373 125 16326 12 263 2070 17 19655 398 2918 3225 46937 7785 33 218 2470 471 246")
    print (abbeyLinearFn 0 0 1 1)
    print (abbeyLinearFn (-721) (67723) (861) (-80985))
    forM_ [1,2,4] printstuff
    print (primes!!10000)
    print (doubleList [123,123,2] [1,23,4])