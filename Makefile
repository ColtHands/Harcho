branch := $(shell git rev-parse --abbrev-ref HEAD)

js javascript node n:
	nodemon ./src/js/index.js

hask hs h:
	echo "RUNNING HASKELL"
	runhaskell ./src/haskell/index.hs

csharp cs:
	cd src/csharp && dotnet run

rust r:
	cargo run

py python p`:
	python ./src/python/index.py
	python ./src/python/tensorStuff.py

lisp li l:
	sbcl --script ./src/lisp/index.lisp

save:
	git branch
	git status
	git add .
	git commit -m save
	git push origin $(branch)

update:
	echo "asd"