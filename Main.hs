{-# LANGUAGE QuasiQuotes, OverloadedStrings, FlexibleInstances, UndecidableInstances, DuplicateRecordFields #-}

import Control.Monad (forM_, mapM_)
import Debug.Trace (trace)
import Data.List
import Data.List.Split (splitOn)
import Src.Haskell.MyModule (myModule)
import Src.Haskell.JustANumber (aNumber)
import Src.Haskell.CodeAbbey

main :: IO()
main = do
    print (first 13426 7656)
    print (second [151,904,27,394,557,575,1027,308,1062,839,129,658,1176,730,510,392,1010,903,645,1120,1078,422,581,282,702,747,598,1074,856,230,99,852,996,909,143,244,825,389,587,846,166,897,630,586])
    print (fourtyEight "23 24864 14 3130 419 49081 20 22412 3279 20 48 22591 3855 2649 153 398 39181 46 13 8386 445")