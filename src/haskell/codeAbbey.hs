module Src.Haskell.CodeAbbey where

a % b = a `mod` b

collatzFn :: Int -> Int
collatzFn n
    | even n = n `div` 2
    | True = 3 * n +1

collatzList :: Int -> [Int]
collatzList n
    | n == 1 = [1]
    | True = n : collatzList (collatzFn n)

collatzLength n = length (collatzList (n)) - 1

first a b = a + b
second arr = sum arr
fourtyEight arrOfStrOfInts = unwords (map show (map collatzLength (map read (words arrOfStrOfInts) :: [Int])))

josephusProblem 1 _ = 1
josephusProblem n k = ((josephusProblem (n - 1) k) + k - 1) % n + 1