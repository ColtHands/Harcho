module Src.Haskell.Exercism where

a % b = a `mod` b

isLeapYear :: Integer -> Bool
isLeapYear year
    | year % 400 == 0 = True
    | year % 100 == 0 = False
    | year % 4 == 0 = True
    | otherwise = False