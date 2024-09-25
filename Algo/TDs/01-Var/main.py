
def changeValue(a:int, b:int) -> tuple[int, int]:
    c = b
    b = a
    a = c
    return a,b

def main() -> None:
    a = 3
    b = 5
    a, b = changeValue(a,b)
    print(a,b)

if __name__ == "__main__":
    main()