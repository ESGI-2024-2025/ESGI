
def main() -> None:
    a = 23
    b = 39
    print("main:",a+b)
    raise ValueError("main")

def setTitle() -> None:
    raise NotImplementedError("Is not a web page.")

if __name__ == "__main__":
    main()
