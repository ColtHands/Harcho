{-# LANGUAGE QuasiQuotes, OverloadedStrings, FlexibleInstances, UndecidableInstances, DuplicateRecordFields #-}

module Main (mo3n5, fib, main) where

import Control.Monad (forM_, mapM_)
import Debug.Trace (trace)
import Data.List
import Data.List.Split (splitOn)

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

primes :: Int -> [Int]
primes n = 2 : 3 : filter (isPrime (primes n)) [5, 7..n]

isPrime :: [Int] -> Int -> Bool
isPrime (p:ps) n
    -- No need to check divisors past sqrt(n), we know n is prime
    | p*p > n = True
    -- Otherwise, it's prime if none of the primes we've discovered so far divide it evenly
    | otherwise = n `rem` p /= 0 && isPrime ps n

twoArraysToupled = zip [17, 28, 30] [99, 16, 8]

compareTouples :: (Integer, Integer) -> (Bool, Bool)
compareTouples tup = (fst tup > snd tup, fst tup < snd tup)

-- euler 10
summPrimesBelow n = (sum (primes n))

digits :: Integral x => x -> [x]
digits 0 = []
digits x = digits (x `div` 10) ++ [x `mod` 10]

powerDigitSum = sum (digits (2^1000))

-- abbey
abbey4LambdaExpression x y = if x < y then x else y
abbey5LambdaExpression x y z = minimum [x,y,z]
printWordedArrayForCodeAbbey array = unwords (map show $ array)

abbey2 = sum (map read $ words "651 114 147 194 498 1286 564 82 615 1046 217 240 78 670 205 339 131 437 561 598 840 437 552 1149 208 178 893 133 639 156 1265 1280 260 111 173 749 97 728 821 703 474 1028 934 542 398 1129 872 519" :: [Int])
abbey3 = zipWith (+) [713168,409533,979431,869213,409179,624047,812979,439767,540983,826047,38810,419468,746386,628620,341562] [440570,214182,651516,606115,188149,164184,560130,351182,488985,303517,244488,855827,328064,339462,314837]
abbey4 = zipWith (abbey4LambdaExpression) [6607605,2231416,-6314335,-2800553,2639659,7979086,7609610,-4158079,7981424,2950042,-1605792,-9691607,-4952941,-1325311,2019143,-5827369,-2312768,3523119,6140438,-9023441,1625241,4932024,-1708703][5402542,-5103629,9736391,-396338,902675,-3848073,-664347,-1972619,-2029500,-8768274,273396,5520028,5190419,7798961,2284690,-1373251,6404046,1372896,-9277433,-1219903,8955644,-765148,-9226055]
abbey5 = zipWith3 (abbey5LambdaExpression) [-2910337,-8629454,-1006865,-6955413,7368574,-8528150,-6033411,5525484,4074069,-6161758,-3357169,-9933692,3875019,-5193979,-1743863,-9427445,-7692867,-8240935,-8671642,-5307648,137752] [5297107,-1859841,9428279,-5093267,-2996496,-5153421,-6939757,7651592,-7298004,-3001654,4088009,5458554,-5548310,-2503723,-5135149,-3663299,303290,-4171226,9902843,-6258915,383916] [3423476,3808712,931001,-6549884,2316418,-8265421,9451931,9569293,-6636006,-4554599,-9257492,-1117333,-1689053,3217680,-9778816,-4932237,-1871995,-4220402,-1518407,5479939,-432052]

abbey151 = maximum [23133,54578,-76885,-44320,788,16854,77242,2372,-53168,21210,17102,37694,30075,-62885,62624,-78420,77366,35004,-74777,-52162,24183,-54934,-57231,18385,-33214,11961,-32034,-49805,-37742,-39470,-1639,65391,-64891,1476,-58928,15896,-61670,-61686,-61731,-34838,39524,35370,-77143,-10401,52485,65480,-8822,49852,20485,-3599,77689,-35332,21467,-59541,63052,68252,32420,-48981,-61553,74678,-8452,16808,60069,6656,-61716,-78859,-57447,-43386,-60545,-39179,1776,58978,76191,4632,-31423,48676,-9887,39755,18528,-69402,-43844,16218,-24735,57622,36677,-41682,45875,-10903,-10664,64322,-16225,60884,1130,-36155,-12459,19414,-35015,10093,56028,-15561,50914,-22196,-36582,47105,62436,11994,15781,-27450,-28250,-45690,-16853,7906,50528,38412,-14472,7205,76730,-48596,76301,-13934,-64274,-19923,-33049,16855,23921,34492,-43730,68905,-35415,-67702,-26655,-64500,-9898,16762,62604,-27462,-51243,-1614,25087,506,32696,-71765,-71588,3224,46647,-6060,-69571,43377,25343,-73269,-50556,41069,-13193,-3606,-22076,-69272,-49114,14193,79633,-4529,26491,-27021,10970,-63407,69741,-6425,-10869,-61502,71960,-65781,19004,24657,-57546,27416,-52119,69100,-58644,-41690,32477,46699,-34960,61920,7768,31846,-21685,65692,42574,9201,-114,42207,-75328,-53623,-64814,15642,-37030,-75073,-70783,32100,-56575,-78822,46319,42428,25834,68772,-10156,53715,57872,11200,-67975,10350,-22100,-22935,-7729,65668,-71089,50585,51361,51484,-20214,-28752,13692,-15542,-2375,28878,-79900,40594,33804,-70683,-7305,57228,-69506,-40986,19657,36328,-52214,-70498,10044,-74341,20702,22069,16008,78602,79133,-71721,64270,-71955,58863,35632,59529,-41350,-73120,-6779,23107,4504,-57901,23206,-34901,55903,32522,37793,33132,43016,76807,-27210,-655,-55407,-17709,-70611,-49748,-77006,31457,46259,-78404,30591,54538,65866,38635,33402,21498,18164,72051,28377,-68614,15159,-47118,-46516,-41635,-2020,-70612,70887,-44226,42519,33904,-47419,-64691,-46751,-22826,-2400,-37362,7425]
abbey152 = minimum [23133,54578,-76885,-44320,788,16854,77242,2372,-53168,21210,17102,37694,30075,-62885,62624,-78420,77366,35004,-74777,-52162,24183,-54934,-57231,18385,-33214,11961,-32034,-49805,-37742,-39470,-1639,65391,-64891,1476,-58928,15896,-61670,-61686,-61731,-34838,39524,35370,-77143,-10401,52485,65480,-8822,49852,20485,-3599,77689,-35332,21467,-59541,63052,68252,32420,-48981,-61553,74678,-8452,16808,60069,6656,-61716,-78859,-57447,-43386,-60545,-39179,1776,58978,76191,4632,-31423,48676,-9887,39755,18528,-69402,-43844,16218,-24735,57622,36677,-41682,45875,-10903,-10664,64322,-16225,60884,1130,-36155,-12459,19414,-35015,10093,56028,-15561,50914,-22196,-36582,47105,62436,11994,15781,-27450,-28250,-45690,-16853,7906,50528,38412,-14472,7205,76730,-48596,76301,-13934,-64274,-19923,-33049,16855,23921,34492,-43730,68905,-35415,-67702,-26655,-64500,-9898,16762,62604,-27462,-51243,-1614,25087,506,32696,-71765,-71588,3224,46647,-6060,-69571,43377,25343,-73269,-50556,41069,-13193,-3606,-22076,-69272,-49114,14193,79633,-4529,26491,-27021,10970,-63407,69741,-6425,-10869,-61502,71960,-65781,19004,24657,-57546,27416,-52119,69100,-58644,-41690,32477,46699,-34960,61920,7768,31846,-21685,65692,42574,9201,-114,42207,-75328,-53623,-64814,15642,-37030,-75073,-70783,32100,-56575,-78822,46319,42428,25834,68772,-10156,53715,57872,11200,-67975,10350,-22100,-22935,-7729,65668,-71089,50585,51361,51484,-20214,-28752,13692,-15542,-2375,28878,-79900,40594,33804,-70683,-7305,57228,-69506,-40986,19657,36328,-52214,-70498,10044,-74341,20702,22069,16008,78602,79133,-71721,64270,-71955,58863,35632,59529,-41350,-73120,-6779,23107,4504,-57901,23206,-34901,55903,32522,37793,33132,43016,76807,-27210,-655,-55407,-17709,-70611,-49748,-77006,31457,46259,-78404,30591,54538,65866,38635,33402,21498,18164,72051,28377,-68614,15159,-47118,-46516,-41635,-2020,-70612,70887,-44226,42519,33904,-47419,-64691,-46751,-22826,-2400,-37362,7425]

abbey6 = zipWith (abbey6Lambda) [-8447289,-3327546,-5802018,8452221,-7351226,5715,9061365,-2096209,7795,16415,4714832,1136710,2694187] [4180284,-2098826,4045162,24,83002,1968,-1762172,-2377185,1144,1682,878,213,-776040]
abbey6Lambda a b = round (a / b)

fahrenheitToCelsiusLambdaAbbey7 f = (f - 32) * (5/9)
abbey7 = map round $ map fahrenheitToCelsiusLambdaAbbey7 $ [396, 326, 337, 336, 36, 249, 349, 441, 59, 254, 453, 83, 578, 185, 165, 496, 95, 433, 454, 473, 510, 331, 125, 258, 598, 314, 44, 453, 297, 478, 259, 92, 204, 565, 396, 209, 214]

removeWovelFromString :: [Char] -> [Char]
removeWovelFromString xs = [ x | x <- xs, (x `elem` ("aiueoy" :: [Char])) ]

abbey20 = do
    x <- readFile "public/inputs.txt"
    let inputs = splitOn "\n" x
    let res = printWordedArrayForCodeAbbey (map length $ (map removeWovelFromString $ inputs))
    print res

sumD 0 = 0
sumD x = (x `mod` 10) + sumD (x `div` 10)

abbey11 = do
    x <- readFile "public/inputs.txt"
    let inputs = printWordedArrayForCodeAbbey ((map sumD $ (map (\x -> x!!0 * x!!1 + x!!2) $ (map (\x -> (map read $ x) :: [Int]) $ (map (splitOn " ") $ splitOn "\n" x)))))
    print inputs

readAbbeyArr withSomeAbbeyFunc = do
    x <- readFile "public/inputs.txt"
    let inputs = (map (withSomeAbbeyFunc) $ ((map (\x -> (map read $ x) :: [Int]) $ (map (splitOn " ") $ splitOn "\n" x))))
    print (printWordedArrayForCodeAbbey inputs)

abbey16 :: [Int] -> Int
abbey16 arr = round ((fromIntegral (sum arr)) / (fromIntegral (length arr)))

abbey9 :: [Int] -> Int
abbey9 arr = do
    let a = arr!!0
    let b = arr!!1
    let c = arr!!2
    if (a + b) > c then
        if (a + c) > b then
            if (b + c) > a then 1
            else 0
        else 0
    else 0

abbey145 :: [Int] -> Integer
abbey145 arr = do
    let a = integerArr!!0
    let b = integerArr!!1
    let c = integerArr!!2
    (a ^ (b % (c-1))) % c
    where integerArr = map toInteger $ arr

-- modExp :: Integer -> Integer -> Integer -> Integer
-- modExp a b c = mod (a^(mod b (c-1))) (c)

main :: IO()
main = do
    readAbbeyArr abbey145
    -- print (removeWovelFromString "asdasdsadaqfdsgrtukiu")
    -- print (printWordedArrayForCodeAbbey abbey7)
    -- print (printWordedArrayForCodeAbbey abbey6)
    -- print (abbey151)
    -- print (abbey152)
    -- print (printWordedArrayForCodeAbbey abbey5)
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
    -- print ([length (filter (== True) (fst (unzip (map compareTouples twoArraysToupled)))), length (filter (== True) (snd (unzip (map compareTouples twoArraysToupled))))])
