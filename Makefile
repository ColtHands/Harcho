branch := $(shell git rev-parse --abbrev-ref HEAD)

# run:
# 	$(MAKE) rust
# 	$(MAKE) dotnet
# 	$(MAKE) python
# 	$(MAKE) haskell

hask hs h:
	echo "RUNNING HASKELL"
	runhaskell ./src/haskell/index.hs

node n js:
	node src/js/index.js

csharp:
	cd src/csharp && dotnet run

rust:
	cargo run

py:
	python ./src/python/index.py

elixir:
	elixir ./src/elixir/index.exs

lisp:
	sbcl --script ./src/lisp/index.lisp

ps:
	powershell.exe -noexit -file "C:\Users\F1ks3r\desktop\stuff\junk\solyanka\PowerShell\PowerShell.ps1" "MY-PC"

save:
	git branch
	git status
	git add .
	git commit -m save
	git push origin $(branch)
	git push bitbucket $(branch)

update:
	echo "asd"