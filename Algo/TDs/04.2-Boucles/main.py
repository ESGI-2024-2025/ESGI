
def main() -> int:
    
    rope = 200
    i = 0
    space = 0

    while i<rope:

        if i*(rope-2*i) < space:
            return i-1

        space = i*(rope-2*i)
        i += 1

if __name__ == "__main__":
    print(main())
