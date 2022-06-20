{-# LANGUAGE QuasiQuotes, OverloadedStrings, FlexibleInstances, UndecidableInstances, DuplicateRecordFields #-}

import Control.Monad (forM_, mapM_)
import Debug.Trace (trace)
import Data.List
import Data.List.Split (splitOn)
import Src.Haskell.MyModule (myModule)
import Src.Haskell.JustANumber (aNumber)
import Src.Haskell.Exercism

main :: IO()
main = do
    print ((isLeapYear 1951)) -- False
    print ((isLeapYear 1952)) -- True
    print ((isLeapYear 2000)) -- True
    print ((isLeapYear 2100)) -- Flase