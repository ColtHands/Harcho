run:
	$(MAKE) rust
	$(MAKE) dotnet
	$(MAKE) python
	$(MAKE) haskell

rust:
	echo "RUNNING RUST"
	cargo run

dotnet:
	echo "RUNNING DOTNET"
	dotnet run ./src/Index.cs

py:
	echo "RUNNING PYTHON"
	python ./src/python.py

hask:
	echo "RUNNING HASKELL"
	runhaskell ./src/hask.hs