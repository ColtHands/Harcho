{-# LANGUAGE QuasiQuotes, OverloadedStrings, FlexibleInstances, UndecidableInstances, DuplicateRecordFields #-}

import Control.Monad (forM_, mapM_)
import Debug.Trace (trace)
import Data.List
import Data.List.Split (splitOn)
import Src.Haskell.MyModule (myModule)
import Src.Haskell.JustANumber (aNumber)

main :: IO()
main = do
    print ([1..5])