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

twoArraysToupled = zip [17, 28, 30] [99, 16, 8]

compareTouples :: (Integer, Integer) -> (Bool, Bool)
compareTouples tup = (fst tup > snd tup, fst tup < snd tup)

-- 123 -> [1,2,3]
digits :: Integral x => x -> [x]
digits 0 = []
digits x = digits (x `div` 10) ++ [x `mod` 10]

powerDigitSum = sum (digits (2^1000))

largeSum = [
    0135740250,
    7018260538,
    6617309629,
    6154908250,
    8063246676,
    4361726757,
    5889832738,
    0272189318,
    1603153276,
    6757934951,
    9324193331,
    7944758178,
    5598838407,
    8628227828,
    1170094390,
    0104293586,
    0517255829,
    4970056938,
    4438377604,
    7779295145,
    5258350721,
    7223636045,
    0733969412,
    0512689692,
    2563049483,
    2956340691,
    7107928209,
    0393682126,
    4375946515,
    9257766954,
    7864797581,
    7806860984,
    5590848030,
    0693150332,
    6235447210,
    2633987085,
    0315001271,
    8746004375,
    2552737307,
    7401875275,
    8770190271,
    1632866526,
    0746255962,
    2810917141,
    5025333403,
    8420090470,
    6638784583,
    1441773470,
    2486764533,
    2310058822,
    3868218774,
    4507995236,
    0326572967,
    7058596522,
    4765745501,
    3798879715,
    3226651381,
    1122869539,
    9879593635,
    0388584903,
    3532961922,
    5523597457,
    1129967519,
    7770775672,
    7058077308,
    0547126581,
    7563400500,
    7251250327,
    1296897789,
    3352399886,
    7929701337,
    3173312731,
    5914677504,
    3619626622,
    6944540724,
    5556214818,
    6088076852,
    8982642090,
    2876952786,
    9763878039,
    7408011116,
    4490851411,
    9069790714,
    6645795096,
    0197230297,
    6085089252,
    2652315011,
    0598436791,
    9028300699,
    4449733078,
    2488917353,
    3204149535,
    0566631954,
    7822703280,
    2325230608,
    1980811197,
    8721859617,
    2284509516,
    2804609722,
    4330331690
]

main = do
    print largeSum
    -- print powerDigitSum
    -- print (mo3n5 1000)
    -- print (fib 35)
    -- print ((fib 32) < 4000000)
    -- print (sum [fib(n) | n <- [1..33], fib(n) % 2 == 0])
    -- print (squareOfSumSumOfSquaresDifference 100)
    -- print (collatzFn 15)
    -- print (collatzList 15)
    -- print (abbeyCollatz "121 1373 125 16326 12 263 2070 17 19655 398 2918 3225 46937 7785 33 218 2470 471 246")
    -- print (abbeyLinearFn 0 0 1 1)
    -- print (abbeyLinearFn (-721) (67723) (861) (-80985))
    -- forM_ [1,2,4] printstuff
    -- print (primes!!10000)
    -- print ([length (filter (== True) (fst (unzip (map compareTouples twoArraysToupled)))), length (filter (== True) (snd (unzip (map compareTouples twoArraysToupled))))])
    